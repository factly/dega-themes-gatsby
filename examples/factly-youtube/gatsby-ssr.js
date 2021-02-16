import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script
      async
      defer
      data-domain="videos.factly.in"
      src="https://plausible.io/js/plausible.js"
    ></script>,
  ]);
};
