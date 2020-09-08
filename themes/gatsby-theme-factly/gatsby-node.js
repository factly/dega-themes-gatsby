const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
        }
      } 
    }
  `);

  console.log(result.data.dega.sitemap.tags)

  const tagDetailTemplate = path.resolve(`src/templates/tag-details.js`)
  result.data.dega.sitemap.tags.forEach(tag => {
    createPage({
      path: `/tag/${tag.slug}`,
      component: tagDetailTemplate,
      context: {
        id: tag.id
      }
    });
  });
};
