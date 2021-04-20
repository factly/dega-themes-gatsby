const fetch = require('isomorphic-unfetch');
const _ = require('lodash');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onPreInit = () => console.log('Loaded youtube source plugin');

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
    getNode,
    cache,
    getNodesByType,
    reporter,
  },
  { apiKey, channelId },
) => {
  if (!apiKey) return reporter.panic('gatsby-source-youtube: You must provide your api key');
  if (!channelId) return reporter.panic('gatssby-source-youtube: You must provide your channel id');
  const helpers = { createNode, createContentDigest, createNodeId };

  getNodesByType('Channel').forEach((node) => touchNode(getNode(node.id)));
  getNodesByType('ChannelSections').forEach((node) => touchNode(getNode(node.id)));
  getNodesByType('Playlist').forEach((node) => touchNode(getNode(node.id)));
  getNodesByType('Video').forEach((node) => touchNode(getNode(node.id)));

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
      _.mapValues(groupedVideos, (videos, i) => {
        const getPosition = (video) => {
          return { position: video.snippet.position, playlist: video.snippet.playlistId };
        };
        const playlistIds = _.map(videos, 'snippet.playlistId');
        const positions = _.map(videos, getPosition);
        return {
          playlistIds,
          positions,
          ...videos[0],
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
    // ?different types of section: 'recentuploads', 'popularuploads', 'singleplaylist','allplaylists', 'multiplechannels',
    if (section.snippet.type === 'recentuploads') {
      section.videos = _.reverse(
        videoNodeId[channelsData[0].contentDetails.relatedPlaylists.uploads],
      ).slice(0, 5);
      section.playlist = _.find(playlistData, {
        id: channelsData[0].contentDetails.relatedPlaylists.uploads,
      });
    } else if (section.snippet.type === 'singleplaylist') {
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
    image: File @link(from: "image___NODE")
    kind: String
    etag: String
    snippet: ChannelSnippet
    contentDetails: ChannelContentDetails
    statistics: ChannelStatistics
    channelId: String
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type Playlist implements Node {
    id: ID!
    image: File @link(from: "image___NODE")
    videos: [Video] @link
    kind: String
    etag: String
    snippet: PlaylistSnippet
    contentDetails: ContentDetails
    playlistId: String
    list: Boolean
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type PlaylistSnippet {
    publishedAt: Date @dateformat
    channelId: String
    title: String
    description: String
    thumbnails: SnippetThumbnails
    channelTitle: String
    localized: Localized
  }
  type ChannelSectionsPlaylist {
    id: String
    list: Boolean
    snippet: ChannelSectionsPlaylistSnippet
    contentDetails: ContentDetails
    videos: [String]
    playlistId: String
    kind: String
    etag: String
  }
  type ChannelSectionsPlaylistSnippet {
    title: String
    channelTitle: String
    publishedAt: Date @dateformat
    channelId: String
    description: String
    thumbnails: Thumbnails
    localized: Localized
  }
  type ContentDetails {
    itemCount: Int
  }
  type Video implements Node {
    id: ID!
    image: File @link(from: "image___NODE")
    playlistIds: [String]
    positions: [VideoPositions]
    kind: String
    etag: String
    snippet: VideoSnippet
    contentDetails: VideoContentDetails
    parent: Node
    children: [Node!]!
    internal: Internal!
  }

  type ChannelSections implements Node {
    id: ID!
    videos: [Video] @link
    kind: String
    etag: String
    snippet: ChannelSectionsSnippet
    playlist: ChannelSectionsPlaylist
    contentDetails: ContentDetails
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type ChannelSectionsSnippet {
    type: String
    style: String
    channelId: String
    position: Int
  }
  type ChannelSnippet {
    title: String
    description: String
    customUrl: String
    publishedAt: Date @dateformat
    thumbnails: ChannelSnippetThumbnails
    localized: Localized
    country: String
  }
  type ChannelSnippetThumbnails {
    default: Thumbnails
    medium: Thumbnails
    high: Thumbnails
  }
  type Localized {
    title: String
    description: String
  }
  type ChannelContentDetails {
    relatedPlaylists: ChannelContentDetailsRelatedPlaylists
  }
  type ChannelContentDetailsRelatedPlaylists {
    likes: String
    favorites: String
    uploads: String
  }
  type ChannelStatistics {
    viewCount: String
    subscriberCount: String
    hiddenSubscriberCount: Boolean
    videoCount: String
  }
  type VideoPositions {
    position: Int
    playlist: String
  }
  type VideoSnippet {
    publishedAt: Date @dateformat
    channelId: String
    title: String
    description: String
    thumbnails: SnippetThumbnails
    channelTitle: String
    playlistId: String
    position: Int
    resourceId: VideoSnippetResourceId
  }
  type VideoContentDetails {
    videoId: String
    videoPublishedAt: Date @dateformat
  }
  type SnippetThumbnails {
    default: Thumbnails
    medium: Thumbnails
    high: Thumbnails
    standard: Thumbnails
    maxres: Thumbnails
  }
  type Thumbnails {
    url: String
    width: Int
    height: Int
  }
  type VideoSnippetResourceId {
    kind: String
    videoId: String
  }
`;
  createTypes(typeDefs);
};

exports.onCreateNode = async ({
  actions: { createNode, touchNode },
  node,
  store,
  getNode,
  cache,
  createNodeId,
  reporter,
}) => {
  if (
    (node.internal.type === 'Channel' ||
      node.internal.type === 'Playlist' ||
      node.internal.type === 'Video') &&
    node.snippet.thumbnails &&
    node.snippet.thumbnails.high
  ) {
    let fileNode;
    let imageCacheKey = null;
    if (node.snippet.title !== 'Uploads') {
      const imageName = node.snippet.thumbnails.high.url.match(/([^/]*)\/*$/)[1];
      imageCacheKey = `image-${imageName}-${node.id}`;
      const cachedImage = await cache.get(imageCacheKey);
      // console.log({ cachedImage });
      if (cachedImage) {
        const { fileNodeID } = cachedImage;
        //  console.log({ fileNodeID });
        touchNode(getNode(fileNodeID));
        console.log(`Image from Cache: ${imageName}`);
        node.image = fileNodeID;
        // console.log({ NodeImage: node.image });
        return;
      }
    }

    try {
      if (node.snippet.title !== 'Uploads') {
        fileNode = await createRemoteFileNode({
          url: node.snippet.thumbnails.high.url,
          cache,
          store,
          createNode,
          createNodeId,
          parentNodeId: node.id,
        });
        // fileNode = id;
      }
    } catch (err) {
      reporter.log(`gatsby-source-youtube: Error occured handling file at ${node.snippet.title}. Skipping!
Error: ${err}`);
    }

    if (
      fileNode
      && imageCacheKey
    ) {
      await cache.set(imageCacheKey, {
        fileNodeID: fileNode,
      });
      node.image___NODE = fileNode.id;
    }
    return node;
  }
};
