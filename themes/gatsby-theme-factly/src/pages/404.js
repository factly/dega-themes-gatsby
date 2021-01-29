/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import addDefaultSrc from '../utils/addDefaultSrc';

const PageNotFound = ({ data }) => (
  <Layout>
    <div sx={{ textAlign: 'center' }}>
      <h1 sx={{ py: '2rem' }}>Page Not Found</h1>
      <Link to="/" sx={{ py: '1rem', display: 'block' }}>
        {' '}
        Go to HomePage
      </Link>
      <img
        sx={{ mx: 'auto', display: 'block' }}
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
