import { graphql } from 'gatsby';
import AuthorPage from '@components/Pages/Author';

export default AuthorPage

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    degaUser(degaId: { eq: $id }) {
      degaId
      first_name
      last_name
      email
      display_name
      social_media_urls
      description
      medium {
        url
        dimensions
      }
    }
    allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    allDegaPost(
      filter: { users: { elemMatch: { id: { eq: $id } } }, format: { id: { eq: $format_id } } }
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
