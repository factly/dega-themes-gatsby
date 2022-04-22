const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const mkdirp = require('mkdirp');

const { createSchemaCustomization } = require('./utils/youtubeSourceSchema');

exports.createSchemaCustomization = createSchemaCustomization;
/**
 *  adding import alias for most used modules
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@static': path.resolve(__dirname, 'src/static'),
      },
    },
  });
};
/**
 * adds Plugin validation
 */
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    spaceId: Joi.string().required().description(`Gets Space Id.`),
    homepage: Joi.number().description(`Specifies layout of homepage`),
    accessToken: Joi.string().required().description(`Specifies access Token`),
    apiUrl: Joi.string().required().description('api url'),
    youtubeApiKey: Joi.string().description('Google Private Key for youtube data'),
    channelId: Joi.string().description(`Specifies youtube channel id`),
  });
};
// const saveIcon = (url) => {
//   fetch(url)
//     .then((res) => res.buffer())
//     .then(
//       (buffer) =>
//         fse.outputFile('src/favicons/favicon.png', buffer, (err) =>
//           console.log(`error while creating favicon: ${err}`),
//         ), // should return null
//       // file has now been created, including the directory it is to be placed in

//       // fse.writeFile('/src/static/Icons/favicon.png', buffer, (res) =>
//       //   console.log('Downloaded Favicon ', res),
//       // ),
//     );
// };

exports.onPreBootstrap = ({ store }) => {
  const { flattenedPlugins } = store.getState();

  const youtubePlugin = flattenedPlugins.find(
    (plugin) => plugin.name === '@factly/gatsby-theme-youtube',
  );
  if (youtubePlugin) {
    console.log('creating youtube site');
    const createShadowComponent = async () => {
      await fs.promises
        .mkdir(path.join(__dirname, '/src/@factly/gatsby-theme-youtube/components'), {
          recursive: true,
        })
        .catch(console.error);
      fs.writeFile(
        path.join(__dirname, 'src/@factly/gatsby-theme-youtube/components/Layout.js'),
        `import Layout from '../../../components/Layout';\n\nexport default Layout;`,
        function (err) {
          if (err) throw err;
          console.log('Saved! youtube theme shadowing');
        },
      );
    };
    createShadowComponent();
  }
};

exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId, homepage = 1 }) => {
  const { createPage } = actions;
  const space = await graphql(`
    query SpaceQuery {
      degaSpace {
        degaId
        name
        slug
        site_title
        tag_line
        description
        site_address
        logo {
          url
        }
        logo_mobile {
          url
        }
        fav_icon {
          url
        }
        mobile_icon {
          url
        }
        verification_codes
        social_media_urls
        contact_info
      }
    }
  `);
  const formats = await graphql(`
    query FormatsQuery {
      allDegaFormat {
        nodes {
          degaId
          slug
        }
      }
    }
  `);

  const tags = await graphql(`
    query TagsQuery {
      allDegaTag {
        nodes {
          degaId
          slug
        }
      }
    }
  `);

  const categories = await graphql(`
    query CategoriesQuery {
      allDegaCategory {
        nodes {
          degaId
          slug
        }
      }
    }
  `);
  const users = await graphql(`
    query UsersQuery {
      allDegaUser {
        nodes {
          degaId
        }
      }
    }
  `);
  const posts = await graphql(`
    query PostsQuery {
      allDegaPost {
        nodes {
          degaId
          published_date
          slug
        }
      }
    }
  `);

  const format_factcheck = [];
  const format_without_factcheck = [];

  formats.data.allDegaFormat.nodes
    .filter((item) => item.slug === 'fact-check')
    .forEach((item) => {
      format_factcheck.push(item.degaId);
    });

  formats.data.allDegaFormat.nodes
    .filter((item) => item.slug !== 'fact-check')
    .forEach((item) => {
      format_without_factcheck.push(item.degaId);
    });

  createPage({
    path: '/',
    component: require.resolve('./src/templates/homepage.js'),
    context: {
      format_factcheck,
      format_without_factcheck,
      homepage,
    },
  });

  formats.data.allDegaFormat.nodes.forEach((format) => {
    createPage({
      path: `/format/${format.slug}`,
      component: require.resolve('./src/templates/format-details.js'),
      context: {
        id: format.degaId,
      },
    });
  });

  // create post details page

  posts.data.allDegaPost.nodes.forEach((post) => {
    if (post.published_date) {
      createPage({
        path: `/${post.slug}`,
        component: require.resolve('./src/templates/post-details.js'),
        context: {
          id: post.degaId,
        },
      });
    }
    createPage({
      path: `/${post.slug}/amp/`,
      component: require.resolve('./src/templates/post-details.amp.js'),
      context: {
        id: post.degaId,
        sid: spaceId,
      },
    });
  });

  // create tag details page

  tags.data.allDegaTag.nodes.forEach((tag) => {
    createPage({
      path: `/tag/${tag.slug}`,
      component: require.resolve('./src/templates/tag-details.js'),
      context: {
        id: tag.degaId,
      },
    });

    // create tag details page with each format

    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/tag/${tag.slug}/format/${format.slug}`,
        component: require.resolve('./src/templates/tag-details-format-details.js'),
        context: {
          id: tag.degaId,
          format_id: format.degaId,
        },
      });
    });
  });

  // create category details page

  categories.data.allDegaCategory.nodes.forEach((category) => {
    createPage({
      path: `/category/${category.slug}`,
      component: require.resolve('./src/templates/category-details.js'),
      context: {
        id: category.degaId,
      },
    });

    // create category details page with each format
    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/category/${category.slug}/format/${format.slug}`,
        component: require.resolve('./src/templates/category-details-format-details.js'),
        context: {
          id: category.degaId,
          format_id: format.degaId,
        },
      });
    });
  });

  // create user details page
  users.data.allDegaUser.nodes.forEach((user) => {
    createPage({
      path: `/author/${user.degaId}`,
      component: require.resolve('./src/templates/author-details.js'),
      context: {
        id: user.degaId,
      },
    });

    // create user details page with each format

    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/author/${user.degaId}/format/${format.slug}`,
        component: require.resolve('./src/templates/author-details-format-details.js'),
        context: {
          id: user.degaId,
          format_id: format.degaId,
        },
      });
    });
  });
};
