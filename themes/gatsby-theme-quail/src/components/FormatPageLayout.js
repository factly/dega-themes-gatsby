/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import StoryCard from './UI/StoryCard';

const FormatPageLayout = ({ type, posts, item }) => {
  return (
    <Layout>
      <main id="sc-main" className="sc-main sc-canvas">
        <section className="sc-pagehead">
          <header className="sc-pagehead-content">
            <div className="sc-tag-label">{type}</div>

            <h1 className="sc-tag-name sc-pagehead-title">{item.name}</h1>

            <div className="sc-tag-description sc-pagehead-description">
              A collection of {posts.length} {posts.length === 1 ? 'issue' : `issues`}
            </div>
          </header>
        </section>

        <div className="sc-feed">
          {posts.map((post) => (
            <StoryCard post={post} />
          ))}{' '}
        </div>
      </main>
    </Layout>
  );
};

export default FormatPageLayout;
