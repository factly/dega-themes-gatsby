import { graphql } from 'gatsby';
import TagPage from '@components/Pages/Tag';

export default TagPage;

export const query = graphql`
  query ($id: String!) {
    degaTag(degaId: { eq: $id }) {
      description
      id
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
    allDegaPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
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
