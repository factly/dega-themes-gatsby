/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
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
  const [isOpen, setIsOpen] = useState(false);
  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <div data-header="sticky">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 header__left flex items-center">
              <Link className="header__brand nav-current" href="/">
                {' '}
                <img src={space.logo?.url?.proxy} alt="logo" />
              </Link>
              <div className="flex-1"></div>

              <button
                className={`header__menu--toggle flex-cc js-menu-toggle ${isOpen ? 'is-active' : ''
                  }`}
                tabindex="0"
                type="button"
                title="Menu"
                aria-label="Menu"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <i className="icon icon-menu icon--sm">
                  <FaBars className="icon__svg" />
                </i>{' '}
                <i className="icon icon-x icon--sm">
                  <FaTimes className="icon__svg" />
                </i>{' '}
              </button>
            </div>

            <div className="col-md-6 col-lg-8 header__center middle-xs flex-1" tabindex="0">
              <ul sx={{ justifyContent: 'end' }} className="nav" role="menu">
                <li role="menuitem">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/authors">
                    <span>Authors</span>
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/categories">
                    <span>Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="menu js-menu" data-menu-active={isOpen}>
        <ul className="nav" role="menu">
          <li role="menuitem">
            <Link to="/">
              <i className="icon icon--sm">
                <FaHome />
              </i>{' '}
              <span>Home</span>
            </Link>
          </li>
          {!mainMenu?.menu &&
            defaultMenuItems.map((item) => (
              <li role="menuitem" key={item.title}>
                <Link to={item.url}>
                  <i className="icon icon--sm">
                    <FaHome />
                  </i>{' '}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          {mainMenu?.menu.map((item) => (
            <li role="menuitem" key={item.title}>
              <Link to={item.url}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
