/** @jsx jsx */
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import PostGrid from '../PostGrid';
import Helmet from 'react-helmet';
import Layout from '../Layout';

function TagDetailsAll({ data }) {
  const { posts, tag, formats } = data;
  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,

          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
            px: (theme) => theme.space.layout2,
          }}
        >
          {item.name}
        </h1>
      </div>
    );
  };
  return (
    <Layout>
      <Helmet>
        <title> {tag.name} </title>
      </Helmet>
      <PostGrid type="tag" posts={posts.nodes} formats={formats.nodes} item={tag} header={header} />
    </Layout>
  );
}

export default TagDetailsAll;
