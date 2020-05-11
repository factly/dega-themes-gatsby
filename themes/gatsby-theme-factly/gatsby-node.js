const path = require('path');
const _ = require('lodash');
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query NodeQuery {
      degaCMS {
        users(limit: 20) {
          nodes{
            slug
            _id
          }
        }
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
    '../../node_modules/@factly/gatsby-theme-factly/src/template/playlist.js'
  );

  const postDetailsTemplate = path.join(
    process.cwd(),
    '../../node_modules/@factly/gatsby-theme-factly/src/template/post-details.js'
  );

  const authorDetailsTemplate = path.join(
    process.cwd(),
    '../../node_modules/@factly/gatsby-theme-factly/src/template/author-details.js'
  );

  result.data.degaCMS.users.nodes.forEach(author => {
    createPage({
      path: `/author/${author.slug}`,
      component: slash(authorDetailsTemplate),
      context: {
        id:author._id
      }
    });
  });

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
