import { graphql } from 'gatsby';
import CategoryPage from '@components/Pages/Category';

export default CategoryPage

export const query = graphql`
  query ($id: String!) {
    degaCategory(degaId: { eq: $id }) {
      description
      id
      medium {
        alt_text
        url
        dimensions
      }
      name
      slug
    }
    allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    allDegaPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        users {
          id
          first_name
          last_name
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
        format {
          name
          slug
        }
        published_date
        id
        excerpt
        status
        subtitle
        title
        slug
      }
    }
  }
`;
