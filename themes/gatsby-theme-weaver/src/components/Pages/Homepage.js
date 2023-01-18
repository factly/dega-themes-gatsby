/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import StoryCard from '../UI/StoryCard';
import Seo from '@components/Seo';

const Homepage = ({ data }) => {
  const { space, categories, factchecks, posts } = data;

  const featuredPosts = posts.nodes.slice(0, 3);

  return (
    <Layout>
      <Seo title={space.name} />
      <main id="site-main" className="site-main outer">
        <div className="inner posts">
          <div className="post-feed">
            <StoryCard post={featuredPosts[0]} type="large" />

            <StoryCard post={featuredPosts[1]} type="featured" />
            <StoryCard post={featuredPosts[2]} type="featured" />

            {posts.nodes.slice(3).map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
