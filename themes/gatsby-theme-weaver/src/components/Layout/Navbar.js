/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <React.Fragment>
      <header
        id="de-head"
        className={`de-head outer  ${isMenuOpen ? 'de-head-open has-cover' : ''}`}
      >
        <nav className="de-head-inner inner">
          <div className="de-head-brand">
            <Link className="de-head-logo no-image" to="/">
              {!space?.logo?.url?.proxy &&
                (space?.title?.toUpperCase() || space?.name?.toUpperCase())}
            </Link>
            <div className="de-head-brand-wrapper">
              <button
                className="de-burger"
                role="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <div className="de-burger-box">
                  <div className="de-burger-inner"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="de-head-menu">
            <ul className="nav">
              <li className="nav-home">
                <Link to="/">Home</Link>
              </li>
              {!mainMenu?.menu &&
                defaultMenuItems.map((item) => (
                  <li key={item.title}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              {mainMenu?.menu.map((item) => (
                <li key={item.title}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
