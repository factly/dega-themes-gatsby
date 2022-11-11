/** @jsx jsx */
import React from 'react';
import parseDate from '@helpers/parseDate';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';
import Badge from '@components/Post/Badge';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {type === 'basic' && (
        <article className="post-card post tag-getting-started">
          <Link className="post-card-image-link" to={`/${post.slug}/`}>
            <img
              className="post-card-image"
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
              loading="lazy"
            />
          </Link>

          <div className="post-card-content">
            <Link className="post-card-content-link" to={`/${post.slug}/`}>
              <header className="post-card-header">
                {post.categories.length > 0 && (
                  <div className="post-card-tags">
                    <span className="post-card-primary-tag">{post.categories[0].name}</span>
                  </div>
                )}
                <h2 className="post-card-title">{post.title}</h2>
              </header>
              <div className="post-card-excerpt">{post.excerpt}</div>
            </Link>

            <footer className="post-card-meta">
              <time className="post-card-meta-date" dateTime={parseDate(post.published_at)}>
                {parseDate(post.published_at)}
              </time>
              {/* <span className="post-card-meta-length">1 min read</span> */}
            </footer>
          </div>
        </article>
      )}

      {/* featured post */}

      {type === 'large' && (
        <article className="post-card post tag-getting-started post-card-large">
          <Link className="post-card-image-link" to={`/${post.slug}/`}>
            <img
              className="post-card-image"
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
              loading="lazy"
            />
          </Link>

          <div className="post-card-content">
            <Link className="post-card-content-link" to={`/${post.slug}/`}>
              <header className="post-card-header">
                {post.categories.length > 0 && (
                  <div className="post-card-tags">
                    <span className="post-card-primary-tag">{post.categories[0].name}</span>
                  </div>
                )}
                <h2 className="post-card-title">{post.title}</h2>
              </header>
              <div className="post-card-excerpt">{post.excerpt}</div>
            </Link>

            <footer className="post-card-meta">
              <time className="post-card-meta-date" dateTime={parseDate(post.published_at)}>
                {parseDate(post.published_at)}
              </time>
              {/* <span className="post-card-meta-length">2 min read</span> */}
            </footer>
          </div>
        </article>
      )}

      {/* featuredSmall post */}
      {type === 'featured' && (
        <article className="post-card post tag-getting-started featured dynamic">
          <Link className="post-card-image-link" to={`/${post.slug}/`}>
            <img
              className="post-card-image"
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
              loading="lazy"
            />
          </Link>

          <div className="post-card-content">
            <Link className="post-card-content-link" to={`/${post.slug}/`}>
              <header className="post-card-header">
                {post.categories.length > 0 && (
                  <div className="post-card-tags">
                    <span className="post-card-primary-tag">{post.categories[0].name}</span>
                  </div>
                )}
                <h2 className="post-card-title">{post.title}</h2>
              </header>
              <div className="post-card-excerpt">{post.excerpt}</div>
            </Link>

            <footer className="post-card-meta">
              <time className="post-card-meta-date" dateTime={parseDate(post.published_at)}>
                {parseDate(post.published_at)}
              </time>
              {/* <span className="post-card-meta-length">3 min read</span> */}
            </footer>
          </div>
        </article>
      )}
    </>
  );
};

export default StoryCard;
