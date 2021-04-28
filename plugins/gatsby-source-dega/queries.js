const { gql } = require('@apollo/client');

// const defaultOptions = { spaceId: null, limit: 100, page: 1 };

// Total query
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
exports.getCategoriesQuery = ({  limit, page = 1 }) => {
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
exports.getTagsQuery = ({  limit, page = 1 }) => {
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
exports.getClaimsQuery = ({  limit, page = 1 }) => {
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
exports.getClaimantsQuery = ({limit, page = 1 }) => {
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
