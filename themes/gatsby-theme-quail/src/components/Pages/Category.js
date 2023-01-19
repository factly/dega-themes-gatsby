/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';
import Seo from '@components/Seo';

const CategoryDetailsFormat = ({ data }) => {
  const { category, formats, posts } = data;

  return (
    <>
      <Seo title={category.name} />
      <FormatPageLayout type="topic" posts={posts.nodes} item={category} />;
    </>
  );
};

export default CategoryDetailsFormat;
