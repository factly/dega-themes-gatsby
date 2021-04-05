/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import addDefaultSrc from '../utils/addDefaultSrc';
/**
 * TODO:
 */

const Excerpt = ({ excerpt, image }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      flexWrap: 'wrap',
      my: 6,
      bg: (theme) => `${theme.colors.gray[2]}`,
    }}
  >
    {image && (
      <div sx={{ flex: '1 1 0%', width: 'full' }}>
        <img
          src={image.url.proxy}
          alt={image.alt_text}
          sx={{
            width: 'full',
            height: 'full',
            objectFit: 'cover',
          }}
          onError={addDefaultSrc}
          // sx={{maxWidth:'600px', mx:'auto'}}
        />
      </div>
    )}
    {excerpt && (
      <div sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', p: 4 }}>
        <div
          sx={{
            width: 'full',
            fontWeight: 'bold',
            fontSize: 5,
            lineHeight: 'tight',
            color: (theme) => `${theme.colors.gray[9]}`,
          }}
        >
          Excerpt
        </div>
        <p sx={{ color: (theme) => `${theme.colors.gray[8]}`, fontSize: 3, pt: 2 }}>{excerpt}</p>
      </div>
    )}
  </div>
);

export default Excerpt;
