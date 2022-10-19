/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import BlogCard from '../UI/BlogCard';
import Seo from '@components/Seo';

const Homepage = ({ data }) => {
  const { post, posts } = data;

  return (
    <Layout>
      {/* bottom post */}

      <div
        sx={{
          ml: '3.5rem',
        }}
      >
        <h2 sx={{ px: '2rem' }}></h2>
        <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {posts.nodes.slice(0, 6).map((post) => {
            return <BlogCard post={post} type="basic" key={post.id} />;
          })}
        </div>
        <hr />
      </div>

      {/* <div>
            <section>
                <div sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <div sx={{
                        mb: '4rem'
                    }}>
                        {posts.nodes.slice(0, 8).map((post) => {
                            return <BlogCard post={posts} type="simple" key={post.id} />
                        })}
                    </div>
                    <div sx={{
                        maxWidth: '350px',
                        ml: '8rem',
                        mt: '2.25rem',

                    }}>
                        <BlogCard post={posts} type="simple-two" key={posts.id} />

                        <p sx={{
                            mt: '2rem'
                        }}><hr /></p>

                        {posts.nodes.slice(8, 10).map((post) => {
                            return <BlogCard post={posts} type="simple-three" key={post.id} />
                        })}

                    </div>
                </div>
            </section>
        </div>
        <hr /> */}
    </Layout>
  );
};

export default Homepage;
