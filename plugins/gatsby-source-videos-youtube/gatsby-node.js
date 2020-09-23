const { createRemoteFileNode } = require('gatsby-source-filesystem');
const fetch = require('node-fetch');
const _ = require('lodash');
/**
 * ============================================================================
 * Helper functions and constants
 * ============================================================================
 */

// helper function for creating nodes
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

// https://www.googleapis.com/youtube/v3/channels?part=statistics%2Csnippet&id=UCpi2S8wW4xLlUCVryhyBtsA&key=[YOUR_API_KEY] HTTP/1.1
const getAllData = async ({ type = 'playlists', query = '', API_KEY, part = 'contentDetails' }) => {
  let data = [];
  let response = {};
  while (response.nextPageToken || data.length === 0) {
    const URL = `https://www.googleapis.com/youtube/v3/${type}?part=${part}&maxResults=50&key=${API_KEY}${query}&pageToken=${
      response.nextPageToken || ''
    }`;
    response = await fetch(URL).then((res) => res.json());
    data.push(...response.items);
  }
  return data;
};

/**
 * ============================================================================
 * Verify plugin loads
 * ============================================================================
 */

// should see message in console when running `gatsby develop` in example-site
exports.onPreInit = () => console.log('Loaded source-plugin');

/**
 * ============================================================================
 * Link nodes together with a customized GraphQL Schema
 * ============================================================================
 */

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

/**
 * ============================================================================
 * Source and cache nodes from the API
 * ============================================================================
 */

exports.sourceNodes = async function sourceNodes(
  { actions, cache, createContentDigest, createNodeId, getNodesByType, getNode },
  { API_KEY = '', channelID = '' },
) {
  const { createNode, createTypes, touchNode } = actions;
  const helpers = Object.assign({}, actions, {
    createContentDigest,
    createNodeId,
  });
  // you can access plugin options here if need be
  // const typeDefs = createTypeDef(schemas, imageKeys)
  // createTypes(typeDefs)
  // simple caching example, you can find in .cache/caches/source-plugin/some-diskstore
  // await cache.set(`hello`, `world`)
  // console.log(await cache.get(`hello`))

  // touch nodes to ensure they aren't garbage collected
  getNodesByType('Channel').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('ChannelSections').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('Playlist').forEach((node) => touchNode({ nodeId: node.id }));
  getNodesByType('Video').forEach((node) => touchNode({ nodeId: node.id }));
  // getNodesByType(AUTHOR_NODE_TYPE).forEach(node =>
  //   touchNode({ nodeId: node.id })
  // )

  // store the response from the API in the cache
  // const cacheKey = "your-source-data-key"
  // let sourceData = await cache.get(cacheKey)
  let playlistData = await cache.get(`playlists`);
  let channelsData = await cache.get(`channels`);
  let allVideos = await cache.get(`videos`);
  let channelSections = await cache.get('channelSections');
  let channelUploadVideos = await cache.get('channelUploadVideos');

  if (!channelsData) {
    channelsData = await getAllData({
      type: 'channels',
      query: `&id=${channelID}`,
      part: 'statistics,snippet,contentDetails',
      API_KEY,
    });
    await cache.set(`channels`, channelsData);
  }

  if (!channelSections) {
    channelSections = await getAllData({
      type: 'channelSections',
      query: `&channelId=${channelID}`,
      part: 'snippet,contentDetails',
      API_KEY,
    });
    await cache.set(`channelSections`, channelSections);
  }

  if (!playlistData) {
    playlistData = await getAllData({
      type: 'playlists',
      query: `&channelId=${channelID}`,
      part: 'snippet,contentDetails',
      API_KEY,
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
        API_KEY,
      }),
    );
    allVideos = await Promise.all(videoRequest);
    // allVideos = await getAllData({
    //   type: 'playlistItems',
    //   part: "snippet,contentDetails",
    //   query: `&playlistId=${channelsData[0].contentDetails.relatedPlaylists.uploads}`,
    //   API_KEY
    // });
    await cache.set(`videos`, allVideos);
  }

  if (!channelUploadVideos) {
    channelUploadVideos = await getAllData({
      type: 'playlistItems',
      part: 'snippet,contentDetails',
      query: `&playlistId=${channelsData[0].contentDetails.relatedPlaylists.uploads}`,
      API_KEY,
    });
    await cache.set(`channelUploadVideos`, channelUploadVideos);
  }

  //Build Data
  channelsData.forEach((channel) => {
    channel.channelId = channel.id;
    createNodeFromData(channel, 'Channel', helpers);
  });

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

  playlistData.push({
    id: channelsData[0].contentDetails.relatedPlaylists.uploads,
    list: false,
    snippet: {
      title: 'Uploads',
      channelTitle: channelsData[0].snippet.title,
    },
    contentDetails: {},
  });
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

  playlistData.forEach((playlist, index) => {
    playlist.videos = videoNodeId[playlist.id];
    playlist.playlistId = playlist.id;
    createNodeFromData(playlist, 'Playlist', helpers);
  });
};

/**
 * ============================================================================
 * Transform remote file nodes
 * ============================================================================
 */

function isImageKey(key, imageKeys) {
  return imageKeys.includes(key);
}

exports.onCreateNode = async ({
  actions: { createNode, touchNode },
  getCache,
  cache,
  createNodeId,
  node,
}) => {
  if (
    (node.internal.type === 'Channel' ||
      node.internal.type === 'Playlist' ||
      node.internal.type === 'Video') &&
    node.snippet.thumbnails &&
    node.snippet.thumbnails.high
  ) {
    const imageName = node.snippet.thumbnails.high.url.match(/([^/]*)\/*$/)[1];
    const imageCacheKey = `local-image-${imageName}-${node.id}`;
    const cachedImage = await cache.get(imageCacheKey);
    if (cachedImage) {
      const { fileNodeID } = cachedImage;
      touchNode({ nodeId: fileNodeID });
      console.log(`Image from Cache: ${imageName}`);
      node.local = fileNodeID;
      return;
    }
    const fileNode = await createRemoteFileNode({
      url: node.snippet.thumbnails.high.url,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id,
    });

    if (fileNode) {
      await cache.set(imageCacheKey, {
        fileNodeID: fileNode.id,
      });
      node.local = fileNode.id;
    }
    return node;
  }
};
