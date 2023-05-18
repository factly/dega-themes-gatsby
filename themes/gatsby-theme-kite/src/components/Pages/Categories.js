/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../Layout';
import { Link } from 'gatsby';

function CategoriesListPage({ data }) {
  return (
    <Layout>
      <Helmet>
        <title> Categories </title>
      </Helmet>
      <div sx={{ maxWidth: '1400px', mx: 'auto', fontSize: '32px', px: '32px' }}>
        <h1>Categories</h1>
      </div>
      <div sx={{ maxWidth: '1400px', mx: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))', gridGap: '32px', p: '32px' }}>
        {data.allDegaCategory.nodes.map((category) => (
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '24px', bg: '#D6BBFB', p: '48px', textAlign: 'center', borderRadius: '8px' }}>
            <a sx={{ display: 'flex', justifyContent: 'center' }} href={`/category/${category.slug}/`}>
              <img sx={{ width: '96px', height: '96px', bg: '#000', borderRadius: '50%', objectFit: 'cover', maxWidth: "100%" }} src="https://source.unsplash.com/random" alt="" />
            </a>
            <a sx={{ fontWeight: 700 }} href={`/category/${category.slug}/`}>
              {category.name}
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </Layout >
  );
}

export default CategoriesListPage;
