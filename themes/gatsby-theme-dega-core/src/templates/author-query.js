import { graphql } from 'gatsby';
import AuthorPage from '@components/Pages/Author';

export default AuthorPage;

export const query = graphql`
  query ($slug: String!) {
    user: degaUser(slug: { eq: $slug }) {
      degaId
      first_name
      last_name
      email
      medium {
        url
        dimensions
      }
      social_media_urls
      description
      slug
      display_name
    }
    formats: allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    posts: allDegaPost(filter: { users: { elemMatch: { slug: { eq: $slug } } } }) {
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
          id
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
