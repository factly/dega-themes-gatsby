/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

const Tag = ({ url, name }) => {
  return (
    <Link
      to={`/tags/${url}`}
      sx={{
        textAlign: 'center',
        color: (theme) => `${theme.colors.gray[8]}`,
        fontSize: [1, null, 2],
        borderRadius: 'default',
        p: 2,
        m: 2,
        bg: (theme) => `${theme.colors.gray[3]}`,
      }}
    >
      {name}
    </Link>
  );
};

export default Tag;
