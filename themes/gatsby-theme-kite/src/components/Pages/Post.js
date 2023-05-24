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
      <div className="container wrapper">
        <Post post={post} />
      </div>
      <div sx={{ px: '2rem', display: 'flex', }}>
        <h2 sx={{ fontSize: '24px' }}>You may also like</h2>
      </div>
      <div sx={{ p: '2rem' }} className="grid post-feed js-post-feed">
        {recentPosts.nodes.slice(0, 3).map((post) => (
          <StoryCard post={post} />
        ))}{' '}
      </div>
    </Layout>
  );
};

export default PostDetails;
