import React from 'react';
import { Link } from 'gatsby';

const Categories = ({ categories }) => {
  return categories.map((category, index) => (
    <div
      key={'categories' + index}
      className="flex flex-col leading-tight border-b last:border-b-0 py-2 border-gray-200"
    >
      <Link
        to={`/categories/${category.slug}`}
        className="w-full flex no-underline hover:no-underline font-bold  text-base text-gray-800"
      >
        {category.name}
      </Link>
    </div>
  ));
};

export default Categories;
