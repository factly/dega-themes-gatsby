/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import StoryCard from './UI/StoryCard';
import { parseTiptapContent } from '@helpers/parseTiptapContent';

const FormatPageLayout = ({ type, posts, item }) => {
  return (
    <Layout>
      <div className="site-content">
        <main id="site-main" className="site-main outer">
          <div className="post-feed inner">
            <section className="post-card post-card-large">
              <div className="post-card-content">
                <div className="post-card-content-link">
                  {type === 'author' && item.medium?.url?.proxy && (
                    <img
                      className="author-profile-pic"
                      src={item.medium?.url?.proxy}
                      alt={item.name}
                    />
                  )}

                  <header className="post-card-header">
                    <h2 className="post-card-title">{item.name}</h2>
                  </header>

                  <div className="post-card-excerpt">{item.description}</div>
                </div>
              </div>
            </section>

            {posts.map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default FormatPageLayout;
