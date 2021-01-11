/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import addDefaultSrc from '../utils/addDefaultSrc';
import { jsx } from 'theme-ui';
/**
 * TODO:
 */

const Excerpt = ({ excerpt, image }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap my-6 bg-gray-200">
      {image && (
        <div className="flex-1 w-full">
          <img
            src={image.url.raw}
            alt={image.alt_text}
            className="w-full h-full rounded-t rounded-l-none md:rounded-t-none md:rounded-l object-cover"
            onError={addDefaultSrc}
            // sx={{maxWidth:'600px', mx:'auto'}}
          />
        </div>
      )}
      {excerpt && (
        <div className="flex flex-col flex-1 p-4">
          <div className="w-full font-bold text-2xl leading-tight text-gray-900">Excerpt</div>
          <p className="text-gray-800  text-lg pt-2">{excerpt}</p>
        </div>
      )}
    </div>
  );
};

export default Excerpt;
