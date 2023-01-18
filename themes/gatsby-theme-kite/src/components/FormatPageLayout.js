/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import { parseTiptapContent } from '@helpers/parseTiptapContent';
import StoryCard from './UI/StoryCard';

const FormatPageLayout = ({ type, posts, item }) => {
  const filteredPosts = posts.filter((post) => post.published_date !== null);

  return (
    <Layout>
      <div className="container wrapper">
        <div class="section hero">
          <div class="card tag-card p-lg is-hero" style={{ borderTop: '3px solid #D91C38' }}>
            <div class="tag-card__media flex">
              {item.medium?.url?.proxy && (
                <img
                  class="tag-card__img lazyautosizes lazyloaded"
                  srcset={`${item.medium?.url?.proxy} 100w,
                  ${item.medium?.url?.proxy} 300w`}
                  src={item.medium?.url?.proxy}
                  alt={item.name}
                  sizes="120px"
                />
              )}
            </div>

            <div class="tag-card__content text-acc-1">
              <h1 class="tag-card__title m-b-sm">{item.name}</h1>
              <div class="tag-card__descr text-acc-3">{item.description}</div>
              <div class="tag-card__count m-t fw-600">{posts.length} posts</div>
            </div>
          </div>
        </div>
        <div className="section main-content">
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                //px: [null, null, (theme) => `${theme.space.spacing6}`],
                mt: (theme) => `${theme.space.spacing7}`,
                gridGap: (theme) => `${theme.space.spacing7}`,
              }}
            >
              {filteredPosts.map((item, index) => (
                <StoryCard key={index} type="basic" post={item} />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FormatPageLayout;
