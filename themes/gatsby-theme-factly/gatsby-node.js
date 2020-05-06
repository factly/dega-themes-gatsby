const path = require('path');

const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query VideoQuery {
      allVideo {
        totalCount
        nodes {
          id
          contentDetails {
            videoId
          }
          snippet {
            playlistId
          }
        }
      }
    }
  `);

  const videoTemplate = path.join(
    process.cwd(),
    '../../node_modules/@factly/gatsby-theme-factly/src/templates/video.js'
  );

  result.data.allVideo.nodes.forEach(video => {
    createPage({
      // will be the url for the page
      path: `/playlist/${video.snippet.playlistId}/${video.contentDetails.videoId}`,
      // specify the component template of your choice
      component: slash(videoTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: video.id,
        playlistId: video.snippet.playlistId
      }
    });
  });
};
