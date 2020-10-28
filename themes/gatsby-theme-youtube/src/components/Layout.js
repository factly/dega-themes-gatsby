/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'gatsby';
import ShareButtonGroup from './ShareButtonGroup';
import placeholderLogo from '../static/images/logo.png';
import '../styles/tailwind.css';

const Layout = ({ children, baseUrl, logo }) => {
  let url;
  if (baseUrl === '') {
    url = '/';
  } else {
    url = baseUrl;
  }

  let data;
  if (window !== 'undefined') {
    data = {
      url: window.location.href,
      title: window.document.title,
    };
  }
  const imgSrc = logo ? `/${logo}` : placeholderLogo;
  const addDefaultSrc = (e) => (e.target.src = placeholderLogo);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-grow flex-shrink-0 text-black">
          <Link to={url} className="font-semibold text-xl tracking-tight">
            <img src={imgSrc} alt="logo" className="h-10" onError={addDefaultSrc} />
          </Link>
        </div>
        <div className="block lg:flex lg:items-center lg:w-auto">
          <ShareButtonGroup data={data} />
        </div>
      </nav>
      <main
        style={{ maxWidth: '1920px' }}
        className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 mx-auto"
      >
        {children}
        <footer className="text-sm text-right my-8">&copy; Factly 2020. All rights reserved</footer>
      </main>
    </>
  );
};

export default Layout;
