/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout/index';
import Homepage from '../components/Homepage';
import HomePageTwo from '../components/HomepageTwo';
import Seo from '../components/Seo';

function Indexpage({ data, pageContext }) {
  const { homepage } = pageContext;

  const getHomePageComponent = (homepageType, content) => {
    const metaData = data.dega.categories.nodes.filter((i) => i.meta_fields !== null);

    if (homepageType === 1) return <Homepage data={content} />;
    if (homepageType === 2 && metaData.length > 0) return <HomePageTwo data={content} />;
    return <Homepage data={content} />;
  };

  return <Layout>{getHomePageComponent(homepage, data)}</Layout>;
}

export default Indexpage;

export const query = graphql`
  query($format_factcheck: [Int!], $format_without_factcheck: [Int!]) {
    dega {
      space {
        site_address
        site_title
        name
      }
      categories( limit: 100, page: 1) {
        nodes {
          id
          slug
          name
          description
          meta_fields
          medium {
            url
            dimensions
          }
        }
      }
      posts: posts(formats: $format_without_factcheck) {
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
          published_date
          id
          status
          subtitle
          title
          slug
          excerpt
        }
      }
      factchecks: posts(formats: $format_factcheck) {
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
          published_date
          id
          status
          subtitle
          title
          slug
        }
      }
    }
  }
`;
