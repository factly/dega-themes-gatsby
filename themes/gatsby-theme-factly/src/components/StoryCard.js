/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';
import parseDate from '../utils/parseDate';
import addDefaultSrc from '../utils/addDefaultSrc';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */

const StoryCard = ({
  storyData,
  cardStyle = 'basic',
  excerpt = false,
  imageSize = 'w-full h-40',
}) => {
  return (
    <>
      {cardStyle === 'basic' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}
        >
          <Link
            to={`/${storyData.slug}`}
            className={`w-full flex vertical horizontal no-underline hover:no-underline`}
          >
            <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
              {storyData.medium && (
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url.raw}
                  className="h-full w-full object-cover rounded"
                  onError={addDefaultSrc}
                />
              )}
            </div>
            <div className="w-full flex flex-col">
              <p className="text-blue-500 text-xs px-1">
                {storyData.categories.map((category, i, arr) => (
                  <span key={i}>
                    {category.name}
                    {arr.length - i > 1 && ', '}
                  </span>
                ))}
              </p>

              <div id={`nav-0`} className={`w-full font-bold  text-lg text-gray-800 active`}>
                {storyData.title}
              </div>
              {excerpt && <p className="text-gray-800  text-base pt-2">{storyData.excerpt}</p>}
              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}
                >
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.users.map((user, i, arr) => (
                        <span key={i}>
                          {user.first_name + ' ' + user.last_name} {arr.length - i > 1 && ','}
                        </span>
                      ))}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {parseDate(storyData.created_at)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </article>
      )}

      {cardStyle === 'featured' && (
        <article className="bg-white rounded-t rounded-b-none overflow-hidden px-6">
          <Link
            to={`/${storyData.slug}`}
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
                            {storyData.medium && (
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url.raw}
                  className="h-full w-full object-cover rounded"
                  onError={addDefaultSrc}
                />
              )}
            </div>

            <p className="w-full text-gray-600 text-xs md:text-sm pt-2">{storyData.subtitle}</p>
            <h2 className="w-full font-bold text-xl leading-tight text-gray-900 break-words active">
              {storyData.title}
            </h2>
            <p className="text-gray-800  text-lg pt-2 break-words">{storyData.excerpt}</p>
          </Link>
          <div className="flex-none mt-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                  {storyData.users[0].first_name + ' ' + storyData.users[0].last_name}
                </p>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">{parseDate(storyData.created_at)}</p>
            </div>
          </div>
        </article>
      )}
      {cardStyle === 'vertical' && (
        <article
          className={`flex flex-col leading-tight border-b last:border-b-0 p-6 border-gray-200 ${cardStyle}`}
        >
          <Link
            to={`/${storyData.slug}`}
            className={`w-full flex vertical no-underline hover:no-underline`}
          >
            <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}>
                            {storyData.medium && (
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url.raw}
                  className="h-full w-full object-cover rounded"
                  onError={addDefaultSrc}
                />
              )}
            </div>
            <div className="w-full flex flex-col">
              <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
                {storyData.categories[0].name}
              </p>
              <div id={`nav-0`} className={`w-full font-bold  text-lg text-gray-800 active`}>
                {storyData.title}
              </div>
              <p className="text-gray-800  text-base pt-2">{storyData.excerpt}</p>

              <div className="flex mt-auto pt-2">
                <div
                  className={`flex flex-col w-full vertical horizontal justify-between items-start`}
                >
                  <div className="flex flex-row flex-wrap">
                    <p className="text-gray-600 text-xs md:text-sm mr-2 normal-case">
                      {storyData.users[0].first_name + ' ' + storyData.users[0].last_name}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {parseDate(storyData.created_at)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </article>
      )}
      {cardStyle === 'withoutimage' && <article>card without image</article>}
      {cardStyle === 'card' && (
        <Link to={`/${storyData.slug}`} className="w-full no-underline hover:no-underline">
          <article className="flex flex-col sm:flex-row border m-4 rounded-lg">
            <div style={{ minWidth: '15rem', maxWidth: '15rem',maxHeight:'15rem' }} className="rounded-lg">
                            {storyData.medium && (
                <img
                  alt={storyData.medium.alt_text}
                  src={storyData.medium.url.raw}
                  className="h-full w-full object-cover rounded"
                  onError={addDefaultSrc}
                />
              )}
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h2 className="pb-2">{storyData.title}</h2>
              <p className="text-sm">
                {_.truncate(storyData.excerpt, {
                  length: 150,
                  separator: /,?\.* +/,
                })}
              </p>
              <p className="text-gray-500 text-sm pt-2">
                <span>{`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}</span>
                {' | '}
                <span>{parseDate(storyData.created_at)}</span>
              </p>
            </div>
          </article>
        </Link>
      )}
    </>
  );
};

export default StoryCard;
