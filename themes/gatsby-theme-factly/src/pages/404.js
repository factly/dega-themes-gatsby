/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout/index';
import addDefaultSrc from '../utils/addDefaultSrc';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '../utils/generateFluidObject';

const PageNotFound = ({ data }) => (
  <Layout>
    <div sx={{ textAlign: 'center' }}>
      <h1 sx={{ py: (theme) => `${theme.space.spacing7}` }}>Page Not Found</h1>
      <Link
        to="/"
        sx={{
          py: (theme) => `${theme.space.spacing5}`,
          display: 'block',
          '&:hover': {
            color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
          },
        }}
      >
        Go to HomePage
        {/* <img
        sx={{ mx: 'auto', display: 'block', maxWidth: 300 }}
        src={data.dega.space.logo.url.proxy}
        alt="Logo"
        onError={addDefaultSrc}
      /> */}
        <Img
          sx={{ mx: 'auto', display: 'block', maxWidth: 300 }}
          fluid={generateFluidObject({
            url: data.dega.space.logo.url.proxy,
            dimensions: data.dega.space.logo.dimensions,
          })}
        />
      </Link>
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
          dimensions
        }
      }
    }
  }
`;
