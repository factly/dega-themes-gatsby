/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import StoryCard from '@components/UI/StoryCard';

const FormatDetails = ({ data }) => {
  const { posts } = data;
  //const filteredPosts = allDegaPost.nodes.filter((post) => post.published_date !== null);
  return (
    <Layout>
      <div className="site-content">
        <main id="site-main" className="site-main outer">
          <div className="post-feed inner">
            <section className="post-card post-card-large">
              <div className="post-card-content">
                <div className="post-card-content-link">
                  <header className="post-card-header">
                    <h2 className="post-card-title">{posts.nodes[0]?.format.name}</h2>
                  </header>
                </div>
              </div>
            </section>

            {posts.nodes.map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default FormatDetails;
