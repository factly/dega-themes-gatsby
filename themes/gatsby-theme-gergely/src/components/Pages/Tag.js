/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsFormat = ({ data }) => {
  const { allDegaPost, degaTag, allDegaFormat } = data;

  return (
    <FormatPageLayout
      type="tag"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaTag}
    />
  );
};

export default TagDetailsFormat;
