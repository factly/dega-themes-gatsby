/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import StoryCard from './UI/StoryCard';
import { parseTiptapContent } from '@helpers/parseTiptapContent';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';

const FormatPageLayout = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item?.slug : item?.degaId;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <>
      <div sx={{ display: 'flex', flexDirection: 'column', mx: 'auto', textAlign: 'center', maxWidth: '700px', mb: '4rem' }}>
        {type === 'author' && (
          item.medium?.url?.proxy ? (
            <img sx={{ mb: '1rem' }}
              className="author-profile-pic"
              src={item.medium?.url?.proxy}
              alt={item.name}
            />
          ) : (
            <div
              className="author-profile-pic-placeholder"
              sx={{
                borderRadius: '50%',
                width: 40,
                height: 40,
                padding: (theme) => `${theme.space.spacing8}`,
                background: '#000',
                mb: '1rem',
                mx: 'auto'
              }}
            />
          )
        )}
        <div class="tag-card__content text-acc-1">
          <h1 class="tag-card__title m-b-sm">{item.name}</h1>
          <div class="tag-card__descr text-acc-3">{item.description}</div>
          <div sx={{ fontSize: '16x', fontWeight: '700', mb: '1rem' }} class="tag-card__count m-t fw-600">{posts.length} posts</div>
        </div>
        {/* <div className="post-card-excerpt">{item.description}</div> */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div sx={{ display: 'flex', gap: '8px', fontSize: '24px', justifyContent: 'center', mt: '1rem' }}>
          <a href={''}><AiOutlineTwitter sx={{ color: '#000' }} /></a>

          <a href={''}
          ><MdFacebook sx={{ color: '#000' }} /></a>
        </div>
      </div>

      <div
        id="category-description"
        sx={{
          maxHeight: '100%',
          overflow: 'hidden',
          px: (theme) => `${theme.space.spacing5}`,
        }}
      >
        {parseTiptapContent(item?.description)}
      </div>
    </>
  );

  return (
    <Layout>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, null, 'row'],
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
      >
        <div
          className="main-content"
          sx={{ order: [2, null, null, null, 1], maxWidth: 1560, width: '100%', mx: 'auto' }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pb: (theme) => `${theme.space.spacing6}`,
              px: '1.5rem'
            }}
          >
            {header ? header(item) : defaultHeader(item)}

            {filteredPosts.length > 0 ? (
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                  px: [null, null, (theme) => `${theme.space.spacing6}`],
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
      </div>
    </Layout>
  );
};

export default FormatPageLayout;
