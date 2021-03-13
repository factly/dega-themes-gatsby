/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';

export default function NavBar({ logo }) {
  const data = useStaticQuery(graphql`
    query NavTQuery {
      dega {
        menu {
          nodes {
            menu
            id
            slug
            name
          }
        }
      }
    }
  `);

  const menu = data.dega.menu.nodes.filter((i) => i.slug === 'main')[0];
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
      <div sx={{ position: 'fixed', zIndex: '9999', top: 0, left: 0, right: 0, bg: 'white' }}>
        <nav
          sx={{
            position: 'sticky',
            display: 'flex',
            flexWrap: ['wrap', null, null, 'wrap'],
            alignItems: 'center',
            justifyContent: ['space-between', null, null, 'flex-start'],
            px: 4,
            py: 2,
            borderBottomWidth: '1px',
          }}
        >
          <Link
            to="/"
            sx={{
              position: ['relative', null, null, 'absolute'],
              width: [null, null, null, '100%'],
              left: 0,
              textAlign: 'center',
              zIndex: 100,
            }}
          >
            <img sx={{ height: 8, mx: [null, null, null, 'auto'] }} src={logo} alt="factly" />
          </Link>
          <button
            type="button"
            sx={{ display: [null, null, null, 'none'] }}
            onClick={() => handleClick()}
          >
            <FaBars />
          </button>
          <div
            sx={{
              display: showMenu ? 'flex' : 'none',
              zIndex: 999,
              position: 'relative',
              flexDirection: ['column', null, null, 'row'],
              flexGrow: 1,
              alignItems: 'center',
              flexBasis: '100%',
              overflow: 'hidden',
            }}
          >
            <ul
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: ['column', null, null, 'row'],
                listStyle: 'none',
              }}
            >
              <li sx={{ display: ['none', null, null, 'block'] }}>
                <Link to="/" sx={{ px: [2, null, null, null, 4], display: 'block', py: 2 }}>
                  <FaHome />
                </Link>
              </li>

              {menu?.menu.map((menuItem, index) => (
                <li>
                  <Link
                    key={`navbar-${index}`}
                    to={menuItem.url}
                    titile={menuItem.title}
                    sx={{
                      px: [2, null, null, null, 4],
                      display: 'block',
                      py: 2,
                      textTransform: 'uppercase',
                      fontWeight: 'semibold',
                      fontSize: ['0.675rem', 1],
                      '&:focus': { outline: 'none' },
                    }}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: ['column', null, null, 'row'],
                listStyle: 'none',
                ml: [null, null, null, 'auto'],
              }}
            >
              <li>
                <Link
                  to="/about"
                  sx={{
                    px: [2, null, null, null, 4],
                    display: 'block',
                    py: 2,
                    textTransform: 'uppercase',
                    fontWeight: 'semibold',
                    fontSize: ['0.675rem', 1],
                    '&:focus': { outline: 'none' },
                  }}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
