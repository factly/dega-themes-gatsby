const path = require('path');
const withDefaults = require(`./utils/default-options`);

/**
 *  adding import alias for most used modules
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
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
    siteUrl: Joi.string().description("Site url: used for generating, sitemaps and amp pages")
  });
};

// These templates are only data-fetching wrappers that import components

const homepageTemplate = require.resolve('./src/templates/homepage-query.js');
const formatTemplate = require.resolve('./src/templates/format-query.js')
const postTemplate = require.resolve('./src/templates/post-query.js');
const postAmpTemplate = require.resolve('./src/templates/post-amp-query.js');
const tagTemplate = require.resolve('./src/templates/tag-query.js');
const tagFormatTemplate = require.resolve('./src/templates/tag-format-query.js')
const categoryTemplate = require.resolve('./src/templates/category-query.js');
const categoryFormatTemplate = require.resolve('./src/templates/category-format-query.js');
const authorTemplate = require.resolve('./src/templates/author-query.js');
const authorFormatTemplate = require.resolve('./src/templates/author-format-query.js');



exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId }) => {
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

  // homepage
  createPage({
    path: '/',
    component: homepageTemplate,
    context: {
      format_factcheck,
      format_without_factcheck,
    },
  });

  formats.data.allDegaFormat.nodes.forEach((format) => {
    createPage({
      path: `/format/${format.slug}`,
      component: formatTemplate,
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
        component: postTemplate,
        context: {
          id: post.degaId,
        },
      });
    }
    createPage({
      path: `/${post.slug}/amp/`,
      component: postAmpTemplate,
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
      component: tagTemplate,
      context: {
        id: tag.degaId,
      },
    });

    // create tag details page with each format

    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/tag/${tag.slug}/format/${format.slug}`,
        component: tagFormatTemplate,
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
      component: categoryTemplate,
      context: {
        id: category.degaId,
      },
    });

    // create category details page with each format
    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/category/${category.slug}/format/${format.slug}`,
        component: categoryFormatTemplate,
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
      component: authorTemplate,
      context: {
        id: user.degaId,
      },
    });

    // create user details page with each format

    formats.data.allDegaFormat.nodes.forEach((format) => {
      createPage({
        path: `/author/${user.degaId}/format/${format.slug}`,
        component: authorFormatTemplate,
        context: {
          id: user.degaId,
          format_id: format.degaId,
        },
      });
    });
  });
};
