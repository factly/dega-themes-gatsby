/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line no-unused-vars
import _ from 'lodash';
import parseDate from '@helpers/parseDate';
import addDefaultSrc from '@helpers/addDefaultSrc';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';

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
  cardStyle = 'tulip',
  excerpt = false,
  imageSize = { width: 'full', height: 40 },
}) => (
  <>
    {cardStyle === 'tulip' && (
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // pt: (theme) => `${theme.space.spacing6}`,
          borderRadius: (theme) => `${theme.borderRadius.default}`,
          // boxShadow: (theme) => `${theme.boxShadow.default}`,
          backgroundColor: (theme) => `${theme.colors.background.default}`,
          color: (theme) => `${theme.colors.text.default}`,
          '& a:hover': {
            backgroundColor: (theme) => `${theme.colors.background.hover}`,
            color: (theme) => `${theme.colors.text.hover}`,
            textDecoration: 'underline',
          },
        }}
      >
        <div
          sx={{
            display: 'flex',
          }}
        >
          <div
            className="tulip"
            sx={{ display: 'flex', flexDirection: 'column', width: 'full', maxWidth: 'full' }}
          >
            <Link to={`/${storyData.slug}`}>
              <div sx={{ maxWidth: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}>
                <div
                  sx={{
                    paddingBottom: '56.24999999%',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  <div
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: ' 100%',
                      background: '#eff8fa',
                    }}
                  >
                    <img
                      sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
                      src={storyData.medium?.url.proxy}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div
              sx={{ borderTop: '1px solid #d9d9d9', display: 'block', py: '1rem', px: ['1rem', 0] }}
            >
              {storyData?.categories?.length > 0 && (
                <Link
                  to={`/category/${storyData.categories[0].slug}`}
                  sx={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#df1c22',
                    display: 'block',
                  }}
                >
                  {storyData.categories[0].name}
                </Link>
              )}
              <Link to={`/${storyData.slug}`} sx={{ display: 'block' }}>
                <h3 sx={{ fontSize: '1rem' }}>{storyData.title}</h3>
              </Link>
              <Link
                to={`/author/${storyData?.users[0]?.slug}`}
                sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
              >
                {storyData?.users[0]?.display_name}
              </Link>
              <p sx={{ fontSize: '0.675rem' }}>{parseDate(storyData.published_date)}</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default StoryCard;
