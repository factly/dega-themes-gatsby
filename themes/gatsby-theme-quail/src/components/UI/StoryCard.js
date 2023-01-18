/** @jsx jsx */
import React from 'react';
import parseDate from '@helpers/parseDate';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {type === 'basic' && (
        <article className="sc-card post">
          <Link className="sc-card-link" to={`/${post.slug}/`}>
            <header className="sc-card-header">
              <h2 className="sc-card-title">{post.title}</h2>
            </header>

            <div className="sc-card-excerpt">{post.excerpt}</div>

            <footer className="sc-card-meta">
              <time className="sc-card-date" dateTime={parseDate(post.published_at)}>
                {parseDate(post.published_at)}
              </time>
              {/* <span className="sc-card-duration">2 min read</span> */}
            </footer>
          </Link>
        </article>
      )}
    </>
  );
};

export default StoryCard;

//post.categories[0].name
