/** @jsx jsx */
import React from 'react';
import parseDate from '@helpers/parseDate';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {(type === 'featured' || type === 'basic') && (
        <article className="card post-card post tag-welcome tag-hash-announcement js-post-card">
          <Link
            className="post-card__media"
            to={`/${post.slug}/`}
            title={post.title}
            aria-label={post.title}
          >
            <img
              className="post-card__img lazyautosizes ls-is-cached lazyloaded"
              data-src={post.medium.url.proxy}
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
            />
          </Link>

          <div className="post-card__content">
            <div className="tag-list flex flex-wrap m-b-sm">
              <Link
                className="tag-list__item m-r-sm has-accent flex flex-cc"
                to={`/category/${post.categories[0]?.slug}/`}
                aria-label={post.categories[0]?.name}
              >
                <span
                  className="tag-list__item--accent"
                  style={{ backgroundColor: '#D91C38' }}
                ></span>
                {post.categories[0]?.name}
              </Link>
            </div>

            <h2 className="post-card__title">
              <Link to={`/${post.slug}/`} aria-label={post.title}>
                {post.title}
              </Link>
            </h2>

            <div className="post-card__details flex items-center m-b">
              {/* <span className="visibility m-r">public</span> */}
              {/* <span className="m-r fw-400">–</span> */}
              {/* <span className="read-time">1 min read</span> */}
              {/* <span className="m-l m-r fw-400">–</span> */}
              {/* <i className="icon icon-message-circle icon--xs">
                    <svg className="icon__svg">
                      <use xlinkHref="/assets/icons/feather-sprite.svg?v=d13910294f#message-circle"></use>
                    </svg>
                  </i>{' '}
                  <span className="m-l-xs">4</span> */}
            </div>

            <div className="post-card__exc m-b">{post.excerpt}</div>

            <div className="flex-1"></div>

            <div className="post-card__ftr">
              <time dateTime={parseDate(post.published_at)} className="post-card__date flex-1">
                {parseDate(post.published_at)}
              </time>

              <div className="author-mini flex items-center">
                {post.users.length > 0 && (
                  <Link
                    to={`/author/${post.users[0].slug}/`}
                    className="author-mini__item has-img  nr-1"
                    title={post.users[0].display_name}
                    aria-label={post.users[0].display_name}
                  >
                    <span className="author-mini__tooltip">{post.users[0].display_name}</span>
                    <img
                      className="author-mini__img lazyautosizes ls-is-cached lazyloaded"
                      //  data-sizes="auto"
                      //  data-src="/content/images/size/w100/2020/12/user-1.png"
                      src={post.users[0]?.medium?.url.proxy}
                      alt={post.users[0].display_name}
                      sizes="420px"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
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

export default StoryCard;

//post.categories[0].name
