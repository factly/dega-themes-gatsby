import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AuthorMultiple from './authorMultiple';
import { SliderArrowLeft, SliderArrowRight } from './icons';

const CLAIM_RATING = {
  "false": "bg-red-600",
  "true": "bg-green-600",
  "misleading": "bg-gray-600",
  "unverified": "bg-yellow-600",
  "partly-true": "bg-citrus"
}
function Post({ observer, post }) {
  const headerSocialIcon = useRef(null);
  const postSection = useRef(null);
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const handleNextClick = () => {
    sliderElement.current.scrollLeft += scrollWidth;
  };

  const handlePrevClick = () => {
    sliderElement.current.scrollLeft -= scrollWidth;
  };

  useEffect(() => {
    if(!sliderElement.current) return;
    if (sliderElement.current.childElementCount <= 1) {
      sliderElement.current.style = { 'overflow-x': 'unset' };
      return false;
    }
    const maxScroll = Math.round(
      sliderElement.current.children[1].getBoundingClientRect().x -
        sliderElement.current.firstElementChild.getBoundingClientRect().x
    );
    setScrollWidth(maxScroll);
  }, []);
  useEffect(() => {
    observer.observe(headerSocialIcon.current);
    observer.observe(postSection.current);
  }, [observer]);
  return (
    <article
      post=""
      ref={postSection}
      id={post._id}
      className="flex flex-col p-6 mb-12"
    >
      <div className="bg-white rounded-t rounded-b-none overflow-hidden">
        <h1 className="font-medium text-3xl py-2">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <AuthorMultiple publishedDate={post.published_date} authors={post.degaUsers} categories={post.categories} />
          <div
            social-icon=""
            ref={headerSocialIcon}
            className="flex flex-1 items-center justify-start md:justify-end"
          >
            <a
              className="block px-2 fisrt:px-0 py-1 font-semibold rounded hover:bg-gray-800"
              href="/"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
              href="/"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
              href="/"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
              href="/"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap my-6 bg-gray-200">
        <div className="flex-1">
          <img
            src={post.media.source_url}
            alt={post.media.alt_text}
            className="w-full h-full rounded-t rounded-l-none md:rounded-t-none md:rounded-l object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="w-full font-bold text-2xl leading-tight text-gray-900">
            Excerpt
          </div>
          <p className="text-gray-800 font-sans text-lg pt-2">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto font-sans text-xl">
        {post.claims && <React.Fragment><div className="flex flex-row justify-between pt-6 pb-2">
          <button
            type="button"
            onClick={handlePrevClick}
            href-id="claim-1"
            className="border border-gray-200 rounded text-left text-lg p-2 focus:outline-none"
          >
            <SliderArrowLeft className="fill-current w-4 h-4"></SliderArrowLeft>
          </button>
          <h2 className="w-full py-2 heading text-center">List of claims</h2>
          <button
            type="button"
            onClick={handleNextClick}
            href-id="claim-1"
            className="border border-gray-200 rounded text-left text-lg p-2 focus:outline-none"
          >
            <SliderArrowRight className="fill-current w-4 h-4"></SliderArrowRight>
          </button>
        </div>
        <div
          ref={sliderElement}
          className="flex overflow-x-auto scrolling-touch slider pb-6"
        >
          {post.claims.map((claim, i) => (
            <div
              id={`claim-${i}`}
              className="inline-block flex-none w-full mr-6"
            >
              <div className="w-full flex flex-col  border rounded shadow-lg">
                <div className="flex justify-center items-center">
                  <div className="flex p-4">
                    <h2 className="font-bold mr-2">Claimant: </h2>
                    {claim.claimant.name}
                  </div>
                  <div className="flex flex-1 items-center justify-end">
                    <a
                      className="block px-2 fisrt:px-0 py-1 font-semibold rounded hover:bg-gray-800"
                      href="/"
                    >
                      <svg
                        className="fill-current stroke-current text-gray-400 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                      >
                        <g transform="translate(-807 -2277)">
                          <ellipse
                            cx="18"
                            cy="18"
                            rx="18"
                            ry="18"
                            transform="translate(807 2277)"
                            stroke="#fff"
                          />
                          <path
                            d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0ZM16,18a3.158,3.158,0,0,1-.188,1.068l5.024,2.417a3.225,3.225,0,1,1-.789,1.64L14.7,20.552a3.162,3.162,0,1,1,0-5.1l5.349-2.572a3.165,3.165,0,1,1,.788,1.64L15.81,16.932A3.153,3.153,0,0,1,16,18Z"
                            transform="translate(806.999 2277)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div
                  className={`flex flex-col p-4 text-white ${CLAIM_RATING[claim.rating.slug]}`}
                >
                  <h2 className="font-bold P-4">Claim</h2>
                  <div className="flex">
                    <div dangerouslySetInnerHTML={{__html: claim.claim}} />
                    <img
                        alt={claim.rating.media.alt_text}
                        src={claim.rating.media.source_url}
                        className="w-1/6 h-full rounded-t m-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-4 border-b">
                  <h2 className="font-bold">Fact</h2>
                  <div dangerouslySetInnerHTML={{__html: claim.review }} />
                </div>
              </div>
            </div>
          ))}
        </div></React.Fragment>}
        <div
          className="my-6 pb-6 border-b text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content || post.summary }}
        ></div>
        <div className="flex flex-wrap pb-6 border-b">
          <div className="flex flex-wrap">
            {post.tags.map(tag => (
              <a
                href="/"
                className="text-center text-gray-800 text-sm md:text-md rounded p-2 m-2 bg-gray-300"
              >
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

Post.propTypes = {
  observer: PropTypes.shape({
    observe: () => {}
  })
};
export default Post;
