/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import FormatPageLayout from '@components/FormatPageLayout';
import { isBrowser } from '@helpers/isBrowser';

const CategoryDetailsFormat = ({ data }) => {
  const { category, posts } = data;

  return <FormatPageLayout type="category" posts={posts.nodes} item={category} />;
};

export default CategoryDetailsFormat;
