/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../Layout';

function TagsListPage({ data }) {
  return (
    <Layout>
      <Helmet>
        <title> Tags </title>
      </Helmet>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </Layout>
  );
}

export default TagsListPage;
