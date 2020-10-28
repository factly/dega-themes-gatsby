const { urlResolve } = require('gatsby-core-utils');
// const path = require('path');
// const mkdirp = require('mkdirp');
// const fs = require('fs');

let basePath;
let bannerData;
let bannerTitle;
let logo;

exports.onPreBootstrap = (
  { store, reporter },
  { basePath: bp = '/', bannerData: bd = [], bannerTitle: bt = 'Featured Shows', logo: lg = '' },
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

  basePath = bp;
  bannerData = bd;
  bannerTitle = bt;
  logo = lg;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query VideosQuery {
      allPlaylist {
        totalCount
        nodes {
          playlistId
        }
      }
    }
  `);

  const baseUrl = basePath === '/' ? '' : urlResolve(basePath);

  createPage({
    path: `${baseUrl}/`,
    component: require.resolve('./src/templates/homepage.js'),
    context: {
      baseUrl,
      bannerData,
      bannerTitle,
      logo,
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
