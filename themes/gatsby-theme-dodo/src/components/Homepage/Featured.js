import React from 'react';
import { Link } from 'gatsby';
import { StoryCard } from '@components/UI/StoryCard';

const Featured = ({ posts }) => {
  const featuredPost = posts[0];
  const featuredPosts = posts.slice(1, 3);
  const latestPosts = posts.slice(3, 8);

  return (
    <div className="l-grid">
      <div className="c-hero">
        {posts.length > 8 ? (
          <>
            <h2 className="u-screenreader">Featured</h2>

            <div className="left c-stack-stories">
              {featuredPosts.map((post) => (
                <StoryCard storyData={post} />
              ))}
            </div>

            <div className="center">{<StoryCard storyData={featuredPost} cardStyle="large" />}</div>

            <div className="right c-stack-stories">
              <div className="c-section-heading">
                <h2 className="c-section-heading__title c-section-heading__title--small">Latest</h2>
              </div>
              {latestPosts.map((post) => (
                <StoryCard cardStyle="small" storyData={post} />
              ))}{' '}
            </div>
          </>
        ) : (
          <div className="c-section c-section--politics">
            <div className="l-grid">
              <div className="c-section-heading">
                <h2 className="c-section-heading__title">
                  <Link to={`/category/${category.slug}/`}>{category.name}</Link>
                </h2>
              </div>
            </div>

            <div className="l-grid l-grid--4-columns">
              {posts.map((post) => (
                <StoryCard storyData={post} />
              ))}{' '}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
