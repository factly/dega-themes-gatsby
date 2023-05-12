/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout';
import StoryCard from './UI/StoryCard';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { parseTiptapContent } from '@helpers/parseTiptapContent';
import isBrowser from '@helpers/isBrowser'

const FormatPageLayout = ({ type, posts, item }) => {
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window.location.href);
  }
  return (
    <Layout>
      <div className="site-content">
        <main id="site-main" className="site-main outer">
          <div className="post-feed inner">
            <section className="post-card post-card-large">
              <div className="post-card-content">
                <div className="post-card-content-link">
                  {type === 'author' && (
                    item.medium?.url?.proxy ? (
                      <img sx={{ mb: '2rem' }}
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
                          mb: '2rem'
                        }}
                      />
                    )
                  )}

                  <header className="post-card-header">
                    <h2 className="post-card-title">{item.name}</h2>
                  </header>

                  <div className="post-card-excerpt">{item.description}</div>
                  <div sx={{ display: 'flex', gap: '8px', fontSize: '24px' }}>
                    <a href={''}><AiOutlineTwitter sx={{ color: '#979797', '&:hover': { color: '#000' } }} /></a>

                    <a href={''}
                    ><MdFacebook sx={{ color: '#979797', '&:hover': { color: '#000' } }} /></a>
                  </div>
                </div>
              </div>
            </section>

            {posts.map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default FormatPageLayout;
