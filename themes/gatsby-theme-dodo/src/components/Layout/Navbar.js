/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import { MdMargin } from 'react-icons/md';

export default function NavBar({ data }) {
  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];
  return (
    <React.Fragment>
      <header className="c-header">
        <div className="c-header__top">
          <div sx={{ display: 'flex', mx: 'auto' }}>
            <div className="c-header__top-block c-header__top-left">
              {/* <button
                className="c-header__button c-header__button--colorMode c-color-mode-btn js-mode-toggle js-mode-toggle-title"
                title="Dark"
              >
                <span className="js-mode-toggle-text u-visible-on-desktop">Dark</span>
              </button>
              <button className="c-header__button c-header__button--search" data-search="">
                <svg
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
                <span className="u-visible-on-desktop">Search</span>
              </button> */}
            </div>
            <div
              sx={{
                my: '0.5rem',
                mx: 'auto',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link href="/" passHref>
                <a sx={{ mx: 'auto' }}>
                  <img
                    src={space?.logo?.url?.proxy || `/logo.png`}
                    alt={space.site_title}
                    sx={{ maxWidth: '10rem', display: 'block', mx: 'auto' }}
                  />
                </a>
              </Link>
            </div>

            <div className="c-header__top-block c-header__top-right">
              {/* <a href="#/portal/signin" className="c-header__button u-visible-on-desktop">
                Sign In
              </a>
              <a href="#/portal/signup" className="c-btn c-btn--small">
                Subscribe
              </a> */}
            </div>
          </div>
        </div>
        <div className="c-header__bottom">
          <div className="l-grid">
            <nav className="c-nav-wrap">
              <ul className="c-nav c-nav--main u-plain-list">
                <li className="c-nav__item c-nav__item--primary">
                  <Link to="/" className="c-nav__link  c-nav__link--current ">
                    Home
                  </Link>
                </li>
                {!mainMenu?.menu &&
                  defaultMenuItems.map((item) => (
                    <li className="c-nav__item c-nav__item--primary" key={item.title}>
                      <Link
                        to={item.url}
                        key={item.title}
                        className="c-nav__link  c-nav__link--current "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                {mainMenu?.menu.map((item) => (
                  <li className="c-nav__item c-nav__item--primary" key={item.title}>
                    <Link
                      to={item.url}
                      key={item.title}
                      className="c-nav__link  c-nav__link--current "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
