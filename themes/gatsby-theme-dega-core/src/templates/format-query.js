import { graphql } from 'gatsby';
import FormatPage from '@components/Pages/Format';

export default FormatPage;

export const query = graphql`
  query ($id: String!) {
    posts: allDegaPost(filter: { format: { id: { eq: $id } } }) {
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
