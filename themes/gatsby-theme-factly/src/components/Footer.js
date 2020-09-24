import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import FooterLinks from './FooterLinks';

/**
 * TODO:
 */

function Footer({ full, className }) {
  const {
    dega: { space },
  } = useStaticQuery(
    graphql`
      query {
        dega {
          space {
            name
            description
            logo {
              url
            }
            social_media_urls
          }
        }
      }
    `,
  );
  const { logo, social_media_urls, description } = space;

  const getIcon = (name) => {
    switch (name) {
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitterSquare} color="#1da1f2" size="lg" />;
      case 'facebook':
        return <FontAwesomeIcon icon={faFacebookSquare} color="#3b5998" size="lg" />;
      case 'instagram':
        return <FontAwesomeIcon icon={faInstagramSquare} color="#e1306c" size="lg" />;
      default:
        return ' ';
    }
  };
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
                  <a href="/">
                    <img
                      className="h-8"
                      src={logo.url.replace(/^"(.*)"$/, '$1')}
                      alt="factly"
                    ></img>
                  </a>
                </div>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">{description}</h5>
                <div className="mt-6 flex">
                  {social_media_urls &&
                    Object.keys(social_media_urls).map((name) => (
                      <a
                        key={name}
                        title={name}
                        href={social_media_urls[name]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2"
                      >
                        {getIcon(name)}
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
            <div>
              <hr className="my-6 border-gray-400" />
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-full px-4 mx-auto text-center">
                  <div className="text-sm text-gray-600 font-semibold py-1">
                    Copyright © {/* */}2020{/* */} Factly Portal by{/* */}{' '}
                    <a
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Factly Media
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer id="footer" className={`relative bg-gray-300 pt-8 pb-6 ${className}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full">
                <FooterLinks />
              </div>
            </div>
            <div>
              <hr className="my-6 border-gray-400" />
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-full px-4 mx-auto text-center">
                  <div className="text-sm text-gray-600 font-semibold py-1">
                    Copyright © {/* */}2020{/* */} Factly Portal by{/* */}{' '}
                    <a
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Factly Media
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </React.Fragment>
  );
}

export default Footer;
