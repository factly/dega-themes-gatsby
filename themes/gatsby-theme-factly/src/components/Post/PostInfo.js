/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaRegClock } from 'react-icons/fa';
import parseDate from '@helpers/parseDate';

/* 
 TODO 1. Add Author image above their names
 TODO 2. Improve multiple authors and categories
 TODO 3. Check for layout spacing issues
 */

const PostInfo = ({ users, categories, date }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      // py: (theme) => `${theme.space.layout1}`,
    }}
  >
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // py: (theme) => `${theme.space.layout1}`,
        fontSize: (theme) => `${theme.fontSizes.h7}`,
      }}
    >
      <div sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline' }}>
        {users &&
          users.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link
                to={`/author/${user.slug}`}
                sx={{
                  fontWeight: 'medium',
                  color: (theme) => `${theme.colors.textLinkPrimary}`,
                  fontSize: (theme) => `${theme.fontSizes.h7}`,
                  px: (theme) => `${theme.space.spacing2}`,
                  '&:first-of-type': { pl: 0 },
                  '&:hover': {
                    color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                  },
                }}
              >
                {`${user?.first_name} ${user?.last_name}`}
              </Link>
              {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
            </React.Fragment>
          ))}

        {categories.length > 0 && (
          <>
            <span
              sx={{
                fontWeight: 'medium',
                fontSize: (theme) => `${theme.fontSizes.h7}`,
              }}
            >
              in
            </span>
            {categories.map((category, i, arr) => (
              <React.Fragment key={i}>
                <Link
                  to={`/category/${category.slug}`}
                  sx={{
                    px: (theme) => `${theme.space.spacing2}`,
                    fontWeight: 'medium',
                    color: (theme) => `${theme.colors.textLinkPrimary}`,
                    fontSize: (theme) => `${theme.fontSizes.h7}`,
                    '&:hover': {
                      color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                    },
                  }}
                >
                  {category.name}
                </Link>
                {arr.length - i > 1 && ', '}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <span
        sx={{
          color: (theme) => `${theme.colors.textSecondary}`,
          fontSize: (theme) => `${theme.fontSizes.h8}`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaRegClock sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }} />{' '}
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default PostInfo;
