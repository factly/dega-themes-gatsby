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
    <>
      <Layout>
        <Seo title={space.name} />
        <div sx={{ textAlign: 'center', color: '#fff', bg: '#ff0095', minHeight: ['280px', null, '560px'] }}>
          <h2 sx={{ fontWeight: 800, fontSize: ['3.4rem', null, '6rem'], pt: '2.75em', mt: '0rem', mb: '0.5em' }}>Dega</h2>
          <p sx={{ fontSize: ['2.2rem', null, '2.4rem'] }}>The professional publishing platform</p>
        </div>
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
    </>
  );
};

export default Homepage;
