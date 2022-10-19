/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function NavBar({ logo }) {
  // const { menu, categories, space } = data;
  // const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];
  // const [showMenu, setShowMenu] = useState(false);
  // const [width, setWidth] = useState(0);

  // const updateWidth = () => {
  //   const windowWidth = window.innerWidth;
  //   setWidth(windowWidth);
  // };

  // useEffect(() => {
  //   updateWidth();
  //   window.addEventListener('resize', updateWidth);
  //   if (width >= 1024) {
  //     setShowMenu(true);
  //   } else {
  //     setShowMenu(false);
  //   }
  //   return () => window.removeEventListener('resize', updateWidth);
  // }, [width]);

  // const handleClick = () => {
  //   setShowMenu((prevState) => !prevState);
  // };

  return (
    <>
      <div
        sx={{
          maxWidth: '950px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          pt: '1rem',
        }}
      >
        <Link to="/">
          <img sx={{ height: 8, mx: [null, null, null, 'auto'] }} src={logo} alt="factly" />
        </Link>
        <hr />
        <div
          sx={{
            display: 'flex',
            gap: '48px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#667085',
          }}
        >
          <Link href="/" passHref>
            <a>
              <p>Home</p>
            </a>
          </Link>

          <Link href="/" passHref>
            <a>
              <p>About</p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <p>Collection</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
