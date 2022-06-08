/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function NavBar({ logo, data }) {
  const { menu, categories, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width >= 1024) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div>
        <div
          sx={{
            my: '0.5rem',
            mx: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link to="/" sx={{ mx: 'auto' }}>
            <img
              src={space?.logo?.url?.proxy || `/logo.png`}
              alt={space.site_title}
              sx={{ maxWidth: '10rem', display: 'block', mx: 'auto' }}
            />
          </Link>
        </div>
        <div
          sx={{
            boxShadow: 'inset 0 -15px 5px -16px #111',
            // inset 0 15px 5px -16px #111'
            display: 'flex',
            justifyContent: [null, null, null, 'center'],
            fontSize: '0.75rem',
            overflowX: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          {mainMenu?.menu.map((item) => (
            <Link to={item.url} key={item.title} sx={{
              p: '1rem 1.5rem',
              display: 'block',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              '&:not(:first-of-type)': {
                position: 'relative',
              },
              '&:not(:first-of-type)::before': {
                borderLeft: '1px solid #ea364a',
                content: `""`,
                height: '1rem',
                left: '-.5px',
                overflow: 'hidden',
                position: 'absolute',
              },
            }}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
