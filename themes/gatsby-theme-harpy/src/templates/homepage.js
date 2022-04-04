/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import Homepage from '@components/Homepage';
import Seo from '@components/Seo';

const Indexpage = ({ data, pageContext }) => {
  const { homepage } = pageContext;

  const getHomePageComponent = (homepageType, content) => {
    const metaData = data.allDegaCategory.nodes.filter((i) => i.meta_fields !== null);


    if (homepageType === 2 && metaData.length > 0) return <HomePageTwo data={content} />;
    return <Homepage data={content} />;
  };

  return <Layout>{getHomePageComponent(homepage, data)}</Layout>;
}

export default Indexpage;

export const query = graphql`
  query ($format_factcheck: [String!], $format_without_factcheck: [String!]) {
    degaSpace {
      site_address
      site_title
      name
    }
    allDegaCategory {
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
    posts: allDegaPost(filter: { format: { id: { in: $format_without_factcheck } } },sort: {fields: created_at, order: DESC}) {
      nodes {
        users {
          id
          first_name
          last_name
          display_name
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
    factchecks: allDegaPost(filter: { format: { id: { in: $format_factcheck } } },sort: {fields: created_at, order: DESC}, limit: 5) {
      nodes {
        users {
          id
          first_name
          last_name
          display_name
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
`;
