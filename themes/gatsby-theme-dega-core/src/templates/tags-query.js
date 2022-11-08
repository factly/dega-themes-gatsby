import { graphql } from 'gatsby';
import TagsPage from '../components/Pages/Tags';

export default TagsPage;

export const query = graphql`
  query {
    allDegaTag {
      nodes {
        description
        description_html
        id
        name
        slug
      }
    }
  }
`;
