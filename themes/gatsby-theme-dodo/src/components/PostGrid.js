/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import StoryCard from './UI/StoryCard';

const PostGrid = ({ type, posts, formats, item, header, useSlug = true }) => {
  console.log({ posts });
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);

  const defaultHeader = (item) => (
    <header>
      <h1
        sx={{
          fontSize: [(theme) => `${theme.fontSizes.h5}`, null, (theme) => `${theme.fontSizes.h4}`],
          mb: (theme) => `${theme.space.spacing5}`,
          textTransform: 'capitalize',
          px: (theme) => theme.space.layout2,
        }}
      >
        {item.name}
      </h1>
      {item?.description && <p>{item.description}</p>}
    </header>
  );
  return (
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
                <StoryCard
                  key={index}
                  cardStyle="tulip"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
