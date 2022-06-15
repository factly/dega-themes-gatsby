import { graphql } from 'gatsby';
import TagPage from '@components/Pages/Tag';

export default TagPage;

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    tag:degaTag(degaId: { eq: $id }) {
      description
      id
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
      filter: { tags: { elemMatch: { id: { eq: $id } } }, format: { id: { eq: $format_id } } }
    ) {
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
        status
        subtitle
        title
        excerpt
        slug
      }
    }
  }
`;
