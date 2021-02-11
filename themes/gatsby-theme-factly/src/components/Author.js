/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import parseDate from '../utils/parseDate';

/* 
 TODO 1. Make images optional
 TODO 2. 
 */

const Author = ({ users, categories, date }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      py: 2,
    }}
  >
    <div sx={{ display: 'flex', flexDirection: 'column', py: 2 }}>
      <div sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline' }}>
        {users &&
          users.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link
                to={`/users/${user.slug || user.id}`}
                sx={{
                  fontWeight: 'medium',
                  color: (theme) => `${theme.colors.blue[5]}`,
                  fontSize: 3,
                  px: 1,
                  '&:first-of-type': { pl: 0 },
                }}
              >
                {`${user.first_name} ${user.last_name}`}
              </Link>
              {arr.length - i > 1 && ','}
            </React.Fragment>
          ))}
        <span sx={{ fontWeight: 'medium', fontSize: 3 }}>in</span>
        {categories &&
          categories.map((category, i, arr) => (
            <React.Fragment key={i}>
              <Link
                to={`/categories/${category.slug}`}
                sx={{
                  px: 1,
                  fontWeight: 'medium',
                  color: (theme) => `${theme.colors.blue[5]}`,
                  fontSize: 3,
                }}
              >
                {category.name}
              </Link>
              {arr.length - i > 1 && ', '}
            </React.Fragment>
          ))}
      </div>
      <span sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: 3 }}>
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default Author;
