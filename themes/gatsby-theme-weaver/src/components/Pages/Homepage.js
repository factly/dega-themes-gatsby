/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import BlogCard from '../UI/BlogCard';
import Seo from '@components/Seo';

const Homepage = ({ data }) => {
    const { space, categories, factchecks, posts } = data;

    return <Layout>

        {/* top Post */}

        <div sx={{
            display: 'flex',
            gap: '24px',
            mt: '2rem'
        }}>
            <div sx={{
                display: 'flex',
                gap: '3rem',
                flex: '1 0 50%',
                maxWidth: '50%'
            }}>
                {posts.nodes.slice(0, 1).map((post) => {
                    return <BlogCard post={post} type="featured" key={post.id} />
                })}
            </div>
            <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                flex: '1 0 50%',
                maxWidth: '50%',
            }}>
                {posts.nodes.slice(1, 3).map((post) => {
                    return <BlogCard post={post} type="featuredSmall" key={post.id} />
                })}
            </div>
        </div>


        {/* bottom post */}

        <div sx={{
            ml: '3.5rem',

        }}>
            <h2 sx={{ px: '2rem' }}></h2>
            <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {posts.nodes.slice(4, 13).map((post) => {
                    return <BlogCard post={post} type="basic" key={post.id} />;
                })}
            </div>
            <hr />
        </div>
    </Layout>;
};

export default Homepage;
