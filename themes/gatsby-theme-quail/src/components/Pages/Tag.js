/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsFormat = ({ data }) => {
  const { posts, tag, formats } = data;

  return <FormatPageLayout type="tag" posts={posts.nodes} item={tag} />;
};

export default TagDetailsFormat;
