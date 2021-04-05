/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import { jsx } from 'theme-ui';
import FooterLinks from './FooterLinks';
import addDefaultSrc from '../utils/addDefaultSrc';
/**
 * TODO:
 */

function Footer({ className }) {
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
    <footer
      id="footer"
      className={`${className}`}
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bg: (theme) => `${theme.colors.gray[3]}`,
        pt: 8,
        pb: 6,
      }}
    >
      <div sx={{ maxWidth: '1280px', mx: 'auto', px: 4 }}>
        <div sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div sx={{ width: ['full', null, '1/2'], px: 4 }}>
            <div sx={{ order: [1, null, null, 2], mb: 4 }}>
              <a href="/">
                <img
                  sx={{ height: 8 }}
                  src={logo.url.proxy}
                  alt="factly"
                  onError={addDefaultSrc}
                ></img>
              </a>
            </div>
            <p sx={{ fontSize: 3, mt: 0, mb: 2, color: (theme) => `${theme.colors.gray[7]}` }}>
              {description}
            </p>
            <div sx={{ mt: 6, display: 'flex' }}>
              {social_media_urls &&
                Object.keys(social_media_urls).map((name) => (
                  <a
                    key={name}
                    title={name}
                    href={social_media_urls[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: 2 }}
                  >
                    {getIcon(name)}
                  </a>
                ))}
            </div>
            <p
              sx={{
                fontSize: 1,
                mt: 6,
                color: (theme) => `${theme.colors.gray[6]}`,
                fontWeight: 'semibold',
              }}
            >
              Factly
              <a href="/" sx={{ color: (theme) => `${theme.colors.gray[7]}` }} target="_blank">
                {' '}
                licensed MIT
              </a>
            </p>
          </div>
          <div sx={{ width: ['full', null, '1/2'], px: 4 }}>
            <FooterLinks />
          </div>
        </div>
        <div>
          <hr sx={{ my: 6, borderColor: (theme) => `${theme.colors.gray[4]}` }} />
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div sx={{ width: 'full', px: 4, mx: 'auto', textAlign: 'center' }}>
              <div
                sx={{
                  fontSize: 1,
                  color: (theme) => `${theme.colors.gray[6]}`,
                  fontWeight: 'semibold',
                  py: 1,
                }}
              >
                Copyright © {/* */} {new Date().getFullYear()},{/* */} Factly Portal by{/* */}{' '}
                <a
                  href="/"
                  sx={{
                    color: (theme) => `${theme.colors.gray[6]}`,
                    '&:hover': { color: (theme) => `${theme.colors.gray[9]}` },
                  }}
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
  );
}

export default Footer;
