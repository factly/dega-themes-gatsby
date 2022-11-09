/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import StoryCard from '../UI/StoryCard';
import Seo from '@components/Seo';
import { Link } from 'gatsby';
import { parseDate } from '@helpers/parseDate';

const Homepage = ({ data }) => {
  const { post, posts, space, featuredCategories } = data;
  const featuredPost = posts.nodes[0];
  const featuredPosts = posts.nodes.slice(1, 3);

  return (
    <Layout>
      <main id="sc-main" className="sc-main sc-outer">
        <div className="sc-inner">
          {posts.nodes.length > 0 ? (
            <article className="sc-latest sc-card post">
              <Link className="sc-card-link" href={`/${featuredPost.slug}/`}>
                <header className="sc-card-header">
                  <div className="sc-article-meta">
                    <span className="sc-card-date">
                      Latest —{' '}
                      <time dateTime={parseDate(featuredPost.published_at)}>
                        {parseDate(featuredPost.published_at)}
                      </time>
                    </span>
                  </div>
                  <h2 className="sc-article-title sc-card-title">{featuredPost.title}</h2>
                </header>

                <p className="sc-article-excerpt">{featuredPost.excerpt}</p>

                <footer className="sc-card-meta">
                  {/* <span className="sc-card-duration">2 min read</span> */}
                </footer>
              </Link>
            </article>
          ) : (
            <p>No Issues Found!</p>
          )}

          <div className="sc-wrapper">
            <section className="sc-section">
              {posts.nodes.length > 1 && (
                <>
                  {' '}
                  <h2 className="sc-section-title">More issues</h2>
                  <div className="sc-feed">
                    {posts.nodes.slice(3).map((post) => (
                      <StoryCard post={post} />
                    ))}{' '}
                  </div>
                </>
              )}
            </section>

            <aside className="sc-sidebar">
              <section className="sc-section">
                <h2 className="sc-section-title">About</h2>

                <div className="sc-about">
                  <img className="sc-about-icon" src={space?.logo?.url?.proxy} alt={space.name} />

                  <section className="sc-about-wrapper">
                    <h3 className="sc-about-title">{space.name}</h3>

                    <p className="sc-about-description">{space.description}</p>
                  </section>
                </div>
              </section>

              {posts.nodes.length > 1 && (
                <section className="sc-section">
                  <h3 className="sc-section-title">Featured</h3>

                  <div className="sc-featured sc-feed">
                    {featuredPosts.map((post) => (
                      <StoryCard post={post} />
                    ))}
                  </div>
                </section>
              )}

              {featuredCategories.nodes.length > 0 && (
                <section className="sc-section">
                  <h3 className="sc-section-title">Topics</h3>

                  <div className="sc-topic">
                    {featuredCategories.nodes.map((category) => (
                      <Link className="sc-topic-item" to={`/category/${category.slug}`}>
                        <h3 className="sc-topic-name">{category.name}</h3>
                        {/* <span className="sc-topic-count">7 issues</span> */}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
