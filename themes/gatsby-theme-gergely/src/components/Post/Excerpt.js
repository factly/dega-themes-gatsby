/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
// import addDefaultSrc from '../utils/addDefaultSrc';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '../../utils/generateFluidObject';

/**
 * TODO: Remove Image element if it doesn't load
 * TODO: Add Maxwidth in theme ui
 */

const Excerpt = ({ excerpt, image }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      flexWrap: 'wrap',
      my: (theme) => `${theme.space.layout2}`,
      bg: (theme) => `${theme.colors.bgPrimary}`,
    }}
  >
    {image && (
      <div sx={{ flex: '1 1 0%', width: 'full' }}>
        {/* <img
          src={image.url.proxy}
          alt={image.alt_text}
          sx={{
            width: 'full',
            height: 'full',
            objectFit: 'cover',
          }}
          // onError={addDefaultSrc}
        /> */}

        <Img fluid={generateFluidObject({ url: image.url.proxy, dimensions: image.dimensions })} />
      </div>
    )}
    {excerpt && (
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 0%',
          p: (theme) => `${theme.space.spacing5}`,
        }}
      >
        <div
          sx={{
            width: 'full',
            fontWeight: 'bold',
            fontSize: (theme) => `${theme.fontSizes.h5}`,
            lineHeight: 'tight',
            color: (theme) => `${theme.colors.textDark}`,
          }}
        >
          Excerpt
        </div>
        <p
          sx={{
            color: (theme) => `${theme.colors.textPrimary}`,
            fontSize: (theme) => `${theme.fontSizes.h7}`,
            pt: (theme) => `${theme.space.spacing3}`,
          }}
        >
          {excerpt}
        </p>
      </div>
    )}
  </div>
);

export default Excerpt;
