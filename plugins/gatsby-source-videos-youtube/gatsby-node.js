const fetch = require('isomorphic-unfetch');
const _ = require('lodash');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onPreInit = () => console.log('Loaded source-plugin');

const createNodeFromData = (item, nodeType, helpers) => {
  const nodeMetadata = {
    id: helpers.createNodeId(`${nodeType}-${item.id}`),
    parent: null, // this is used if nodes are derived from other nodes, a little different than a foreign key relationship, more fitting for a transformer plugin that is changing the node
    children: [],
    internal: {
      type: nodeType,
      content: JSON.stringify(item),
      contentDigest: helpers.createContentDigest(item),
    },
  };

  const node = Object.assign({}, item, nodeMetadata);
  helpers.createNode(node);
  return node;
};

const getAllData = async ({ type = 'playlists', query = '', apiKey, part = 'contentDetails' }) => {
  let data = [];
  let response = {};
  while (response.nextPageToken || data.length === 0) {
    const URL = `https://www.googleapis.com/youtube/v3/${type}?part=${part}&maxResults=50&key=${apiKey}${query}&pageToken=${
      response.nextPageToken || ''
    }`;
    response = await fetch(URL)
      .then((res) => res.json())
      .catch((err) => console.error('Error in fetching data from youtube api: ', err));
    data.push(...response.items);
  }
  return data;
};
exports.sourceNodes = async (
  {
    actions: { createNode, createTypes, touchNode },
    createContentDigest,
    createNodeId,
    cache,
    getNodesByType,
    getNode,
    reporter,
  },
  { apiKey, channelId },
) => {
  if (!apiKey) return reporter.panic('gatsby-source-youtube: You must provide your api key');
  if (!channelId) return reporter.panic('gatssby-source-youtube: You must provide your channel id');
  const helpers = { createNode, createContentDigest, createNodeId };

  getNodesByType('Channel').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('ChannelSections').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('Playlist').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('Video').forEach((node) => touchNode({ nodeId: node.id }));

  let playlistData = await cache.get(`playlists`);
  let channelsData = await cache.get(`channels`);
  let allVideos = await cache.get(`videos`);
  let channelSections = await cache.get('channelSections');
  let channelUploadVideos = await cache.get('channelUploadVideos');

  // get data
  if (!channelsData) {
    channelsData = await getAllData({
      type: 'channels',
      query: `&id=${channelId}`,
      part: 'statistics,snippet,contentDetails',
      apiKey,
    });
    await cache.set(`channels`, channelsData);
  }

  if (!channelSections) {
    channelSections = await getAllData({
      type: 'channelSections',
      query: `&channelId=${channelId}`,
      part: 'snippet,contentDetails',
      apiKey,
    });
    await cache.set(`channelSections`, channelSections);
  }

  if (!playlistData) {
    playlistData = await getAllData({
      type: 'playlists',
      query: `&channelId=${channelId}`,
      part: 'snippet,contentDetails',
      apiKey,
    });
    await cache.set(`playlists`, playlistData);
  }

  if (!allVideos) {
    // loop through data returned from the api and create Gatsby nodes for them
    const videoRequest = playlistData.map(async (playlist, index) =>
      getAllData({
        type: 'playlistItems',
        part: 'snippet,contentDetails',
        query: `&playlistId=${playlist.id}`,
        apiKey,
      }),
    );

    // await??
    allVideos = await Promise.all(videoRequest);
    // allVideos = await getAllData({
    //   type: 'playlistItems',
    //   part: "snippet,contentDetails",
    //   query: `&playlistId=${channelsData[0].contentDetails.relatedPlaylists.uploads}`,
    //   apiKey
    // });
    await cache.set(`videos`, allVideos);
  }

  if (!channelUploadVideos) {
    channelUploadVideos = await getAllData({
      type: 'playlistItems',
      part: 'snippet,contentDetails',
      query: `&playlistId=${channelsData[0].contentDetails.relatedPlaylists.uploads}`,
      apiKey,
    });
    await cache.set(`channelUploadVideos`, channelUploadVideos);
  }

  // build data
  // build channels data
  channelsData.forEach((channel) => {
    channel.channelId = channel.id;
    createNodeFromData(channel, 'Channel', helpers);
  });

  // build videos data
  allVideos = _.flatten(allVideos);
  allVideos = [...allVideos, ...channelUploadVideos];
  const videoNodeId = {};

  const groupedVideos = _.groupBy(allVideos, 'contentDetails.videoId');
  allVideos = _.sortBy(
    _.values(
      _.mapValues(groupedVideos, (videos) => {
        const playlistIds = _.map(videos, 'snippet.playlistId');
        return {
          ...videos[0],
          playlistIds,
        };
      }),
    ),
    'snippet.publishedAt',
  );

  allVideos.forEach((video) => {
    const node = createNodeFromData(video, 'Video', helpers);
    video.playlistIds.forEach((playlistId) => {
      if (!videoNodeId[playlistId]) {
        videoNodeId[playlistId] = [];
      }
      videoNodeId[playlistId].push(node.id);
    });
  });

  // build playlist data
  playlistData.push({
    id: channelsData[0].contentDetails.relatedPlaylists.uploads,
    list: false,
    snippet: {
      title: 'Uploads',
      channelTitle: channelsData[0].snippet.title,
    },
    contentDetails: {},
  });

  playlistData.forEach((playlist) => {
    playlist.videos = videoNodeId[playlist.id];
    playlist.playlistId = playlist.id;
    createNodeFromData(playlist, 'Playlist', helpers);
  });
  //build channelsection data
  channelSections.forEach((section) => {
    if (section.snippet.type === 'recentUploads') {
      section.videos = _.reverse(
        videoNodeId[channelsData[0].contentDetails.relatedPlaylists.uploads],
      ).slice(0, 5);
      section.playlist = _.find(playlistData, {
        id: channelsData[0].contentDetails.relatedPlaylists.uploads,
      });
    } else if (section.snippet.type === 'singlePlaylist') {
      section.videos = _.reverse(videoNodeId[section.contentDetails.playlists[0]]).slice(0, 5);
      section.playlist = _.find(playlistData, {
        id: section.contentDetails.playlists[0],
      });
    }
    if (section.videos) {
      createNodeFromData(section, 'ChannelSections', helpers);
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type Channel implements Node {
    id: ID!
    local: File @link
  }
  type Playlist implements Node {
    id: ID!
    local: File @link
    videos: [Video] @link
  }
  type Video implements Node {
    id: ID!
    local: File @link
  }

  type ChannelSections implements Node {
    id: ID!
    videos: [Video] @link
  }
`;
  createTypes(typeDefs);
};

exports.onCreateNode = async ({
  actions: { createNode },
  node,
  store,
  cache,
  createNodeId,
  reporter,
}) => {
  if (
    node.internal.type === 'Channel' ||
    node.internal.type === 'Playlist' ||
    (node.internal.type === 'Video' && node.snippet.thumbnails && node.snippet.thumbnails.high)
  ) {
    let fileNode;
    let imageCacheKey = null;
    if (node.snippet.title !== 'Uploads') {
      const imageName = node.snippet.thumbnails.high.url.match(/([^/]*)\/*$/)[1];
      imageCacheKey = `local-image-${imageName}-${node.id}`;
      const cachedImage = await cache.get(imageCacheKey);
      if (cachedImage) {
        const { fileNodeID } = cachedImage;
        touchNode({ nodeId: fileNodeID });
        console.log(`Image from Cache: ${imageName}`);
        node.local = fileNodeID;
        return;
      }
    }

    try {
      if (node.snippet.title !== 'Uploads') {
        const { id } = await createRemoteFileNode({
          url: node.snippet.thumbnails.high.url,
          cache,
          store,
          createNode,
          createNodeId,
          parentNodeId: node.id,
        });
        fileNode = id;
      }
    } catch (err) {
      reporter.log(`gatsby-source-youtube: Error occured handling file at ${node.snippet.title}. Skipping!
Error: ${err}`);
    }

    node.file___NODE = fileNode;

    if (fileNode && imageCacheKey) {
      await cache.set(imageCacheKey, {
        fileNodeID: fileNode,
      });
      node.local = fileNode;
    }
    return node;
  }
};
