/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import Seo from '@components/Seo';
import StoryCard from '../UI/StoryCard';

const Indexpage = ({ data }) => {
  const { space, posts } = data;

  const featuredPosts = posts.nodes.slice(0, 6);
  const recentPosts = posts.nodes.slice(6);
  return (
    <Layout>
      <div className="main">
        {(space.title || space.tagline) && (
          <section className="home-cover-area justify-center flex">
            <div className="home-cover-wrap">
              <div className="text-center">
                <h1 className="intro-title heading-large">{space.title}</h1>
                <div className="intro-description">{space.tagline}</div>
              </div>
            </div>
          </section>
        )}
        <section className="featured-posts">
          <div className="container featured-post-layout-one">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h4 section-title">Featured Posts</h2>
              </div>
              <div className="col-xl-7 col-lg-6">
                <StoryCard post={featuredPosts[0]} />
              </div>
              <div className="col-xl-5 col-lg-6 small-posts-wrap">
                {featuredPosts.slice(1).map((post) => (
                  <StoryCard type="small" post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {recentPosts.length > 0 && (
          <div className="container">
            <div className="row js-post-list-wrap post-list-wrap">
              <div className="col-lg-12">
                <h2 className="h4 section-title">Most recent posts</h2>
              </div>

              {recentPosts.map((post) => (
                <div className="col-lg-4 col-md-6 col-sm-6 js-post-card-wrap">
                  <StoryCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* <div className="container">
          <div className="pagination-wrap text-center" id="pagination-wrap">
            <button className="btn btn-lg" id="load-more">
              <span>Show more posts</span>
            </button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Indexpage;
