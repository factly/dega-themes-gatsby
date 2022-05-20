/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsAll = ({ data }) => {
  const { allDegaPost, degaTag, allDegaFormat } = data;
  /**
   * TODO: add description under category name
   */
  return (
    <FormatPageLayout
      type="tag"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaTag}
    />
  );
};

export default TagDetailsAll;
