/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import parseEditorJsData from './../utils/parseEditorJsData';
import addDefaultSrc from '../utils/addDefaultSrc';
/**
 * TODO: Add resize observer
 * TODO: Disabling the buttons for first and last buttons
 * TODO: Fix the resize issue on canvas for basic widget
 */

const CLAIM_RATING = {
  false: 'bg-red-600',
  true: 'bg-green-600',
  misleading: 'bg-gray-600',
  unverified: 'bg-yellow-600',
  'partly-true': 'bg-citrus',
};

function FactCheckWidget({ claims }) {
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const [disable, setDisable] = useState({ left: false, right: false });

  const handleNextClick = async () => {
    sliderElement.current.scrollLeft += scrollWidth;
  };

  const handlePrevClick = () => {
    sliderElement.current.scrollLeft -= scrollWidth;
  };

  useEffect(() => {
    if (!sliderElement.current) return;

    if (sliderElement.current.childElementCount <= 1) {
      setDisable({ left: true, right: true });
      sliderElement.current.style = { 'overflow-x': 'unset' };
      return;
    }

    const maxScroll = Math.round(
      sliderElement.current.children[1].getBoundingClientRect().x -
        sliderElement.current.firstElementChild.getBoundingClientRect().x,
    );
    setScrollWidth(maxScroll);
  }, []);
  /* 
  useEffect(()=>{
    if(!sliderElement.current) return;
    if(sliderElement.current.firstElementChild.getBoundingClientRect().x-num>=0) {
      setDisable({left:true})
    }
    if(sliderElement.current.lastElementChild.getBoundingClientRect().x-num<=0) {
      setDisable({right:true})
    }
  },[sliderElement.current ]) */

  return (
    <div className="w-full lg:w-3/4 mx-auto  text-xl mb-4">
      {claims.length >= 1 && (
        <React.Fragment>
          <div className="flex flex-row justify-between pt-6 pb-2">
            <button
              type="button"
              onClick={handlePrevClick}
              href-id="claim-1"
              disabled={disable.left}
              className={`border border-gray-200 rounded text-left text-lg p-2 focus:outline-none ${
                disable.left && 'cursor-not-allowed opacity-50'
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="fill-current w-4 h-4" />
            </button>
            <h2 className="w-full py-2 heading text-center">List of claims</h2>
            <button
              type="button"
              onClick={handleNextClick}
              href-id="claim-1"
              disabled={disable.right}
              className={`border border-gray-200 rounded text-left text-lg p-2 focus:outline-none ${
                disable.right && 'cursor-not-allowed opacity-50'
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} className="fill-current w-4 h-4" />
            </button>
          </div>
          <div ref={sliderElement} className="flex overflow-x-auto scrolling-touch sliderF pb-6">
            {claims.map((claim, i) => (
              <div id={`claim-${i}`} key={i} className="inline-block flex-none w-full mr-6">
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
                    <h2 className="font-bold P-4">Claim: </h2>
                    <div className="flex parsed">
                      {parseEditorJsData(claim.description)}

                      {claim.rating.medium && (
                        <img
                          src={claim.rating.medium.url.raw}
                          alt={claim.rating.medium.alt_text}
                          onError={addDefaultSrc}
                          className="w-1/6 h-full rounded-t m-2"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-4 border-b">
                    <h2 className="font-bold">Fact: </h2>

                    <div className="parsed">{parseEditorJsData(claim.review)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default FactCheckWidget;
