import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex py-4">
        <img
          alt={category.medium.alt_text}
          src={category.medium.url}
          className="h-20 lg:h-40 object-cover rounded"
        />
        <div className="px-4">
          <h2 className="font-bold">{category.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;