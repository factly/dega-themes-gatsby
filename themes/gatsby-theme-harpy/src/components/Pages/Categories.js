/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../Layout';

function CategoriesListPage({ data }) {
  return (
    <Layout>
      <Helmet>
        <title> Categories </title>
      </Helmet>
      <div sx={{ maxWidth: '1270px', mx: 'auto', fontSize: '32px', px: '32px', mb: '32px', textAlign: 'center' }}>
        <h1>
          Categories
        </h1>
      </div>
      <div sx={{ maxWidth: '1270px', mx: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(337px, 1fr))', gridGap: '32px', textAlign: 'center', px: '24px', mb: '48px', justifyContent: 'center' }}>
        {data.allDegaCategory.nodes.map((category) => (
          <>
            <div sx={{}}>
              <Link href={`/category/${category.slug}/`}> {category.medium}
                <img sx={{ borderRadius: '24px' }} src="https://source.unsplash.com/random/280x230" alt="" />
              </Link>

              <a href={`/category/${category.slug}/`}>
                <p sx={{ mt: '24px', fontWeight: 700 }}> {category.name}</p>
              </a>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
}

export default CategoriesListPage;
