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

const Navbar = ({ logo, menu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);

  /**
   * Updates width when resized for responsiveness of menu item
   */
  const updateWidth = () => {
    const windowWidth = isBrowser && window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    isBrowser && window.addEventListener('resize', updateWidth);
    if (width >= 1080) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => isBrowser && window.removeEventListener('resize', updateWidth);
  }, [width]);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  //

  return (
    <React.Fragment>
      <div
        sx={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'space-Between',
          ml: '3rem',
          mr: '3rem',
          paddingTop: '12px',
          //borderBottom: '1px solid'
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div>
            {/* <Link href="/" passHref>
              <a sx={{ mx: 'auto' }}>
                <img
                  src={space?.logo?.url?.proxy || `/logo.png`}
                  alt={space.site_title}
                  sx={{ maxWidth: '4rem', display: 'block', mx: 'auto' }}
                />
              </a>
            </Link> */}
            <Link to="/">
              <img sx={{ height: 8, mx: [null, null, null, 'auto'] }} src={logo} alt="factly" />
            </Link>
          </div>
          <Link href="/" passHref>
            <a
              sx={{
                display: 'flex',
                gap: '24px',
              }}
            >
              <p>Home</p>
              <p>Products</p>
              <p>Resources</p>
              <p>Pricing</p>
            </a>
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <a title="Share on Facebook" href={``} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a title="Share on Twitter" href={``} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <p
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid',
              padding: '12px',
              borderRadius: '10px',
              bg: '#F55353',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            <a href="">Subscribe</a>
          </p>
        </div>
      </div>
      <hr
        sx={{
          mt: '0.75rem',
        }}
      />
    </React.Fragment>
  );
};

export default Navbar;
