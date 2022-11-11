/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';

const CategoryDetailsFormat = ({ data }) => {
  const { category, posts } = data;

  return (
    <>
      <FormatPageLayout type="category" posts={posts.nodes} item={category} />;
      <Seo title={category.name} />
    </>
  )
};

export default CategoryDetailsFormat;
