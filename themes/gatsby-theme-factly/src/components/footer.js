import React from 'react';
import { Link } from 'gatsby';

import logo from '../static/images/logo/logo.png';
import FooterLinks from './footerLinks';

function CopyrightLink() {
  return (
    <React.Fragment>
      <hr className="my-6 border-gray-400" />
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full px-4 mx-auto text-center">
          <div className="text-sm text-gray-600 font-semibold py-1">
            Copyright © {/* */}2020{/* */} Factly Portal by{/* */}{' '}
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
            >
              Factly Media
            </a>
            .
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
function Footer({ full, className }) {
  return (
    <React.Fragment>
      {full ? (
        <footer
          id="footer"
          className={`absolute left-0 right-0 bg-gray-300 pt-8 pb-6 ${className}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 px-4">
                <div className="order-1 lg:order-2 mb-4">
                  <Link to="/">
                    <img className="h-8" src={logo} alt="factly"></img>
                  </Link>
                </div>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  FACTLY is one of the well known Data Journalism/Public
                  Information portals in India. Each news story on FACTLY is
                  backed by factual evidence/data from official sources that is
                  either available in the public domain or that is
                  collated/gathered/collected using tools such as the Right to
                  Information (RTI).
                </h5>
                <div className="mt-6 flex">
                  {[1, 2, 3].map(item => (
                    <a href="/" target="_blank" className="mr-2">
                      <svg
                        className="fill-current text-gray-400  w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                      </svg>
                    </a>
                  ))}
                </div>
                <p className="text-sm mt-6 text-gray-600 font-semibold">
                  Factly
                  <a href="/" className="text-gray-700" target="_blank">
                    {' '}
                    licensed MIT
                  </a>
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <FooterLinks />
              </div>
            </div>
            <CopyrightLink />
          </div>
        </footer>
      ) : (
        <footer
          id="footer"
          className={`relative bg-gray-300 pt-8 pb-6 ${className}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full">
                <FooterLinks />
              </div>
            </div>
            <CopyrightLink />
          </div>
        </footer>
      )}
    </React.Fragment>
  );
}

export default Footer;
