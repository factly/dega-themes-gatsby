import React from 'react';

const Tag = ({ url, name }) => {
  return (
    <a
      href={url}
      className="text-center text-gray-800 text-sm md:text-md rounded p-2 m-2 bg-gray-300"
    >
      {name}
    </a>
  );
};

export default Tag;