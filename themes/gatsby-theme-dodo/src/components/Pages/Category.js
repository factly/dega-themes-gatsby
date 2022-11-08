/** @jsx jsx */

import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import PostGrid from '../PostGrid';
import Helmet from 'react-helmet';
import { isBrowser } from '@helpers/isBrowser';
import Layout from '../Layout';
import InnerHTML from 'dangerously-set-html-content';
import Seo from '@components/Seo';

function CategoryDetailsAll({ data }) {
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
      <header className="c-page-header">
        <div className="l-grid l-grid--2-columns">
          <div>
            <h1 className="c-topper__headline u-font-headline u-font-family-sansSerif">
              {item.name}
            </h1>
            <p className="c-topper__standfirst u-font-standfirst u-mt-8 u-font-family-sansSerif">
              <InnerHTML className="parsed" html={item.description_html} />{' '}
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
            </p>
          </div>
        </div>
      </header>
    );
  };
  return (
    <Layout>
      <Seo title={category.name} />
      <PostGrid
        type="category"
        posts={posts.nodes}
        formats={formats.nodes}
        item={category}
        header={header}
      />
    </Layout>
  );
}

export default CategoryDetailsAll;
