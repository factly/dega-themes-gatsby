const path = require('path');

const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query VideoQuery {
      allPlaylist {
        totalCount
        nodes {
          playlistId
        }
      }
    }
  `);

  const playlistTemplate = path.join(
    process.cwd(),
    '../../node_modules/@factly/gatsby-theme-factly/src/templates/playlist.js'
  );

  result.data.allPlaylist.nodes.forEach(playlist => {
    createPage({
      // will be the url for the page
      path: `/playlist/${playlist.playlistId}`,
      // specify the component template of your choice
      component: slash(playlistTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: playlist.playlistId
      }
    });
  });
};
