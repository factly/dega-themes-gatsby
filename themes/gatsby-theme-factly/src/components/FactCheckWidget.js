/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react'; // eslint-disable-line no-unused-vars

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { jsx, useThemeUI } from 'theme-ui';
import parseEditorJsData from '../utils/parseEditorJsData';
import addDefaultSrc from '../utils/addDefaultSrc';
/**
 * TODO: Change PLaceholder Img to color
 * TODO: Add resize observer
 * TODO: Disabling the buttons for first and last buttons
 * TODO: Fix the resize issue on canvas for basic widget
 */

function FactCheckWidget({ claims }) {
  const themeUIContext = useThemeUI();
  const { theme } = themeUIContext;
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const [disable, setDisable] = useState({ left: false, right: false });
  const CLAIM_RATING = {
    false: `${theme.colors.red[6]}`,
    true: `${theme.colors.green[6]}`,
    misleading: `${theme.colors.gray[6]}`,
    unverified: `${theme.colors.yellow[6]}`,
    'partly-true': `${theme.colors.citrus}`,
  };
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
    <div sx={{ width: ['full', null, null, '3/4'], mx: 'auto', fontSize: 4, mb: 4 }}>
      {claims.length >= 1 && (
        <React.Fragment>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              pt: 6,
              pb: 2,
            }}
          >
            <button
              type="button"
              onClick={handlePrevClick}
              href-id="claim-1"
              disabled={disable.left}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.gray[2]}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: 3,
                p: 2,
                '&:focus': { outline: 'none' },
                cursor: disable.left ? 'not-allowed' : 'pointer',
                opacity: disable.left ? 0.5 : null,
              }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                sx={{ fill: 'currentColor', width: 4, height: 4 }}
              />
            </button>
            <h2 className="heading" sx={{ width: 'full', py: 2, textAlign: 'center' }}>
              List of claims
            </h2>
            <button
              type="button"
              onClick={handleNextClick}
              href-id="claim-1"
              disabled={disable.right}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.gray[2]}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: 3,
                p: 2,
                '&:focus': { outline: 'none' },
                cursor: disable.right ? 'not-allowed' : 'pointer',
                opacity: disable.right ? 0.5 : null,
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                sx={{ fill: 'currentColor', width: 4, height: 4 }}
              />
            </button>
          </div>
          <div
            ref={sliderElement}
            className="sliderF"
            sx={{ display: 'flex', overflowX: 'auto', pb: 6 }}
          >
            {claims.map((claim, i) => (
              <div
                id={`claim-${i}`}
                key={i}
                sx={{ display: 'inline-block', flex: 'none', width: 'full', mr: 6 }}
              >
                <div
                  sx={{
                    width: 'full',
                    display: 'flex',
                    flexDirection: 'column',
                    borderWidth: '1px',
                    boxShadow: 'lg',
                  }}
                >
                  <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div sx={{ display: 'flex', p: 4, alignItems: 'baseline' }}>
                      <h2 sx={{ fontWeight: 'bold', mr: 2 }}>Claimant: </h2>
                      {claim.claimant.name}
                    </div>
                    <div
                      sx={{
                        display: 'flex',
                        flex: '1 1 0%',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <a
                        sx={{
                          display: 'block',
                          px: 2,
                          py: 1,
                          fontWeight: 'semibold',
                          borderRadius: 'default',
                          // '&:first-child': { px: 0 },
                          '&:hover': { bg: (theme) => `${theme.colors.gray[8]}` },
                        }}
                        href="/"
                      >
                        <svg
                          sx={{
                            fill: 'currentColor',
                            stroke: 'currentColor',
                            width: 5,
                            height: 5,
                            color: (theme) => `${theme.colors.gray[4]}`,
                          }}
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
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                      color: 'white',
                      bg: CLAIM_RATING[claim.rating.slug],
                    }}
                  >
                    <h2 sx={{ fontWeight: 'bold', py: 2 }}>Claim: </h2>
                    <div className="parsed" sx={{ display: 'flex' }}>
                      {claim.title}
                      {claim.rating.medium && (
                        <img
                          src={claim.rating.medium.url.proxy}
                          alt={claim.rating.medium.alt_text}
                          onError={addDefaultSrc}
                          sx={{
                            width: '1/6',
                            height: 'full',
                            m: 2,
                            borderTopLeftRadius: 'default',
                            borderTopRightRadius: 'default',
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                      borderBottomWidth: '1px',
                    }}
                  >
                    <h2 sx={{ fontWeight: 'bold' }}>Fact: </h2>

                    <div className="parsed">{parseEditorJsData(claim.review, true)}</div>
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
