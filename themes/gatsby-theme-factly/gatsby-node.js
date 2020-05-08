const path = require('path');
const _ = require('lodash');
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query NodeQuery {
      degaCMS {
        posts(limit: 20) {
          nodes {
            _id
            slug
            __typename
            categories {
              _id
            }
          }
        }
        factchecks(limit: 20) {
          nodes {
            _id
            __typename
            slug
          }
        }
      }
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

  const postDetailsTemplate = path.join(
    process.cwd(),
    '../../node_modules/@factly/gatsby-theme-factly/src/templates/post-details.js'
  );
  const posts = [...result.data.degaCMS.factchecks.nodes, ...result.data.degaCMS.posts.nodes]
  posts.forEach(post => {
    createPage({
      path: `/${post.__typename.toLowerCase()}/${post.slug}`,
      component: slash(postDetailsTemplate),
      context: {
        categories: _.map(post.categories, '_id'),
        id:post._id
      }
    });
  });

  result.data.allPlaylist.nodes.forEach(playlist => {
    createPage({
      path: `/playlist/${playlist.playlistId}`,
      component: slash(playlistTemplate),
      context: {
        id: playlist.playlistId
      }
    });
  });
};
