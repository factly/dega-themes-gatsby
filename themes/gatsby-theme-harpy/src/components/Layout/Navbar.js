/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaHome, FaBars, FaSearch } from 'react-icons/fa';
import isBrowser from '@helpers/isBrowser';
/**
 * @component Navbar
 * @typedef Props
 * @prop {string} logo - url for logo
 * @param {Props} props - arguments for Navbar with logo and menu properties
 * @param {string} props.logo - url for logo
 * @param {Object} props.menu - menu item
 */

const Navbar = ({ data }) => {
  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <React.Fragment>
      <header className="site-header has-theme-icon">
        <div className="header-inner flex justify-space-between">
          <div className="header-logo flex">
            <Link to="/" className="logo-img theme-light-logo">
              <img src={space.logo?.url?.proxy} alt={space.name} />
            </Link>
            <Link to="/" className="logo-img theme-dark-logo">
              <img src={space.logo?.url?.proxy} alt={space.name} />
            </Link>
          </div>

          <input id="mobile-menu-toggle" className="mobile-menu-checkbox" type="checkbox" />
          <label
            for="mobile-menu-toggle"
            className="mobile-menu-icon"
            aria-label="menu toggle button"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="sr-only">Menu toggle button</span>
          </label>

          <nav className="nav-wrap flex" role="navigation" aria-label="Main navigation">
            <ul className="nav-left no-style-list" role="menu">
              <li className="nav-item" role="menuitem">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {!mainMenu?.menu &&
                defaultMenuItems.map((item) => (
                  <li className="nav-item" role="menuitem">
                    <Link to={item.url} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              {mainMenu?.menu.map((item) => (
                <li className="nav-item" role="menuitem">
                  <Link to={item.url} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* <li className=" has-dropdown">
                <a href="#" className="nav-link more-link">
                  More{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18c-.39 0-.78-.132-1.097-.398L.617 9.03a1.713 1.713 0 112.194-2.633l9.208 7.673 9.192-7.397a1.715 1.715 0 012.15 2.671l-10.286 8.277A1.714 1.714 0 0112 18z"></path>
                  </svg>
                </a>
                <ul className="no-style-list dropdown-menu">
                  <li className="nav-item" role="menuitem">
                    <a href="/authors/">Authors</a>
                  </li>
                </ul>
              </li> */}
            </ul>

            <ul className="nav-right no-style-list" role="menu"></ul>
            <div className="icons-wrap">
              {/* <button href="javascript:;" className="nav-icon search-icon flex js-search-button">
                <FaSearch />
              </button> */}
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
