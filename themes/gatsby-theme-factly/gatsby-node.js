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

  result.data.dega.sitemap.tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.slug}`,
      component: require.resolve('./src/templates/tag-details.js'),
      context: {
        id: parseInt(tag.id)
      }
    });
  });

  result.data.dega.sitemap.categories.forEach(category => {
    createPage({
      path: `/categories/${category.slug}`,
      component: require.resolve('./src/templates/category-details.js'),
      context: {
        id: parseInt(category.id)
      }
    });
  });

  result.data.dega.sitemap.users.forEach(user => {
    createPage({
      path: `/users/${user.id}`,
      component: require.resolve('./src/templates/user-details.js'),
      context: {
        id: parseInt(user.id)
      }
    });
  });
};
