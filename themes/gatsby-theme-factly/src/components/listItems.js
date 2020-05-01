import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import img from '../static/images/i.jpg';

const LinkElement = ({ hashRoute, ...props }) =>
  hashRoute ? (
    <a href={props.to} className={props.className}>
      {props.children}
    </a>
  ) : (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  );

function ListItems({
  item,
  postActiveIndex = 0,
  hashRoute = false,
  index,
  image = true,
  author = true,
  tags = false,
  excerpt = false,
  orientation = 'horizontal',
  className = 'p-6 border-gray-200',
  imageSize = 'w-full h-40'
}) {
  return (
    <div
      className={`flex flex-col leading-tight border-b last:border-b-0 ${className}`}
    >
      <LinkElement
        hashRoute={hashRoute}
        to={item.slug ? `${item.slug}` : '/post-details'}
        className={`w-full flex ${orientation} no-underline hover:no-underline`}
      >
        {image && (
          <div
            className={`flex ${imageSize} justify-start items-start pr-4 py-2`}
          >
            <img
              alt=""
              src="https://source.unsplash.com/collection/9419734/240x240"
              className="h-full w-full object-cover rounded"
            />
          </div>
        )}
        <div className="w-full flex flex-col">
          {tags && (
            <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
              Stories
            </p>
          )}
          <div
            id={`nav-${index}`}
            className={`w-full break-all font-bold font-sans text-base text-gray-800 ${postActiveIndex ===
              (item.slug || index) && 'active'}`}
          >
            {item.title}
          </div>
          {excerpt && (
            <p className="text-gray-800 font-sans text-sm pt-2">
              {item.excerpt}
            </p>
          )}
        </div>
      </LinkElement>
      {author && (
        <div className="flex mt-auto py-2">
          {orientation !== 'vertical' && (
            <div
              className={`hidden md:flex ${imageSize} justify-start items-start pr-4`}
              style={{ height: '0' }}
            ></div>
          )}
          <div
            className={`flex flex-col w-full ${orientation} justify-between items-start`}
          >
            <div className="flex flex-row flex-wrap">
              {item.author.map((value, index, arr) => (
                <a
                  href="/"
                  className="text-gray-600 text-xs md:text-sm mr-2 normal-case"
                >
                  {value}
                  {arr.length - index > 1 && ','}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Apr, 21 2020</p>
          </div>
        </div>
      )}
    </div>
  );
}

ListItems.propTypes = {
  item: PropTypes.number,
  image: PropTypes.bool
};
export default ListItems;
