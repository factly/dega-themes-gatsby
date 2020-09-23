import React from 'react';
import { Link } from 'gatsby';

const Tag = ({ url, name }) => {
  return (
    <Link
      to={`/tags/${url}`}
      className="text-center text-gray-800 text-sm md:text-md rounded p-2 m-2 bg-gray-300"
    >
      {name}
    </Link>
  );
};

export default Tag;
