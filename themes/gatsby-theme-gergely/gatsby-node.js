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
const saveIcon = async (url) => {
  await fetch(url)
    .then((res) => res.buffer())
    .then(
      (buffer) =>
        fse.outputFile('src/favicons/favicon.png', buffer, (err) => {
          console.log(err); // => null
          // file has now been created, including the directory it is to be placed in
        }),

      // fse.writeFile('/src/static/Icons/favicon.png', buffer, (res) =>
      //   console.log('Downloaded Favicon ', res),
      // ),
    );
};

exports.onPreBootstrap = ({ store }) => {
  const { flattenedPlugins } = store.getState();
  // const dir = `${program.directory}/src/Icons`;
  // console.log(`ensuring ${dir} exists`);
  // if (!fs.existsSync(dir)) {
  //   console.log(`creating ${dir}`);
  //   mkdirp.sync(dir);
  // }

  const youtubePlugin = flattenedPlugins.find(
    (plugin) => plugin.name === '@factly/gatsby-theme-youtube',
  );
  if (youtubePlugin) {
    console.log('fount it');
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
          console.log('Saved! youtube theme shoadowing');
        },
      );
    };
    createShadowComponent();
  }
};

exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId, homepage = 1 }) => {
  const { createPage } = actions;
  // const total = await grapql(`
  // `);
  // const space = {
  //   data: { 
  //     dega: {
  //       space: {
  //         id: 2,
  //         nmae: 'sdfvps'
  //       }
  //     }
  //   }
  // }

  // const space = {
  //   data: {
  //     degaSpace: {
  //       degaId: '1',
  //       name: 'gbdsfb'
  //     }
  //   }
  // }
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
  // result.data.dega.sitemap.formats
  //   .filter((item) => item.slug === 'fact-check')
  //   .forEach((item) => {
  //     format_factcheck.push(parseInt(item.id));
  //   });

  formats.data.allDegaFormat.nodes
    .filter((item) => item.slug !== 'fact-check')
    .forEach((item) => {
      format_without_factcheck.push(item.degaId);
    });
  // result.data.dega.sitemap.formats
  //   .filter((item) => item.slug !== 'fact-check')
  //   .forEach((item) => {
  //     format_without_factcheck.push(parseInt(item.id));
  //   });
  // manifest

  const icon = space.data.degaSpace?.fav_icon?.url.proxy;
  if (icon) {
    saveIcon(icon);
  } else {
    reporter.log('no favicon found on your space!!');
  }

  const state = store.getState();
  const plugin = state.flattenedPlugins.find((plugin) => plugin.name === 'gatsby-plugin-manifest');

  const resolveManifestOptions = (data) => ({
    name: data.name,
    short_name: data.name,
    start_url: '/',
    background_color: '#ffffff',
    theme_color: `#ffffff`,
    display: `minimal-ui`,
    icon: 'src/favicons/favicon.png',
  });
  if (plugin) {
    const manifestOptions = await resolveManifestOptions(space.data.degaSpace);
    plugin.pluginOptions = { ...plugin.pluginOptions, ...manifestOptions };
    console.log(plugin.pluginOptions);
  }

  // homepage

  createPage({
    path: '/',
    component: require.resolve('./src/templates/homepage.js'),
    context: {
      format_factcheck,
      format_without_factcheck,
      homepage,
    },
  });

  // if (homepage === 2) {
  //   console.log('creating homepage v2');
  //   createPage({
  //     path: '/',
  //     component: require.resolve('./src/templates/homepageTwo.js'),
  //     context: {
  //       sid: client,
  //       homepage,
  //     },
  //   });
  // }

  formats.data.allDegaFormat.nodes.forEach((format) => {
    createPage({
      path: `/format/${format.slug}`,
      component: require.resolve('./src/templates/format-details.js'),
      context: {
        id: format.degaId,
      },
    });
  });

  // result.data.dega.sitemap.formats.forEach((format) => {
  //   createPage({.
  //     path: `/formats/${format.slug}`,
  //     component: require.resolve('./src/templates/format-details.js'),
  //     context: {
  //       id: parseInt(format.id),
  //       sid: client,
  //     },
  //   });
  // });

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

  // result.data.dega.sitemap.tags.forEach((tag) => {
  //   createPage({
  //     path: `/tags/${tag.slug}`,
  //     component: require.resolve('./src/templates/tag-details.js'),
  //     context: {
  //       id: parseInt(tag.id),
  //       sid: client,
  //     },
  //   });

  //   // create tag details page with each format

  //   tags.data.dega.tags
  //   result.data.dega.sitemap.formats.forEach((format) => {
  //     createPage({
  //       path: `/tags/${tag.slug}/formats/${format.slug}`,
  //       component: require.resolve('./src/templates/tag-details-format-details.js'),
  //       context: {
  //         id: parseInt(tag.id),
  //         format_id: parseInt(format.id),
  //         sid: client,
  //       },
  //     });
  //   });
  // });

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

  // result.data.dega.sitemap.categories.forEach((category) => {
  //   createPage({
  //     path: `/categories/${category.slug}`,
  //     component: require.resolve('./src/templates/category-details.js'),
  //     context: {
  //       id: parseInt(category.id),
  //       sid: client,
  //     },
  //   });

  //   // create category details page with each format

  //   result.data.dega.sitemap.formats.forEach((format) => {
  //     createPage({
  //       path: `/categories/${category.slug}/formats/${format.slug}`,
  //       component: require.resolve('./src/templates/category-details-format-details.js'),
  //       context: {
  //         id: parseInt(category.id),
  //         format_id: parseInt(format.id),
  //         sid: client,
  //       },
  //     });
  //   });
  // });

  // create user details page
  users.data.allDegaUser.nodes.forEach((user) => {
    createPage({
      path: `/author/${user.degaId}`,
      component: require.resolve('./src/templates/author-details.js'),
      context: {
        id: (user.degaId),
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

    // result.data.dega.sitemap.formats.forEach((format) => {
    //   createPage({
    //     path: `/users/${user.id}/formats/${format.slug}`,
    //     component: require.resolve('./src/templates/user-details-format-details.js'),
    //     context: {
    //       id: parseInt(user.id),
    //       format_id: parseInt(format.id),
    //       sid: client,
    //     },
    //   });
    // });
  });

  // result.data.dega.sitemap.users.forEach((user) => {
  //   createPage({
  //     path: `/users/${user.id}`,
  //     component: require.resolve('./src/templates/user-details.js'),
  //     context: {
  //       id: parseInt(user.id),
  //       sid: client,
  //     },
  //   });

  //   // create user details page with each format

  //   formats.data.dega.formats.nodes.forEach((format) => {
  //     createPage({
  //       path: `/users/${user.id}/formats/${format.slug}`,
  //       component: require.resolve('./src/templates/user-details-format-details.js'),
  //       context: {
  //         id: parseInt(user.id),
  //         format_id: parseInt(format.id),
  //         sid: client,
  //       },
  //     });
  //   });

  //   // result.data.dega.sitemap.formats.forEach((format) => {
  //   //   createPage({
  //   //     path: `/users/${user.id}/formats/${format.slug}`,
  //   //     component: require.resolve('./src/templates/user-details-format-details.js'),
  //   //     context: {
  //   //       id: parseInt(user.id),
  //   //       format_id: parseInt(format.id),
  //   //       sid: client,
  //   //     },
  //   //   });
  //   // });
  // });
};
