import { graphql } from 'gatsby';

import Homepage from '@components/Pages/Homepage';

export default Homepage;

export const query = graphql`
  query ($format_factcheck: [String!], $format_without_factcheck: [String!]) {
    space: degaSpace {
      site_address
      site_title
      name
    }
    featuredCategories: allDegaFeaturedCategory {
      nodes {
        id
        slug
        name
        description
        description_html
        meta_fields
        medium {
          url
          dimensions
        }
        posts {
          nodes {
            users {
              id
              first_name
              last_name
              slug
            }
            categories {
              slug
              name
            }
            medium {
              alt_text
              url
              dimensions
            }
            published_date
            id
            status
            subtitle
            title
            slug
            excerpt
          }
        }
      }
    }
    posts: allDegaPost(filter: { format: { id: { in: $format_without_factcheck } } }) {
      nodes {
        users {
          id
          first_name
          last_name
          display_name
          slug
        }
        categories {
          slug
          name
        }
        medium {
          alt_text
          url
          dimensions
        }
        published_date
        id
        status
        subtitle
        title
        slug
        excerpt
      }
    }
    factchecks: allDegaPost(filter: { format: { id: { in: $format_factcheck } } }) {
      nodes {
        users {
          id
          first_name
          last_name
          slug
        }
        categories {
          slug
          name
        }
        medium {
          alt_text
          url
          dimensions
        }
        published_date
        id
        status
        subtitle
        title
        slug
      }
    }
  }
`;
