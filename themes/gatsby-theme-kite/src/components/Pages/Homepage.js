/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import BlogCard from '../UI/BlogCard';
import Seo from '@components/Seo';

const Homepage = ({ data }) => {
  const { space, categories, factchecks, posts } = data;

  return (
    <Layout>
      <div
      // sx={{
      //     display: 'flex',
      //     flexWrap: 'wrap',
      //     flex: '0 1 800px',
      //     justifyContent: 'center',
      // }}
      >
        {/* featured post */}
        {/* 
            <div sx={{ pt: '1rem', flex: '1 0 auto' }}>
                <h2 sx={{ px: '2rem' }}>Featured Posts</h2>
                <BlogCard post={posts.nodes[0]} type="featured" />
            </div> */}

        {/* sidebar post */}

        {/* <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 500px',
                    pt: '1rem',
                }}
            >
                <h2 sx={{ pb: '1.25rem', px: '1.5rem' }}>Factchecks</h2>
                {factchecks.nodes.slice(0, 5).map((factcheck) => {
                    return <BlogCard post={factcheck} type="sidebar" key={factcheck.id} />;
                })}
            </div> */}
      </div>

      {/* bottom post */}

      <div
        sx={{
          ml: '3.5rem',
        }}
      >
        <h2 sx={{ px: '2rem' }}></h2>
        <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {posts.nodes.slice(0, 9).map((post) => {
            return <BlogCard post={post} type="basic" key={post.id} />;
          })}
        </div>
        <hr />
      </div>
    </Layout>
  );
};

export default Homepage;
