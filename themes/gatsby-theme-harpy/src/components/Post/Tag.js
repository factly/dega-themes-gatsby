/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Tag = ({ url, name }) => {
  return (
    <Link
      to={`/tag/${url}`}
      sx={{

        m: (theme) => `${theme.space.spacing3}`,
        bg: "#000",
        transition: '0.3s',
        '&:hover': {
          color: "white",
          bg: 'violet',
        },
        display: "inline-flex",
        px: "20px",
        height: "32px",
        lineHeight: "32px",
        fontSize: ".875rem",
        fontWeight: 500,
        position: "relative",
        borderRadius: "16px",
        color: "white"
      }}
    >
      {name}
    </Link>
  );
};

export default Tag;
