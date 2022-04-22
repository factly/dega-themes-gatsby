/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react'; // eslint-disable-line no-unused-vars
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import parseEditorJsData from '@utils/parseEditorJsData';
import addDefaultSrc from '@utils/addDefaultSrc';
/**
 * TODO: Change PLaceholder Img to color
 * TODO: Add resize observer
 * TODO: Add fontsizes to other elements
 * TODO: Disabling the buttons for first and last buttons
 * TODO: Fix the resize issue on canvas for basic widget
 */
/**
 * Component for showing FactCheck widget
 *
 * @component
 * @example
 * const claims = [{id:1,title:'claim 1',fact:'fact 1',review:'false'}]
 * return (<FactCheckWidget claims={claims} />)
 * @typeDef Props
 * @prop {Array<Object>} claims
 * @param {Object} props
 * @param {Array<Object>} props.claims
 * @returns
 */
const FactCheckWidget = ({ claims }) => {
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const [disable, setDisable] = useState({ left: false, right: false });
  const CLAIM_RATING = {
    false: `#e53e3e`,
    true: `#38a169`,
    misleading: `#718096`,
    unverified: `#d69e2e`,
    'partly-true': `#8eb307`,
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

  return (
    <div
      sx={{
        width: ['full', null, null, '3/4'],
        mx: 'auto',
        fontSize: (theme) => `${theme.fontSizes.body}`,
        mb: (theme) => `${theme.space.spacing5}`,
      }}
    >
      {claims.length >= 1 && (
        <React.Fragment>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              pt: (theme) => `${theme.space.spacing6}`,
              pb: (theme) => `${theme.space.spacing3}`,
            }}
          >
            <button
              type="button"
              onClick={handlePrevClick}
              href-id="claim-1"
              disabled={disable.left}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.borderPrimary}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                p: (theme) => `${theme.space.spacing3}`,
                '&:focus': { outline: 'none' },
                cursor: disable.left ? 'not-allowed' : 'pointer',
                opacity: disable.left ? 0.5 : null,
              }}
            >
              <FaChevronLeft sx={{ fill: 'currentColor', width: 4, height: 4 }} />
            </button>
            <h2
              className="heading"
              sx={{ width: 'full', py: (theme) => `${theme.space.spacing3}`, textAlign: 'center' }}
            >
              List of claims
            </h2>
            <button
              type="button"
              onClick={handleNextClick}
              href-id="claim-1"
              disabled={disable.right}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.borderPrimary}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                p: (theme) => `${theme.space.spacing3}`,
                '&:focus': { outline: 'none' },
                cursor: disable.right ? 'not-allowed' : 'pointer',
                opacity: disable.right ? 0.5 : null,
              }}
            >
              <FaChevronRight sx={{ fill: 'currentColor', width: 4, height: 4 }} />
            </button>
          </div>
          <div
            ref={sliderElement}
            className="sliderF"
            sx={{ display: 'flex', overflowX: 'auto', pb: (theme) => `${theme.space.spacing6}` }}
          >
            {claims.map((claim, i) => (
              <div
                id={`claim-${i}`}
                key={i}
                sx={{
                  display: 'inline-block',
                  flex: 'none',
                  width: 'full',
                  scrollSnapAlign: 'start',
                }}
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
                  <div
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div
                      sx={{
                        display: 'flex',
                        p: (theme) => `${theme.space.spacing5}`,
                        alignItems: 'baseline',
                      }}
                    >
                      <h2 sx={{ fontWeight: 'bold', mr: (theme) => `${theme.space.spacing3}` }}>
                        Claimant:{' '}
                      </h2>
                      {claim.claimant.name}
                    </div>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: (theme) => `${theme.space.spacing5}`,
                      color: (theme) => `${theme.colors.textLight}`,
                      bg: CLAIM_RATING[claim.rating.slug],
                    }}
                  >
                    <h2 sx={{ fontWeight: 'bold', py: (theme) => `${theme.space.spacing3}` }}>
                      Claim:{' '}
                    </h2>
                    <div className="parsed" sx={{ display: 'flex' }}>
                      {claim.claim}
                      {claim.rating.medium && (
                        <img
                          src={claim.rating.medium?.url.proxy}
                          alt={claim.rating.medium?.alt_text}
                          sx={{
                            width: '1/6',
                            height: 'full',
                            m: (theme) => `${theme.space.spacing3}`,
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
                      p: (theme) => `${theme.space.spacing5}`,
                      borderBottomWidth: '1px',
                    }}
                  >
                    <h2 sx={{ fontWeight: 'bold' }}>Fact: </h2>

                    <div className="parsed">
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default FactCheckWidget;
