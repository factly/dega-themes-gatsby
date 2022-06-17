import { graphql } from 'gatsby';
import CategoryPage from '@components/Pages/Category';

export default CategoryPage;

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    category:degaCategory(degaId: { eq: $id }) {
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
    formats:allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    posts:allDegaPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } }, format: { id: { eq: $format_id } } }
    ) {
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
        format {
          name
          slug
        }
        medium {
          alt_text
          url
          dimensions
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
