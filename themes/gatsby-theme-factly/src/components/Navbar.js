/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import addDefaultSrc from '../utils/addDefaultSrc';
import { jsx } from 'theme-ui';
export default function Navbar({ logo }) {
  return (
    <StaticQuery
      query={graphql`
        query NavsQuery {
          dega {
            formats(spaces: 8) {
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
            className="fixed top-0 inset-x-0 bg-white border-b border-gray-300 z-10"
            sx={{ zIndex: '9999' }}
          >
            <header className="flex item-center justify-between border-b  border-gray-100 p-2 text-sm font-semibold text-gray-800">
              <nav className="flex flex-grow items-center justify-between px-0 lg:px-4 py-3 sm:p-0">
                <div className="flex flex-1 order-2 lg:order-1 items-center justify-end lg:justify-start">
                  {data.dega.formats.nodes.map((tab, index) => {
                    return (
                      <Link
                        key={'navbar-' + index}
                        to={`/formats/${tab.slug}`}
                        className="block px-2 lg:px-4 order-3 lg:order-4 uppercase font-semibold focus:outline-none"
                      >
                        {tab.name}
                      </Link>
                    );
                  })}
                  <Link
                    to="/videos"
                    className="block px-2 lg:px-4 order-3 lg:order-4 uppercase font-semibold focus:outline-none"
                  >
                    Videos
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <Link to="/">
                    <img className="h-8" src={logo} alt="factly" onError={addDefaultSrc}></img>
                  </Link>
                </div>
                <div className="hidden lg:order-3 lg:flex flex-1 items-center justify-end">
                  <Link
                    to="/about"
                    className="block px-2 lg:px-4 uppercase font-semibold focus:outline-none"
                  >
                    About Us
                  </Link>
                  <button
                    type="button"
                    className="block lg:px-4 uppercase font-semibold focus:outline-none bg-gray-300 rounded p-2"
                  >
                    Subscribe
                  </button>
                </div>
              </nav>
            </header>
          </div>
        </React.Fragment>
      )}
    />
  );
}
