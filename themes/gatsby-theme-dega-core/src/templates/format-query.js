import { graphql } from 'gatsby';
import FormatPage from '@components/Pages/Format';

export default FormatPage;

export const query = graphql`
  query ($id: String!) {
    allDegaPost(filter: { format: { id: { eq: $id } } }) {
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
