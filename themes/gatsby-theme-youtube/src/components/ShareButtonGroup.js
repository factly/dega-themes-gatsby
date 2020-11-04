/** @jsx jsx */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { jsx } from 'theme-ui';

/**
 * TODO: Add other social links like pinterest, reddit, tumblr, email
 * TODO:
 * TODO: Possibly add native share by using navigator.share
 */

const ShareButtonGroup = () => {
  const brandColors = {
    facebook: '#3b5998',
    whatsapp: '#25d366',
    twitter: '#1da1f2',
    instagram: '#e1306c',
  };
  return (
    <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: '1 1 0%' }}>
      <a
        title="Follow on facebook"
        href="https://www.facebook.com/factlyindia"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', mx: 2, my: 2, fontWeight: 'semibold', borderRadius: 'default' }}
      >
        <FaFacebookSquare size="1.5rem" color={brandColors.facebook} />
        {/* <FontAwesomeIcon  size="lg" icon={faFacebookSquare}  /> */}
      </a>
      <a
        title="Follow on Twitter"
        href="https://twitter.com/factlyindia"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', mx: 2, my: 2, fontWeight: 'semibold', borderRadius: 'default' }}
      >
        <FaTwitterSquare size="1.5rem" color={brandColors.twitter} />
        {/* <FontAwesomeIcon size="lg" icon={faTwitterSquare} /> */}
      </a>
      <a
        title="Text on Whatsapp"
        href={`https://wa.me/+919247052470`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', mx: 2, my: 2, fontWeight: 'semibold', borderRadius: 'default' }}
      >
        <FaWhatsappSquare size="1.5rem" color={brandColors.whatsapp} />
        {/* <FontAwesomeIconsize="lg" icon={faWhatsappSquare} /> */}
      </a>
      <a
        title="Follow on Instagram"
        href="https://www.instagram.com/factlyindia/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', mx: 2, my: 2, fontWeight: 'semibold', borderRadius: 'default' }}
      >
        <FaInstagramSquare size="1.5rem" color={brandColors.instagram} />
        {/* <FontAwesomeIcon size="lg" icon={faInstagramSquare}  /> */}
      </a>
    </div>
  );
};

export default ShareButtonGroup;
