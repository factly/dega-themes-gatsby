import { graphql } from 'gatsby';
import AuthorsPage from '../components/Pages/Authors';

export default AuthorsPage;

export const query = graphql`
  query {
    allDegaUser {
      nodes {
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
    }
  }
`;
