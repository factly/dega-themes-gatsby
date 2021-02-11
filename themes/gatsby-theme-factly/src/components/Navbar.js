/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { jsx } from 'theme-ui';
import addDefaultSrc from '../utils/addDefaultSrc';

export default function Navbar({ logo }) {
  return (
    <StaticQuery
      query={graphql`
        query NavsQuery {
          dega {
            formats(spaces: [8]) {
              nodes {
                id
                slug
                name
              }
            }
          }
        }
      `}
      render={(data) => (
        <React.Fragment>
          <div
            sx={{
              zIndex: '9999',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bg: 'white',
              borderBottomWidth: '1px',
              borderColor: (theme) => `${theme.colors.gray[3]}`,
              fontFamily: (theme) => `${theme.fonts.inter}`,
              // zIndex: 10,
            }}
          >
            <header
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: '1px',
                borderColor: (theme) => `${theme.colors.gray[1]}`,
                p: 2,
                fontSize: 1,
                fontWeight: 'semibold',
                color: (theme) => `${theme.colors.gray[8]}`,
              }}
            >
              <nav
                sx={{
                  display: 'flex',
                  flexGrow: '1',
                  // alignItems: 'center',
                  justifyContent: 'center',
                  px: [0, null, null, 4],
                  py: 3,
                  p: [null, 0],
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    flex: '1 1 0%',
                    order: [2, null, null, 1],
                    // alignItems: 'center',
                    justifyContent: ['flex-end', null, null, 'flex-start'],
                  }}
                >
                  {data.dega.formats.nodes.map((tab, index) => (
                    <Link
                      key={`navbar-${index}`}
                      to={`/formats/${tab.slug}`}
                      sx={{
                        display: 'flex',
                        px: [2, null, null, 4],
                        order: [3, null, null, 4],
                        alignItems: 'center',
                        textTransform: 'uppercase',
                        fontWeight: 'semibold',
                        fontSize: ['0.675rem', 1],
                        '&:focus': { outline: 'none' },
                      }}
                    >
                      {tab.name}
                    </Link>
                  ))}
                  <Link
                    to="/podcasts"
                    sx={{
                      display: 'flex',
                      px: [2, null, null, 4],
                      order: [3, null, null, 4],
                      alignItems: 'center',
                      textTransform: 'uppercase',
                      fontWeight: 'semibold',
                      fontSize: ['0.675rem', 1],
                      '&:focus': { outline: 'none' },
                    }}
                  >
                    Podcasts
                  </Link>
                </div>
                <div sx={{ order: [1, null, null, 2] }}>
                  <Link to="/">
                    <img sx={{ height: 8 }} src={logo} alt="factly" onError={addDefaultSrc}></img>
                  </Link>
                </div>
                <div
                  sx={{
                    display: ['none', null, null, 'flex'],
                    order: [null, null, null, 3],
                    flex: '1 1 0%',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link
                    to="/about"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      px: [2, null, null, 4],
                      textTransform: 'uppercase',
                      fontWeight: 'semibold',
                      '&:focus': { outline: 'none' },
                    }}
                  >
                    About Us
                  </Link>
                </div>
              </nav>
            </header>
          </div>
        </React.Fragment>
      )}
    />
  );
}
