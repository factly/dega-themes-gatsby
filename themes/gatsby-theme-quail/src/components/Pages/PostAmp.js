/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Post from '@components/Post/index.js';
import Layout from '@components/Layout/index';
import Seo from '@components/Seo';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetailsAmp = ({ data }) => {
  const { posts, space, post, recentPosts } = data;
  const postEdge = posts.edges.filter(({ node }) => node.id === post.id)[0];
  const { previous: previousPost, next: nextPost } = postEdge;

  // for sharing links
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={`${post.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${post.slug}`}
        type="article"
      />
      <main id="sc-main" className="sc-main">
        <Post post={post} previous={previousPost} next={nextPost} />
      </main>
    </Layout>
  );
};

export default PostDetailsAmp;
