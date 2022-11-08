import { graphql } from 'gatsby';
import AuthorPage from '@components/Pages/Author';

export default AuthorPage;

export const query = graphql`
  query ($slug: String!, $format_id: String!) {
    user: degaUser(slug: { eq: $slug }) {
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
    formats: allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    posts: allDegaPost(
      filter: { users: { elemMatch: { slug: { eq: $slug } } }, format: { id: { eq: $format_id } } }
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
        status
        subtitle
        title
        excerpt
        slug
      }
    }
  }
`;
