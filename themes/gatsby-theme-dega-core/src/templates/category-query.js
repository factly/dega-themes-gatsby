import { graphql } from 'gatsby';
import CategoryPage from '@components/Pages/Category';

export default CategoryPage;

export const query = graphql`
  query ($id: String!) {
    category: degaCategory(degaId: { eq: $id }) {
      description
      description_html
      id
      medium {
        alt_text
        url
        dimensions
      }
      name
      slug
    }
    formats: allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    posts: allDegaPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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
