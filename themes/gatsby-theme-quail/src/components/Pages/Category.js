/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const CategoryDetailsFormat = ({ data }) => {
  const { category, formats, posts } = data;

  return <FormatPageLayout type="topic" posts={posts.nodes} item={category} />;
};

export default CategoryDetailsFormat;
