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
  <script key={2} async src="https://www.googletagmanager.com/gtag/js?id=UA-181770922-1"></script>, 
    <script key={3}> 
      window.dataLayer = window.dataLayer || []; 
      function gtag(){dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'UA-181770922-1'); 
    </script>
  ])
}