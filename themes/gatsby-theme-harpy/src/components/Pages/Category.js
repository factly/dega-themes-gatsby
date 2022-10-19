/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import FormatPageLayout from '@components/FormatPageLayout';
import { isBrowser } from '@helpers/isBrowser';

const CategoryDetailsFormat = ({ data }) => {
  const { degaCategory, allDegaFormat, allDegaPost } = data;

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
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {item.name}
        </h1>
        <div
          id="category-description"
          sx={{
            maxHeight: (theme) => (readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%'),
            overflow: 'hidden',
            px: (theme) => `${theme.space.spacing5}`,
          }}
        >
          {parseEditorJsData({ content: item.description })}
        </div>
        {item.description && isReadMoreNeeded && (
          <button
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
            sx={{
              px: (theme) => `${theme.space.spacing5}`,
              color: (theme) => `${theme.colors.textLinkPrimary}`,
              fontSize: (theme) => `${theme.fontSizes.h6}`,
            }}
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };
  return (
    <FormatPageLayout
      type="category"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaCategory}
      header={header}
    />
  );
};

export default CategoryDetailsFormat;
