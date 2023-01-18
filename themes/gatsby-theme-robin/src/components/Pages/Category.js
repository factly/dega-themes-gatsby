/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import FormatPageLayout from '@components/FormatPageLayout';
import { isBrowser } from '@helpers/isBrowser';

const CategoryDetailsFormat = ({ data }) => {
  const { category, formats, posts } = data;

  const [readMore, setReadMore] = React.useState(true);
  const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      const el = document.getElementById('category-description');
      setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
    }
  }, []);
  const header = (item) => {
    return (
      <FormatPageLayout
        type="category"
        posts={posts.nodes}
        formats={formats.nodes}
        item={category}
        header={header}
      />
    );
  };
};

export default CategoryDetailsFormat;
