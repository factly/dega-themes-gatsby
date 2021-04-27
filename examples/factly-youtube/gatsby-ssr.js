import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script
      key={1}
      async
      defer
      data-domain="videos.factly.in"
      src="https://plausible.factly.in/js/index.js"
    ></script>,
  ]);
};
