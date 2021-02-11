/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import parseDate from '../utils/parseDate';

const StoryLinks = ({ post, postActiveIndex, categories = true, index }) => {
  return (
    <article
      sx={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 'tight',
        borderBottomWidth: '1px',
        '&:last-child': { borderBottomWidth: '1px' },
        py: 2,
        px: 6,
        cursor: 'pointer',
        borderColor: (theme) => `${theme.colors.gray[2]}`,
      }}
    >
      <Link
        to={`/${post.slug}`}
        className="horizontal"
        sx={{
          width: 'full',
          display: 'flex',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        <div sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
          {/* {post.categories && (
            <p
              sx={{
                width: 'full',
                color: (theme) => `${theme.colors.gray[6]}`,
                fontSize: [0, null, 1],
                pb: 1,
                my: 1,
              }}
            >
              {post.categories.map((category, i, arr) => {
                return category.name + (arr.length - i > 1 ? ', ' : '');
              })}
            </p>
          )} */}
          <div
            id={`nav-${index}`}
            className={`${postActiveIndex === post.slug ? 'active' : ''}`}
            sx={{
              width: 'full',
              fontWeight: 'bold',
              fontSize: 3,
              color: (theme) => `${theme.colors.gray[8]}`,
            }}
          >
            {post.title}
          </div>
          <div>
            <span sx={{ fontSize: 1 }}>{parseDate(post.created_at)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default StoryLinks;
