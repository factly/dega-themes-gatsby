/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import StoryCard from './UI/StoryCard';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';

const FormatPageLayout = ({ type, posts, item }) => {
  return (
    <Layout>
      <main id="sc-main" className="sc-main sc-canvas">
        <section className="sc-pagehead">
          <header className="sc-pagehead-content">
            {/* <div className="sc-tag-label">{type}</div> */}
            {type === 'author' && (
              item.medium?.url?.proxy ? (
                <img sx={{ mb: '1rem' }}
                  className="author-profile-pic"
                  src={item.medium?.url?.proxy}
                  alt={item.name}
                />
              ) : (
                <div
                  className="author-profile-pic-placeholder"
                  sx={{
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    padding: (theme) => `${theme.space.spacing8}`,
                    background: '#000',
                    mb: '1rem',
                  }}
                />
              )
            )}
            <h1 className="sc-tag-name sc-pagehead-title">{item.name}</h1>

            <div className="sc-tag-description sc-pagehead-description">
              A collection of {posts.length} {posts.length === 1 ? 'issue' : `issues`}
            </div>
            <div sx={{ display: 'flex', gap: '8px', fontSize: '24px', mt: '1rem' }}>
              <a href={''}><AiOutlineTwitter sx={{ color: '#979797' }} /></a>

              <a href={''}
              ><MdFacebook sx={{ color: '#979797' }} /></a>
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
