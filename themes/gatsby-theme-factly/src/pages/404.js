import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PageNotFound = ({ data }) => (
  <Layout>
  <div className='text-center'>
     <h1>Page Not Found</h1>
    <img className='mx-auto' src={data.dega.space.logo.url.replace(/^"(.*)"$/, '$1')} alt="Logo"/>
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
