const { urlResolve } = require('gatsby-core-utils');
// const path = require('path');
// const mkdirp = require('mkdirp');
// const fs = require('fs');
// const { createSchemaCustomization } = require('./utils/youtubeSourceSchema');
// exports.createSchemaCustomization = createSchemaCustomization;

let basePath;
let bannerData;
let bannerTitle;
let logo;
let navData;
let footer;

exports.onPreBootstrap = (
  { store, reporter, actions },
  {
    basePath: bp = '/',
    bannerData: bd = [],
    bannerTitle: bt = 'Featured Shows',
    logo: lg = '',
    navData: nd = {},
    footer: ft = '',
  },
) => {
  // const { program } = store.getState();
  // const dirs = [
  //   path.join(program.directory, 'posts'),
  //   path.join(program.directory, 'src/pages'),
  //   path.join(program.directory, 'src/data'),
  // ];
  // dirs.forEach((dir) => {
  //   if (!fs.existsSync(dir)) {
  //     reporter.log(`creating the ${dir} directory`);
  //     mkdirp.sync(dir);
  //   }
  // });
  navData = nd;
  basePath = bp;
  bannerData = bd;
  bannerTitle = bt;
  logo = lg;
  footer = ft;
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const nodeContent = JSON.stringify(navData);
  const nodeMeta = {
    id: createNodeId(`nav-data-1`),
    parent: null,
    children: [],
    internal: {
      type: `NavData`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(navData),
    },
  };
  const node = Object.assign({}, navData, nodeMeta);
  createNode(node);
  createNode({
    id: createNodeId(`ft-data-1`),
    parent: null,
    children: [],
    internal: {
      type: 'footer',
      content: footer,
      mediaType: `text/html`,
      contentDigest: createContentDigest(footer),
    },
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query VideosQuery {
      allPlaylist {
        totalCount
        nodes {
          playlistId
          snippet {
            title
          }
        }
      }
    }
  `);

  const baseUrl = basePath === '/' ? '' : urlResolve(basePath);
  const uploadsPlaylistId = result.data.allPlaylist.nodes?.filter(
    (playlist) => playlist?.snippet?.title === 'Uploads',
  )[0]?.playlistId;
  createPage({
    path: `${baseUrl}/`,
    component: require.resolve('./src/templates/homepage.js'),
    context: {
      baseUrl,
      bannerData,
      bannerTitle,
      logo,
      uploadsPlaylistId,
    },
  });
  // create playlist page for each video
  result.data.allPlaylist.nodes.forEach((playlist) => {
    createPage({
      path: `${baseUrl}/playlist/${playlist.playlistId}`,
      component: require.resolve('./src/templates/playlist.js'),
      context: {
        id: playlist.id,
        playlistId: playlist.playlistId,
        baseUrl,
        logo,
      },
    });
  });
};
