import { graphql } from 'gatsby';
import CategoriesPage from '../components/Pages/Categories';

export default CategoriesPage;

export const query = graphql`
  query {
    allDegaCategory {
      nodes {
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
    }
  }
`;
