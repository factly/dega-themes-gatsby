import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'gatsby';
import img from '../static/images/i.jpg';

const LinkElement = ({ hashRoute, ...props }) =>
  hashRoute ? (
    <a href={`#${props.to}`} className={props.className}>
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
  const tag = item.categories && item.categories.length > 0 ? _.head(item.categories).name : '';
  return (
    <article
      className={`flex flex-col leading-tight border-b last:border-b-0 ${className}`}
    >
      <LinkElement
        hashRoute={hashRoute}
        to={item.__typename && `/${item.__typename.toLowerCase()}/${item.slug}`}
        className={`w-full flex ${orientation} no-underline hover:no-underline`}
      >
        {image && (
          <div
            className={`flex ${imageSize} justify-start items-start pr-4 py-2`}
          >
            {item.media && <img
              alt={item.media.alt_text}
              src={item.media.source_url}
              className="h-full w-full object-cover rounded"
            />}
          </div>
        )}
        <div className="w-full flex flex-col">
          {tags && (
            <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
              {tag}
            </p>
          )}
          <div
            id={`nav-${index}`}
            className={`w-full font-bold font-sans text-lg text-gray-800 ${postActiveIndex ===
              (item._id || index) && 'active'}`}
          >
            {item.title || item.name}
          </div>
          {excerpt && (
            <p className="text-gray-800 font-sans text-base pt-2">
              {item.excerpt}
            </p>
          )}
          {author && (
            <div className="flex mt-auto pt-2">
              {/* {orientation !== 'vertical' && (
                <div
                  className={`hidden md:flex ${imageSize} justify-start items-start pr-4`}
                  style={{ height: '0' }}
                ></div>
              )} */}
              <div
                className={`flex flex-col w-full ${orientation} justify-between items-start`}
              >
                <div className="flex flex-row flex-wrap">
                  {item.degaUsers && item.degaUsers.map((author, index, arr) => (
                    <Link
                      to={`/author/${author.slug}`}
                      className="text-gray-600 text-xs md:text-sm mr-2 normal-case"
                    >
                      {author.display_name}
                      {arr.length - index > 1 && ','}
                    </Link>
                  ))}
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{item.published_date}</p>
              </div>
            </div>
          )}
        </div>
      </LinkElement>
    </article>
  );
}

ListItems.propTypes = {
  item: PropTypes.number,
  image: PropTypes.bool
};
export default ListItems;
