/** @jsx jsx */
import React from 'react';
import parseDate from '@helpers/parseDate';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';

const BlogCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {(type === 'featured' || type === 'basic') && (
        <div
          sx={{
            maxWidth: type === 'basic' ? [null, null, '480px'] : [null, null, null, '800px'],
            padding: ['1.5rem', null, '2rem'],
          }}
        >
          <div sx={{ marginBottom: '32px' }}>
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
                    fontSize: '.875rem',
                    fontWeight: 500,
                    position: 'relative',
                    borderRadius: '16px',
                    background: 'gray',
                    marginBottom: '24px',
                    color: 'white',
                    '&:hover': {
                      color: '#000',
                      bg: '#feb2b2',
                    },
                  }}
                >
                  {post.categories[0]?.name}
                </Link>
              )}
            </div>
            <div sx={{ marginBottom: '24px' }}>
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
            <div sx={{ display: 'flex', gap: '16px' }}>
              <div
                sx={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  bg: 'gray',
                }}
              ></div>
              <div sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  sx={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: '#3B82F6',
                    '&:hover': {
                      color: '#ea364a',
                    },
                  }}
                >
                  <Link to={`/author/${post.users[0]?.id}`}>{post.users[0]?.display_name}</Link>
                </div>
                <div sx={{ fontSize: '.875rem' }}>
                  {parseDate(post.published_date)} . <span> 3 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'sidebar' && (
        <div sx={{ display: 'flex', gap: '1.5rem', py: '0.75rem', px: '1.5rem' }}>
          <div style={{ flex: '0 0 240px' }}>
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
                  to={post.slug}
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
                      src={post.medium.url.proxy}
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
          <div sx={{ flex: '1 1 auto' }}>
            <div
              sx={{
                display: 'inline-flex',
                padding: '0 20px',
                height: '32px',
                lineHeight: '32px',
                fontSize: '.875rem',
                fontWeight: 500,
                position: 'relative',
                borderRadius: '16px',
                background: 'gray',
                textAlign: 'center',
                marginBottom: '16px',
                color: 'white',
                '&:hover': {
                  color: '#000',
                  bg: '#feb2b2',
                },
              }}
            >
              <Link to={`/category/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
            </div>
            <div>
              <Link to={post.slug}>
                <h2 title={post.title} sx={{ fontSize: '1.5rem' }}>
                  {post.title}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;

//post.categories[0].name
