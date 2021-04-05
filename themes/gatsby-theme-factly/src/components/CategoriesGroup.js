/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

const Categories = ({ categories }) =>
  categories &&
  categories.map((category, index) => (
    <div
      key={`categories${index}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 'tight',
        py: 2,
        borderBottomWidth: '1px',
        '&:last-child': {
          borderBottomWidth: 0,
        },
        borderColor: (theme) => `${theme.colors.gray[2]}`,
      }}
    >
      <Link
        to={`/categories/${category.slug}`}
        sx={{
          width: 'full',
          display: 'flex',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
          fontWeight: 'bold',
          fontSize: 2,
          color: (theme) => `${theme.colors.gray[8]}`,
        }}
      >
        {category.name}
      </Link>
    </div>
  ));

export default Categories;
