/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Post from '@components/Post/index.js';
import Layout from '@components/Layout/index';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Link } from 'gatsby';
import parseDate from '@helpers/parseDate';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ data }) => {
  const { post: degaPost, space, posts, recentPosts } = data;

  const post = posts.edges.filter(({ node }) => node.id === degaPost.id)[0];
  const { previous: previousPost, next: nextPost } = post;

  // for sharing links
  // const title = encodeURIComponent(degaPost.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <Layout>
      <Seo
        title={degaPost.title}
        description={degaPost.excerpt}
        image={`${degaPost.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${degaPost.slug}`}
        type="article"
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 1024,
            mx: 'auto',
          }}
        >
          <Post key={`details${degaPost.id}`} post={degaPost} />
          <div>
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                pb: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: '1px',
              }}
            >
              <div
                sx={{
                  flex: [null, null, '0 0 50%'],
                  maxWidth: [null, null, '50%'],
                  p: '1.5rem',
                  textAlign: 'left',
                }}
              >
                {previousPost && (
                  <>
                    <Link
                      to={`/${previousPost.slug}/`}
                      sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                      <span>
                        <FaChevronLeft />
                      </span>
                      <div>
                        <span sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                          Previous Post
                        </span>
                        <h3>{previousPost.title}</h3>
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div
                sx={{
                  flex: [null, null, '0 0 50%'],
                  maxWidth: [null, null, '50%'],
                  ml: 'auto',
                  p: '1.5rem',
                  textAlign: 'right',
                }}
              >
                {nextPost && (
                  <>
                    <Link
                      to={`/${nextPost.slug}/`}
                      sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                      <div>
                        <span sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                          Next Post
                        </span>
                        <h3>{nextPost.title}</h3>
                      </div>
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div
              sx={{
                mt: (theme) => `${theme.space.spacing6}`,
                pb: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: '1px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h5
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  alignSelf: 'center',
                  mb: '1.5rem',
                  '&:after': {
                    position: 'absolute',
                    content: '""',
                    width: '50%',
                    height: '1px',
                    borderBottom: '2px solid #3BB2F6',
                    bottom: '-2px',
                    left: '50%',
                    marginLeft: '-25%',
                  },
                }}
              >
                Recent Posts
              </h5>
              <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {recentPosts.nodes
                  .filter((post) => post.id !== degaPost.id)
                  .splice(0, 6)
                  .map((post) => (
                    <div
                      key={post.id}
                      sx={{
                        flex: [null, null, '0 0 50%'],
                        maxWidth: [null, null, '50%'],
                        p: '1.5rem',
                        textAlign: 'left',
                      }}
                    >
                      <Link to={`/${post.slug}/`} sx={{ display: 'flex' }}>
                        <div sx={{ flex: '0 0 33%' }}>
                          <img src={post.medium.url.proxy} alt="" />
                        </div>
                        <div sx={{ flex: '0 0 67%', pl: '1rem' }}>
                          <h5>{post.title}</h5>
                          <p sx={{ fontSize: '0.75rem' }}>{parseDate(post.published_date)}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;
