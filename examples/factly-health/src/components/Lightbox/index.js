/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { useEffect, useState } from 'react';
import ViewSDKClient from './ViewSDKClient';

const Lightbox = ({ url, fileName = '' }) => {
  const [view, setView] = useState(false);
  const loadPDF = () => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        'pdf-div',
        {
          dockPageControls: true,
          embedMode: 'LIGHT_BOX',
        },
        url,
        fileName,
      );
    });
  };
  useEffect(() => {
    url && setView(true);
  }, [url]);
  useEffect(() => {
    view && loadPDF();
    setView(false);
  }, [view]);

  return (
    <div>
      <div id="pdf-div" className="lightbox-window-div"></div>
    </div>
  );
};

export default Lightbox;
