const { createRemoteFileNode } = require('gatsby-source-filesystem');
const fetch = require('node-fetch');

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
      contentDigest: helpers.createContentDigest(item)
    }
  };

  const node = Object.assign({}, item, nodeMetadata);
  helpers.createNode(node);
  return node;
};

// https://www.googleapis.com/youtube/v3/channels?part=statistics%2Csnippet&id=UCpi2S8wW4xLlUCVryhyBtsA&key=[YOUR_API_KEY] HTTP/1.1


const getAllData = async ({ type = 'playlists', query = '', API_KEY }) => {
  const URL = `https://www.googleapis.com/youtube/v3/${type}?part=statistics,snippet,contentDetails&maxResults=50&key=${API_KEY}${query}`;
  console.log('URL', URL)
  let responseData = [];
  const response = await fetch(URL).then(res => res.json());
  if (response.nextPageToken) {
    responseData = await getAllData({
      type,
      API_KEY,
      query: `${query}&pageToken=${response.nextPageToken}`
    });
  }
  return [...responseData, ...response.items];
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
`;
  createTypes(typeDefs);
};

/**
 * ============================================================================
 * Source and cache nodes from the API
 * ============================================================================
 */

exports.sourceNodes = async function sourceNodes(
  {
    actions,
    cache,
    createContentDigest,
    createNodeId,
    getNodesByType,
    getNode
  },
  { API_KEY = '', channelID = '' }
) {
  const { createNode, createTypes, touchNode } = actions;
  const helpers = Object.assign({}, actions, {
    createContentDigest,
    createNodeId
  });
  // you can access plugin options here if need be
  console.log(`Building Nodes`);
  // const typeDefs = createTypeDef(schemas, imageKeys)
  // createTypes(typeDefs)
  // simple caching example, you can find in .cache/caches/source-plugin/some-diskstore
  // await cache.set(`hello`, `world`)
  // console.log(await cache.get(`hello`))

  // touch nodes to ensure they aren't garbage collected
  getNodesByType('Channel').forEach(node => touchNode({ nodeId: node.id }));
  getNodesByType('Playlist').forEach(node => touchNode({ nodeId: node.id }));
  getNodesByType('Video').forEach(node => touchNode({ nodeId: node.id }));
  // getNodesByType(AUTHOR_NODE_TYPE).forEach(node =>
  //   touchNode({ nodeId: node.id })
  // )

  // store the response from the API in the cache
  // const cacheKey = "your-source-data-key"
  // let sourceData = await cache.get(cacheKey)
  let playlistData = await cache.get(`playlists`);
  let channelsData = await cache.get(`channels`);
  let allVideos = await cache.get(`videos`);

  if (!channelsData) {
    channelsData = await getAllData({
      type: 'channels',
      query: `&id=${channelID}`,
      API_KEY
    });
    await cache.set(`channels`, channelsData);
  }

  if (!playlistData) {
    playlistData = await getAllData({
      type: 'playlists',
      query: `&channelId=${channelID}`,
      API_KEY
    });
    await cache.set(`playlists`, playlistData);
  }

  if (!allVideos) {
    // loop through data returned from the api and create Gatsby nodes for them
    const videoRequest = playlistData.map(async (playlist, index) =>
      getAllData({
        type: 'playlistItems',
        query: `&playlistId=${playlist.id}`,
        API_KEY
      })
    );

    allVideos = await Promise.all(videoRequest);
    await cache.set(`videos`, allVideos);
  }

  channelsData.forEach(channel => {
    channel.channelId = channel.id;
    createNodeFromData(channel, 'Channel', helpers);
  });

  playlistData.forEach((playlist, index) => {
    const videoNodeId = [];
    allVideos[index].forEach(video => {
      const node = createNodeFromData(video, 'Video', helpers);
      videoNodeId.push(node.id);
    });

    playlist.playlistId = playlist.id;
    playlist.videos = videoNodeId;
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
  node
}) => {
  if (
    (node.internal.type === 'Channel' || node.internal.type === 'Playlist' || node.internal.type === 'Video') &&
    node.snippet.thumbnails &&
    node.snippet.thumbnails.high
  ) {
    console.log("Channel", node.internal.type)
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
      parentNodeId: node.id
    });

    if (fileNode) {
      await cache.set(imageCacheKey, {
        fileNodeID: fileNode.id
      });
      node.local = fileNode.id;
    }
    return node;
  }
};
