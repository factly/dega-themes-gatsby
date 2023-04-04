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
      <div sx={{ maxWidth: '1400px', mx: 'auto', fontSize: '32px', px: '32px', mt: '24px' }}>
        <h1>Categories</h1>
      </div>
      <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))', gridGap: '32px', maxWidth: '1400px', mx: 'auto', mb: '48px', p: '22px' }}>
        {data.allDegaCategory.nodes.map((category) => (
          <>
            <Link sx={{ padding: '24px', fontWeight: 500, bg: '#eff8fa', borderRadius: '4px' }} to={`/category/${category.slug}/`}>
              {category.name}
            </Link>
          </>
        ))}
      </div>
    </Layout>
  );
}

export default CategoriesListPage;
