/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Post from '@components/Post/index.js';
import Layout from '@components/Layout/index';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';
import StoryCard from '@components/UI/StoryCard';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ data }) => {
  const { posts, space, post, recentPosts } = data;

  // for sharing links
  const title = encodeURIComponent(post.title);
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window.location.href);
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={`${post.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${post.slug}`}
        type="article"
      />
      <div className="site-content">
        <main id="site-main" className="site-main">
          <Post key={`details${post.id}`} post={post} />
          <aside className="read-more-wrap outer">
            <div className="read-more inner">
              {recentPosts.nodes.slice(0, 3).map((post) => (
                <StoryCard post={post} />
              ))}
            </div>
          </aside>
        </main>
      </div>
    </Layout>
  );
};

export default PostDetails;
