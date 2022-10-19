/** @jsx jsx */
import React from 'react';
import parseDate from '@helpers/parseDate';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';
import Badge from '@components/Post/Badge';

const BlogCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {type === 'basic' && (
        <div
          sx={{
            maxWidth: type === 'basic' ? [null, null, '480px'] : [null, null, null, '800px'],
            padding: ['1.5rem', null, '2rem'],
          }}
        >
          <div sx={{ marginBottom: '20px' }}>
            <div
              sx={{
                paddingBottom: '56.24999999%',
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
              }}
            >
              <div sx={{ position: 'absolute', width: '100%', height: ' 100%' }}>
                <Link
                  to={`/${post.slug}`}
                  sx={{
                    zIndex: 20,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    textDecoration: 'none',
                    touchAction: 'manipulation',
                  }}
                >
                  {post.medium && (
                    <Img
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                        borderRadius: '16px',
                      }}
                      fluid={generateFluidObject({
                        url: post.medium?.url.proxy,
                        dimensions: post.medium?.dimensions,
                      })}
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              sx={{
                fontWeight: 500,
                fontSize: '1rem',
                color: '#ea364a',
              }}
            >
              <Link to={`/author/${post.users[0]?.id}`}>{post.users[0]?.display_name} .</Link>
            </div>
            <div sx={{ fontSize: '.75rem', color: '#ea364a' }}>
              {parseDate(post.published_date)}
            </div>
          </div>
          <div sx={{ marginBottom: '24px', mt: '12px' }}>
            <Link sx={{ fontSize: type === 'basic' ? '1.5rem' : '2.25rem' }} to={`/${post.slug}`}>
              <h2
                sx={{ height: type === 'basic' ? '2.5em' : 'auto', overflow: 'hidden' }}
                title={post.title}
              >
                {post.title.length < 50 ? post.title : post.title.slice(0, 50) + '...'}
              </h2>
            </Link>
          </div>
          <div sx={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {post.excerpt.length < 80 ? post.excerpt : post.excerpt.slice(0, 80) + '...'}
          </div>
          <div>
            <div>
              {post.categories.length > 0 && (
                <Link
                  to={`/category/${post.categories[0].slug}`}
                  sx={{
                    display: 'inline-flex',
                    padding: '0 20px',
                    height: '32px',
                    lineHeight: '32px',
                    fontSize: '14px',
                    fontWeight: 600,
                    position: 'relative',
                    borderRadius: '16px',
                    background: '#F9F5FF',
                    color: '#6941C6',
                    fontFamily: 'inter',
                  }}
                >
                  {post.categories[0]?.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* featured post */}

      {type === 'featured' && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            // pt: (theme) => `${theme.space.spacing6}`,
            //borderRadius: (theme) => `${theme.borderRadius.default}`,
            // boxShadow: (theme) => `${theme.boxShadow.default}`,
            backgroundColor: (theme) => `${theme.colors.background.default}`,
            color: (theme) => `${theme.colors.text.default}`,
            '& a:hover': {
              backgroundColor: (theme) => `${theme.colors.background.hover}`,
              color: (theme) => `${theme.colors.text.hover}`,
              textDecoration: 'underline',
            },
          }}
        >
          <div
            sx={{
              display: 'flex',
            }}
          >
            <div
              className="featured"
              sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 'full' }}
            >
              <Link passHref href={`/${post.slug}`}>
                <a>
                  <div
                    sx={{ maxWidth: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}
                  >
                    <div
                      sx={{
                        paddingBottom: '56.24999999%',
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                      }}
                    >
                      <div
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          height: ' 100%',
                          background: '#eff8fa',
                        }}
                      >
                        <img
                          sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
                          src={post.medium?.url.proxy}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <div
                key={post.id}
                sx={{
                  borderTop: '1px solid #d9d9d9',
                  display: 'block',
                  py: '1rem',
                  px: ['1rem', 0],
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    gap: '6px',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F55353',
                    mb: '8px',
                  }}
                >
                  <Link key={post.id} href={`/author/${post?.users[0]?.slug}`} passHref>
                    <a sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      {post?.users[0]?.display_name}.
                    </a>
                  </Link>

                  <p sx={{ fontSize: '0.675rem' }}>{parseDate(post.published_date)}</p>
                </div>
                <Link key={post.id} href={`/${post.slug}`} passHref>
                  <a sx={{ display: 'block' }}>
                    <h3 sx={{ fontSize: '1rem', mb: '8px' }}>{post.title.slice(0, 60)}..</h3>
                  </a>
                </Link>
                {/* <p sx={{
                  fonWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#667085',
                  mb: '10px'
                }}>{post.excerpt.slice(0, 60)}..</p> */}

                {post?.categories?.length > 0 && (
                  <Link key={post.id} href={`/category/${post.categories[0].slug}`} passHref>
                    <a
                      sx={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        color: '#6941C6',
                        fontWeight: 500,
                        lineHeight: '20px',
                        border: '1px',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        background: '#F9F5FF',
                      }}
                    >
                      {post.categories[0].name}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* featuredSmall post */}

      {type === 'featuredSmall' && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            // pt: (theme) => `${theme.space.spacing6}`,
            //borderRadius: (theme) => `${theme.borderRadius.default}`,
            // boxShadow: (theme) => `${theme.boxShadow.default}`,
            backgroundColor: (theme) => `${theme.colors.background.default}`,
            color: (theme) => `${theme.colors.text.default}`,
            '& a:hover': {
              backgroundColor: (theme) => `${theme.colors.background.hover}`,
              color: (theme) => `${theme.colors.text.hover}`,
              textDecoration: 'underline',
            },
          }}
        >
          <div
            sx={{
              display: 'flex',
            }}
          >
            <div
              className="featuredSmall"
              sx={{ display: 'flex', gap: '20px', width: '100%', maxWidth: 'full' }}
            >
              <Link passHref href={`/${post.slug}`}>
                <a
                  sx={{
                    flex: '1 0 50%',
                    maxWidth: '50%',
                  }}
                >
                  <div
                    sx={{
                      maxWidth: '100%',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      sx={{
                        paddingBottom: '56.24999999%',
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                      }}
                    >
                      <div
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          height: ' 100%',
                          background: '#eff8fa',
                        }}
                      >
                        <img
                          sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
                          src={post.medium?.url.proxy}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <div
                key={post.id}
                sx={{
                  borderTop: '1px solid #d9d9d9',
                  display: 'block',
                  py: '1rem',
                  px: ['1rem', 0],
                  flex: '1 0 50%',
                  maxWidth: '50%',
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    gap: '6px',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F55353',
                    mb: '8px',
                  }}
                >
                  <Link key={post.id} href={`/author/${post?.users[0]?.slug}`} passHref>
                    <a sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      {post?.users[0]?.display_name}.
                    </a>
                  </Link>

                  <p sx={{ fontSize: '0.675rem' }}>{parseDate(post.published_date)}</p>
                </div>

                <Link key={post.id} href={`/${post.slug}`} passHref>
                  <a sx={{ display: 'block' }}>
                    <h3 sx={{ fontSize: '1rem', mb: '8px' }}>{post.title.slice(0, 60)}..</h3>
                  </a>
                </Link>
                {/* <p sx={{
                  fonWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#667085',
                  mb: '10px'
                }}>{post.excerpt.slice(0, 60)}..</p> */}

                {post?.categories?.length > 0 && (
                  <Link key={post.id} href={`/category/${post.categories[0].slug}`} passHref>
                    <a
                      sx={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        color: '#6941C6',
                        fontWeight: 500,
                        lineHeight: '20px',
                        border: '1px',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        background: '#F9F5FF',
                      }}
                    >
                      {post.categories[0].name}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
