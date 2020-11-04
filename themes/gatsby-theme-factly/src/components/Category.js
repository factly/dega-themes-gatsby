/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import addDefaultSrc from '../utils/addDefaultSrc';

const Category = ({ category }) => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex py-4">
        <img
          alt={category.medium.alt_text}
          src={category.medium.url.raw}
          className="h-20 lg:h-40 object-cover rounded"
          onError={addDefaultSrc}
        />
        <div className="px-4">
          <h2 className="font-bold">{category.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
