/** @jsx jsx */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
// import ShareButtonGroup from './ShareButtonGroup';
import placeholderLogo from '../static/images/logo.png';

const DisplayNavItems = ({ navItems = [] }) => {
  return navItems.map((item) => {
    if (item.link) {
      return (
        <Link
          to={item.link}
          sx={{
            display: 'block',
            p: [2, 2, 2, 4],
            textTransform: 'uppercase',
            fontWeight: 'semibold',
            color: 'inherit',
            '&:focus': { outline: 'none' },
          }}
        >
          {item.name}
        </Link>
      );
    }
    if (item.dropDown) {
      return (
        <div
          className="dropdown"
          sx={{
            position: 'relative',
            cursor: 'pointer',
            p: [2, 2, 2, 4],
            textTransform: 'uppercase',
            fontWeight: 'semibold',
            color: 'inherit',
            '&:hover ul': { display: 'block' },
          }}
        >
          {item.name}
          <ul
            className="dropdown-content"
            sx={{
              display: 'none',
              position: 'absolute',
              top: '2.5rem',
              right: 0,
              padding: '0.75rem 1rem',
              zIndex: 1,
              listStyleType: 'none',
              bg: '#f9f9f9',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            }}
          >
            {item.dropDown.map((item, i) => (
              <li key={i} sx={{ textAlign: 'center' }}>
                <a
                  sx={{ padding: '1rem', display: 'inline-block', color: 'inherit' }}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  });
};

const Layout = ({ children, baseUrl, logo }) => {
  const url = baseUrl === '' ? '/' : baseUrl;
  // if (baseUrl === '') {
  //   url = '/';
  // } else {
  //   url = baseUrl;
  // }
  const imgSrc = logo ? `/${logo}` : placeholderLogo;
  const data = useStaticQuery(graphql`
    query {
      navData {
        internal {
          content
        }
      }
      footer {
        internal {
          content
        }
      }
    }
  `);
  const navData = JSON.parse(data.navData.internal.content);
  const footer = data.footer.internal.content;
  const addDefaultSrc = (e) => (e.target.src = placeholderLogo);
  const { leftNavItems, rightNavItems } = navData;
  return (
    <>
      <div
        sx={{
          zIndex: '9999',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: 'white',
          borderBottomWidth: '1px',
          borderColor: (theme) => `${theme.colors.gray[3]}`,
        }}
      >
        <header
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: '1px',
            borderColor: (theme) => `${theme.colors.gray[1]}`,
            fontSize: 1,
            fontWeight: 'semibold',
            color: (theme) => `${theme.colors.gray[8]}`,
          }}
        >
          <nav
            sx={{
              display: 'flex',
              flexGrow: '1',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [0, 0, 0, 4],
              height: ['55px', '55px', '55px', '70px'],
              whiteSpace: 'nowrap',
            }}
          >
            <div
              sx={{
                display: 'flex',
                flex: '1 1 0%',
                order: [2, 2, 2, 1],
                alignItems: 'center',
                justifyContent: ['flex-end', 'flex-end', 'flex-end', 'justify-start'],
              }}
            >
              <DisplayNavItems navItems={leftNavItems} />
            </div>
            <div sx={{ order: [1, 1, 1, 2], p: 2 }}>
              <Link to={url} sx={{ display: 'inline-block' }}>
                <img
                  sx={{ height: [8, 8, 8, 12] }}
                  src={imgSrc}
                  alt="factly"
                  onError={addDefaultSrc}
                ></img>
              </Link>
            </div>
            <div
              sx={{
                display: 'flex',
                flex: '1 1 0%',
                order: [2, 2, 2, 3],
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <DisplayNavItems navItems={rightNavItems} />
            </div>
          </nav>
        </header>
      </div>
      <main
        style={{ maxWidth: '1920px' }}
        sx={{
          width: 'full',
          fontSize: [4, 5],
          color: (theme) => `${theme.colors.gray[8]}`,
          lineHeight: 'normal',
          px: [null, null, 6],
          mt: ['55px', null, null, '70px'],
          pt: 4,
          mx: 'auto',
        }}
      >
        {children}
        <footer
          sx={{
            fontSize: 1,
            textAlign: 'right',
            my: 8,
            color: (theme) => `${theme.colors.gray[6]}`,
          }}
        >
          &copy; {footer} {new Date().getFullYear()}. All rights reserved
        </footer>
      </main>
    </>
  );
};

export default Layout;
