const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const mkdirp = require('mkdirp');

const { createSchemaCustomization } = require('./utils/youtubeSourceSchema');

exports.createSchemaCustomization = createSchemaCustomization;

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

exports.createPages = async ({ graphql, actions, store, reporter }, { client, homepage = 1 }) => {
  const { createPage } = actions;
  // const total = await grapql(`
  // `);
  const space = await graphql(`
    query SpaceQuery {
      dega {
        space {
          id
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
    }
  `);
  const formats = await graphql(`
  query FormatsQuery {
    dega {
      formats {
       nodes{ id
        slug}
      }
    }
  }
  `);

  const tags = await graphql(`
  query TagsQuery {
    dega {
      tags {
       nodes{ id
        slug

      }
      }
    }
  }
  `);

  const categories = await graphql(`
  query CategoriesQuery {
    dega {
      categories(limit: 100, page: 1) {
       nodes { id
        slug}
      }
    }
  }
  `);
  const users = await graphql(`
    query UsersQuery {
      dega {
        users {
          nodes {
            id
          }
        }
      }
    }
  `);
  const posts = await graphql(`
  query PostsQuery {
    dega {
      posts(limit:100, page:1) {
       nodes { id
        published_date
        slug}
      }
    }
  }
  `);

  const result = await graphql(`
    query NodeQuery {
      dega {
        space {
          id
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
        sitemap {
          tags {
            id
            slug
          }
          categories {
            id
            slug
          }
          users {
            id
            slug
          }
          posts {
            id
            slug
          }
          formats {
            id
            slug
          }
        }
      }
    }
  `);

  const format_factcheck = [];
  const format_without_factcheck = [];

  formats.data.dega.formats.nodes
    .filter((item) => item.slug === 'fact-check')
    .forEach((item) => {
      format_factcheck.push(parseInt(item.id));
    });
  // result.data.dega.sitemap.formats
  //   .filter((item) => item.slug === 'fact-check')
  //   .forEach((item) => {
  //     format_factcheck.push(parseInt(item.id));
  //   });

  formats.data.dega.formats.nodes
    .filter((item) => item.slug !== 'fact-check')
    .forEach((item) => {
      format_without_factcheck.push(parseInt(item.id));
    });
  // result.data.dega.sitemap.formats
  //   .filter((item) => item.slug !== 'fact-check')
  //   .forEach((item) => {
  //     format_without_factcheck.push(parseInt(item.id));
  //   });
  // manifest

  const icon = result.data.dega.space.fav_icon.url.proxy;
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
    const manifestOptions = await resolveManifestOptions(result.data.dega.space);
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

  formats.data.dega.formats.nodes.forEach((format) => {
    createPage({
      path: `/formats/${format.slug}`,
      component: require.resolve('./src/templates/format-details.js'),
      context: {
        id: parseInt(format.id),
      },
    });
  });

  // result.data.dega.sitemap.formats.forEach((format) => {
  //   createPage({
  //     path: `/formats/${format.slug}`,
  //     component: require.resolve('./src/templates/format-details.js'),
  //     context: {
  //       id: parseInt(format.id),
  //       sid: client,
  //     },
  //   });
  // });

  // create post details page

  posts.data.dega.posts.nodes.forEach((post) => {
    if (post.published_date) {
      createPage({
        path: `/${post.slug}`,
        component: require.resolve('./src/templates/post-details.js'),
        context: {
          id: parseInt(post.id),
        },
      });
    }

    // createPage({
    //   path: `/${post.slug}/amp/`,
    //   component: require.resolve('./src/templates/post-details.amp.js'),
    //   context: {
    //     id: parseInt(post.id),
    //     sid: client,
    //   },
    // });
  });

  // create tag details page

  tags.data.dega.tags.nodes.forEach((tag) => {
    createPage({
      path: `/tags/${tag.slug}`,
      component: require.resolve('./src/templates/tag-details.js'),
      context: {
        id: parseInt(tag.id),
      },
    });

    // create tag details page with each format

    formats.data.dega.formats.nodes.forEach((format) => {
      createPage({
        path: `/tags/${tag.slug}/formats/${format.slug}`,
        component: require.resolve('./src/templates/tag-details-format-details.js'),
        context: {
          id: parseInt(tag.id),
          format_id: parseInt(format.id),
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

  categories.data.dega.categories.nodes.forEach((category) => {
    createPage({
      path: `/categories/${category.slug}`,
      component: require.resolve('./src/templates/category-details.js'),
      context: {
        id: parseInt(category.id),
      },
    });

    // create category details page with each format
    formats.data.dega.formats.nodes.forEach((format) => {
      createPage({
        path: `/categories/${category.slug}/formats/${format.slug}`,
        component: require.resolve('./src/templates/category-details-format-details.js'),
        context: {
          id: parseInt(category.id),
          format_id: parseInt(format.id),
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
  users.data.dega.users.nodes.forEach((user) => {
    createPage({
      path: `/users/${user.id}`,
      component: require.resolve('./src/templates/user-details.js'),
      context: {
        id: parseInt(user.id),
      },
    });

    // create user details page with each format

    formats.data.dega.formats.nodes.forEach((format) => {
      createPage({
        path: `/users/${user.id}/formats/${format.slug}`,
        component: require.resolve('./src/templates/user-details-format-details.js'),
        context: {
          id: parseInt(user.id),
          format_id: parseInt(format.id),
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
