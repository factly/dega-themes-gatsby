/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

const Categories = ({ categories }) =>
  categories &&
  categories.map((category, index) => (
    <div
      key={`category${index}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 'tight',
        py: (theme) => `${theme.space.spacing3}`,
        borderBottomWidth: '1px',
        '&:last-child': {
          borderBottomWidth: 0,
        },
        borderColor: (theme) => `${theme.colors.borderPrimary}`,
      }}
    >
      <Link
        to={`/category/${category.slug}`}
        sx={{
          width: 'full',
          display: 'flex',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: (theme) => `${theme.fontSizes.h7}`,
          color: (theme) => `${theme.colors.textPrimary}`,
          '&:hover': {
            textDecoration: 'none',
            color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
          },
        }}
      >
        {category.name}
      </Link>
    </div>
  ));

export default Categories;
