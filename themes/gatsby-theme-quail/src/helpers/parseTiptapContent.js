import * as React from 'react';
import { isBrowser } from '@helpers/isBrowser';

export const parseTiptapContent = (description) => {
  if (!isBrowser || !description) return null;

  const doc = new DOMParser().parseFromString(description, 'text/html');
  if (doc.querySelector('.wp-block-embed__wrapper, .embed-container, .wp-block-embed-youtube')) {
    doc.querySelector(
      '.wp-block-embed__wrapper, .embed-container, .wp-block-embed-youtube',
    ).innerHTML = doc
      .querySelector('.wp-block-embed__wrapper, .embed-container, .wp-block-embed-youtube')
      .getAttribute('data-html');
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: doc.querySelector('body').innerHTML }}
      className="sc-content sc-canvas"
    />
  );
};

export default parseTiptapContent;
