/** @jsx jsx */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';

// import styled from '@emotion/styled'
import { jsx } from 'theme-ui';
import ShareButtonGroup from './ShareButtonGroup';
import placeholderLogo from '../static/images/logo.png';

const Layout = ({ children, baseUrl, logo }) => {
  let url;
  if (baseUrl === '') {
    url = '/';
  } else {
    url = baseUrl;
  }
  const imgSrc = logo ? `/${logo}` : placeholderLogo;
  const addDefaultSrc = (e) => (e.target.src = placeholderLogo);
  return (
    <>
      <nav
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          background: 'white',
          padding: 6,
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            flex: '1 0 auto',
          }}
        >
          <Link to={url} sx={{ fontWeight: 'semibold', fontSize: 4, letterSpacing: 'tight' }}>
            <img src={imgSrc} alt="logo" sx={{ height: 10 }} onError={addDefaultSrc} />
          </Link>
        </div>
        <div
          sx={{
            display: ['block', 'block', 'flex'],
            alignItems: [null, null, 'center'],
            width: [null, null, 'auto'],
          }}
        >
          <ShareButtonGroup
            type="static"
            links={{
              facebook: 'https://www.facebook.com/factlyindia',
              twitter: 'https://twitter.com/factlyindia',
              instagram: 'https://www.instagram.com/factlyindia/',
              whatsapp: 'https://wa.me/+919247052470',
            }}
          />
        </div>
      </nav>

      <main
        style={{ maxWidth: '1920px' }}
        sx={{
          width: 'full',
          fontSize: [4, 5],
          color: (theme) => `${theme.colors.gray[8]}`,
          lineHeight: 'normal',
          px: [null, null, 6],
          mt: 10,
          pt: 4,
          mx: 'auto',
        }}
      >
        {children}
        <footer
          sx={{
            fontSize: 1,
            textAlign: 'right',
            my: 8,
            color: (theme) => `${theme.colors.gray[6]}`,
          }}
        >
          &copy; Factly 2020. All rights reserved
        </footer>
      </main>
    </>
  );
};

export default Layout;
