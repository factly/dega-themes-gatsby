const { gql } = require('@apollo/client');

// const defaultOptions = { spaceId: null, limit: 100, page: 1 };

// Total query
/**
 * Gets Total count for all entities
 * @todo filtering users based on space
 * @returns {function}
 */
exports.getTotalQuery = () => {
  return gql`
    query {
      posts {
        total
      }
      # check for space specific users
      users {
        total
      }
      ratings {
        total
      }
      tags {
        total
      }
      formats {
        total
      }
      categories {
        total
      }
      claims {
        total
      }
      claimants {
        total
      }
      # check for other spaces data
      menu {
        total
      }
    }
  `;
};
// Posts Query
/**
 * Gets data for posts based on limit and page props
 * @param {Object} args - Arguments for getting posts
 * @param {number} args.limit - Total number of posts per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getPostsQuery = ({ limit, page = 1 }) => {
  return gql`
    query {
      posts( limit:${limit}, page:${page}) {
        nodes {
          id
          created_at
          updated_at
          title
          subtitle
          slug
          status
          excerpt
          description
          html_description
          is_featured
          is_sticky
          is_highlighted
          published_date
          schemas
          space_id
          format {
            id
            created_at
            updated_at
            name
            slug
            description
            space_id
          }
          medium {
            id
            created_at
            updated_at
            name
            slug
            type
            title
            description
            caption
            file_size
            alt_text
            url
            dimensions
            space_id
          }
          categories {
            id
            created_at
            updated_at
            name
            slug
            description
            html_description
            meta_fields
            parent_id
            medium {
              id
              created_at
              updated_at
              name
              slug
              type
              title
              description
              caption
              file_size
              alt_text
              url
              dimensions
              space_id
            }
            space_id
          }
          tags {
            id
            created_at
            updated_at
            name
            slug
            description
            html_description
            space_id
          }
          users {
            id
            created_at
            updated_at
            first_name
            last_name
            slug
            email
            birth_date
            gender
            description
            display_name
            social_media_urls
            medium {
              id
              created_at
              updated_at
              name
              slug
              type
              title
              description
              caption
              file_size
              alt_text
              url
              dimensions
              space_id
            }
          }
          claims {
            id
            created_at
            updated_at
            claim
            slug
            claim_date
            checked_date
            claim_sources
            description
            html_description
            fact
            review_sources
            rating {
              id
              created_at
              updated_at
              name
              slug
              description
              background_colour
              text_colour
              html_description
              numeric_value
              medium {
                id
                created_at
                updated_at
                name
                slug
                type
                title
                description
                caption
                file_size
                alt_text
                url
                dimensions
                space_id
              }
              space_id
            }
            claimant {
              id
              created_at
              updated_at
              name
              slug
              description
              html_description
              tag_line
              medium {
                id
                created_at
                updated_at
                name
                slug
                type
                title
                description
                caption
                file_size
                alt_text
                url
                dimensions
                space_id
              }
              space_id
            }
            space_id
          }
        }
      }
    }
  `;
};
// Categories Query
/**
 * Gets data for categories based on limit and page props
 * @param {Object} args - Arguments for getting categories
 * @param {number} args.limit - Total number of categories per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getCategoriesQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    categories( limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        name
        slug
        description
        html_description
        meta_fields
        parent_id
        space_id
        medium {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
      }
    }
  }
  `;
};

// Tags Query
/**
 * Gets data for tags based on limit and page props
 * @param {Object} args - Arguments for getting tags
 * @param {number} args.limit - Total number of tags per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getTagsQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    tags( limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        name
        slug
        description
        html_description
        space_id
      }
    }
  }
  `;
};

// Formats Query
/**
 * Gets data for formats
 * @returns {function}
 */
exports.getFormatsQuery = () => {
  return gql`
    query {
      formats {
        nodes {
          id
          created_at
          updated_at
          name
          slug
          description
          space_id
        }
      }
    }
  `;
};

// Users Query
// !no spacename only limit and page arguments are defined
/**
 * Gets data for users based on limit and page props
 * @param {Object} args - Arguments for getting users
 * @param {number} args.limit - Total number of users per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getUsersQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    users(limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        first_name
        last_name
        slug
        email
        birth_date
        gender
        description
        display_name
        social_media_urls
        medium {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
      }
    }
  }
  `;
};
// Space Query
/**
 * Gets data for space details
 * @returns {function}
 */
exports.getSpaceQuery = () => {
  return gql`
    query {
      space {
        id
        created_at
        updated_at
        name
        slug
        site_title
        tag_line
        description
        site_address
        logo {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
        logo_mobile {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
        fav_icon {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
        mobile_icon {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
        verification_codes
        social_media_urls
        contact_info
      }
    }
  `;
};

// Sitemap
/**
 * Gets data for sitemap
 * @returns {function}
 */
exports.getSitemapQuery = () => {
  return gql`
    query {
      sitemap {
        users {
          created_at
          id
          slug
        }
        tags {
          created_at
          id
          slug
        }
        ratings {
          created_at
          id
          slug
        }
        posts {
          created_at
          id
          slug
        }
        formats {
          created_at
          id
          slug
        }
        claims {
          created_at
          id
          slug
        }
        claimants {
          created_at
          id
          slug
        }
        categories {
          created_at
          id
          slug
        }
      }
    }
  `;
};
// Ratings Query
/**
 * Gets data for ratings based on limit and page props
 * @param {Object} args - Arguments for getting ratings
 * @param {number} args.limit - Total number of ratings per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getRatingsQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    ratings( limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        name
        slug
        description
        html_description
        background_colour
        text_colour
        numeric_value
        space_id
        medium {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
      }
    }
  }
  `;
};
// Claims Query
/**
 * Gets data for claims based on limit and page props
 * @param {Object} args - Arguments for getting claims
 * @param {number} args.limit - Total number of claims per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getClaimsQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    claims(limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        claim
        slug
        claim_date
        checked_date
        claim_sources
        description
        html_description
        fact
        review_sources
        space_id
        rating {
          id
          created_at
          updated_at
          name
          slug
          description
          html_description
          background_colour
          text_colour
          numeric_value
          space_id
          medium {
            id
            created_at
            updated_at
            name
            slug
            type
            title
            description
            caption
            file_size
            alt_text
            url
            dimensions
            space_id
          }
        }
        claimant {
          id
          created_at
          updated_at
          name
          slug
          description
          html_description
          tag_line
          space_id
          medium {
            id
            created_at
            updated_at
            name
            slug
            type
            title
            description
            caption
            file_size
            alt_text
            url
            dimensions
            space_id
          }
        }
      }
    }
  }
  `;
};

//Claimants Query
/**
 * Gets data for claimants based on limit and page props
 * @param {Object} args - Arguments for getting claimants
 * @param {number} args.limit - Total number of claimants on per page
 * @param {number} args.page - Page number
 * @returns {function}
 */
exports.getClaimantsQuery = ({ limit, page = 1 }) => {
  return gql`
  query {
    claimants( limit:${limit}, page:${page}) {
      nodes {
        id
        created_at
        updated_at
        name
        slug
        description
        html_description
        tag_line
        space_id
        medium {
          id
          created_at
          updated_at
          name
          slug
          type
          title
          description
          caption
          file_size
          alt_text
          url
          dimensions
          space_id
        }
      }
    }
  }
  `;
};

// Menu Query
/**
 * Gets data for menu
 * @returns {function}
 */
exports.getMenuQuery = () => {
  return gql`
    query {
      menu {
        nodes {
          id
          created_at
          updated_at
          name
          slug
          menu
          space_id
        }
      }
    }
  `;
};
