import React from 'react';
import { Link } from 'gatsby';
import logo from '../static/images/logo/logo.png';
import MenuItems from './menuItems';
import ListItems from './listItems';

const menuItems = Array(20).fill({
  title:
    'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament,Lorem ipsum dolor sit ament',
  excerpt:
    'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
  author: 'John Doe',
  time: '2 Min'
});
export default function Navbar({ fixed }) {
  return (
    <React.Fragment>
      {/* {navbarOpen && (
        <button
          type="button"
          className="absolute inset-0 w-full h-full z-20"
          onClick={() => setNavbarOpen(false)}
        ></button>
      )} */}

      <div
        className="fixed top-0 inset-x-0 bg-white border-b border-gray-300 z-10 fadeInUp"
        style={{ animationDelay: `${0.5}s` }}
      >
        <header className="flex item-center justify-between border-b  border-gray-100 p-2 text-sm font-semibold text-gray-800">
          <nav className="flex flex-grow items-center justify-between px-0 lg:px-4 py-3 sm:p-0">
            <div className="flex flex-1 order-2 lg:order-1 items-center justify-end lg:justify-start">
              <MenuItems className="order-3 lg:order-1"
                Icon={({ show }) => (
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    {show && (
                      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
                    )}
                    {!show && (
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    )}
                  </svg>
                )}
              >
                <div className="py-4">
                  <form className="w-full max-auto">
                    <div className="flex items-center border rounded border-gray-500 py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search Input"
                      />
                      <button
                        className="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="py-4 border-b border-gray-500">
                  <h5 className="text-md font-normal leading-tight text-gray-700">
                    Follow Us
                  </h5>
                </div>
                <div className="flex px-2 py-4">
                  {[1, 2, 3, 4, 5].map(() => (
                    <a
                      className="block px-2 py-1 font-semibold rounded hover:opacity-50"
                      href="/"
                    >
                      <svg
                        className="fill-current text-gray-400 p-1 w-10 h-10 border rounded bg-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                      </svg>
                    </a>
                  ))}
                </div>
                <div className="py-2 border-b border-gray-500">
                  <h5 className="text-md font-normal leading-tight text-gray-700">
                    More about factly
                  </h5>
                </div>
                <div className="flex flex-col justify-between px-2 py-4">
                  {['about', 'terms'].map(item => (
                    <Link
                      className="flex items-center justify-start px-2 py-4 font-semibold rounded hover:opacity-50"
                      to={item}
                    >
                      <svg
                        className="fill-current text-gray-800  w-20 h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                      </svg>
                      <div className="flex flex-col px-4">
                        <h4 className="text-xl font-medium uppercase">
                          {item}
                        </h4>
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </MenuItems>
              <MenuItems className="order-2" title="stories">
                {menuItems.map((item, index) => (
                  <ListItems
                    item={item}
                    index={index}
                    author={false}
                    tags
                    imageSize="w-1/4 h-20"
                  />
                ))}
              </MenuItems>
              <MenuItems className="order-1 lg:order-3" title="factcheck">
                {menuItems.map((item, index) => (
                  <ListItems
                    item={item}
                    index={index}
                    author={false}
                    tags
                    excerpt
                    imageSize="w-1/4 h-20"
                  />
                ))}
              </MenuItems>
            </div>
            <div className="order-1 lg:order-2">
              <Link to="/">
                <img className="h-8" src={logo} alt="factly"></img>
              </Link>
            </div>
            <div className="hidden lg:order-3 lg:flex flex-1 items-center justify-end">
              <Link
                to="/about"
                className="block px-2 lg:px-4 uppercase font-semibold focus:outline-none"
              >
                About Us
              </Link>
              <MenuItems align="right" title="editions">
                <div className="py-2 border-b border-gray-500">
                  <h5 className="text-md font-normal leading-tight text-gray-700 uppercase">
                    Choose your home edition
                  </h5>
                </div>
                <div className="flex flex-col justify-between px-2 py-4">
                  {['English', 'Telugu', 'Kannada'].map(item => (
                    <Link
                      className="flex items-center justify-start px-2 py-4 font-semibold rounded hover:opacity-50  border-b border-gray-200"
                      to={item}
                    >
                      <svg
                        className="fill-current text-gray-800  w-20 h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                      </svg>
                      <div className="flex flex-col px-4">
                        <h4 className="text-xl font-medium uppercase">
                          {item}
                        </h4>
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </MenuItems>
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
  );
}
