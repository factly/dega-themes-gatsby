/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import addDefaultSrc from '../utils/addDefaultSrc';

const PageNotFound = ({ data }) => (
  <Layout>
    <div className="text-center">
      <h1>Page Not Found</h1>
      <img
        className="mx-auto"
        src={data.dega.space.logo.url.raw}
        alt="Logo"
        onError={addDefaultSrc}
      />
    </div>
  </Layout>
);

export default PageNotFound;
export const query = graphql`
  query {
    dega {
      space {
        logo {
          url
        }
      }
    }
  }
`;
