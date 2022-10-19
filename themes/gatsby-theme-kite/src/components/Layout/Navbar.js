/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaHome, FaBars, FaSistrix } from 'react-icons/fa';
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
  // return (
  //   <React.Fragment>
  //     <div
  //       sx={{
  //         position: 'fixed',
  //         zIndex: '9999',
  //         top: 0,
  //         left: 0,
  //         right: 0,
  //         bg: (theme) => `${theme.colors.bgLight}`,
  //         borderBottomWidth: '1px',
  //       }}
  //     >
  //       <nav
  //         sx={{
  //           position: 'sticky',
  //           display: 'flex',
  //           maxWidth: '1560px',
  //           minHeight: '60px',
  //           mx: 'auto',
  //           flexWrap: ['wrap', null, null, 'wrap'],
  //           alignItems: 'center',
  //           justifyContent: ['space-between', null, null, 'flex-start'],
  //           px: (theme) => `${theme.space.spacing5}`,
  //           py: (theme) => `${theme.space.spacing3}`,

  //           '& a:hover': {
  //             color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
  //           },
  //         }}
  //       >
  //         <Link
  //           to="/"
  //           sx={{
  //             position: ['relative', null, null, 'absolute'],
  //             transform: ['none', null, null, 'translate(-50%,-50%)'],
  //             top: [null, null, null, '50%'],
  //             left: [null, null, null, '50%'],
  //             zIndex: 999,
  //           }}
  //         >
  //           <img sx={{ height: 8, mx: [null, null, null, 'auto'] }} src={logo} alt="factly" />
  //         </Link>
  //         <button
  //           type="button"
  //           sx={{ display: [null, null, null, 'none'] }}
  //           onClick={() => handleClick()}
  //         >
  //           <FaBars />
  //         </button>
  //         <div
  //           sx={{
  //             display: showMenu ? 'flex' : 'none',
  //             zIndex: 998,
  //             position: 'relative',
  //             flexDirection: ['column', null, null, 'row'],
  //             flexGrow: 1,
  //             alignItems: 'center',
  //             flexBasis: '100%',
  //             overflow: 'hidden',
  //           }}
  //         >
  //           <ul
  //             sx={{
  //               display: 'flex',
  //               alignItems: 'center',
  //               flexDirection: ['column', null, null, 'row'],
  //               listStyle: 'none',
  //             }}
  //           >
  //             <li sx={{ display: ['none', null, null, 'block'] }}>
  //               <Link
  //                 to="/"
  //                 sx={{
  //                   px: [
  //                     (theme) => `${theme.space.spacing3}`,
  //                     null,
  //                     null,
  //                     null,
  //                     (theme) => `${theme.space.spacing5}`,
  //                   ],
  //                   display: 'block',
  //                   py: (theme) => `${theme.space.spacing3}`,
  //                 }}
  //               >
  //                 <FaHome />
  //               </Link>
  //             </li>

  //             {/* {mainMenu?.menu.map((menuItem, index) => (
  //               <li key={menuItem.title}>
  //                 <Link
  //                   key={`navbar-${index}`}
  //                   to={menuItem.url}
  //                   title={menuItem.title}
  //                   sx={{
  //                     px: [
  //                       (theme) => `${theme.space.spacing3}`,
  //                       null,
  //                       null,
  //                       null,
  //                       (theme) => `${theme.space.spacing5}`,
  //                     ],
  //                     display: 'block',
  //                     py: (theme) => `${theme.space.spacing3}`,
  //                     textTransform: 'uppercase',
  //                     fontWeight: 'semibold',
  //                     fontSize: [(theme) => `${theme.fontSizes.h8}`],
  //                     '&:focus': { outline: 'none' },
  //                   }}
  //                 >
  //                   {menuItem.name}
  //                 </Link>
  //               </li>
  //             ))} */}
  //           </ul>
  //           <ul
  //             sx={{
  //               display: 'flex',
  //               alignItems: 'center',
  //               flexDirection: ['column', null, null, 'row'],
  //               listStyle: 'none',
  //               ml: [null, null, null, 'auto'],
  //             }}
  //           ></ul>
  //         </div>
  //       </nav>
  //     </div>
  //   </React.Fragment>
  // );

  return (
    <React.Fragment>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '7rem',
          ml: '12rem',
          mr: '10rem',
          mt: '2rem',
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
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
          <p>
            <FaBars />
          </p>
        </div>
        <div
          sx={{
            border: '1px solid',
            width: '320px',
            height: '48px',
            borderRadius: '8px',
          }}
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '12px',
              paddingLeft: '12px',
            }}
          >
            <FaSistrix />
            <p>search</p>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '32px',
            height: '48px',
            width: '200px',
            alignItems: 'center',
            ml: '25rem',
          }}
        >
          <Link href="/" passHref>
            <a>
              <p
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#667085',
                }}
              >
                Sign in
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <p
                sx={{
                  border: '1px solid',
                  padding: '10px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  bg: '#7855F7',
                }}
              >
                Sign up
              </p>
            </a>
          </Link>
        </div>
        {/* <div
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
          <ActiveLink href={item.url} key={item.title} passHref activeClassName="active">
            <a
              sx={{
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
              }}
            >
              {item.name}
            </a>
          </ActiveLink>
        ))}
      </div> */}
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
