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

const ShareButtonGroup = ({
  type,
  links = { facebook: '', twitter: '', instagram: '', whatsapp: '' },
  data = { title: '', url: '' },
}) => {
  let title;
  let url;
  if (data.title) {
    title = encodeURIComponent(data.title);
  }
  if (data.url) {
    url = encodeURIComponent(data.url);
  }
  const brandColors = {
    facebook: '#3b5998',
    whatsapp: '#25d366',
    twitter: '#1da1f2',
    instagram: '#e1306c',
  };
  let iconsData = {};
  let icons = {
    facebook: <FaFacebookSquare size="1.5rem" color={brandColors.facebook} />,
    twitter: <FaTwitterSquare size="1.5rem" color={brandColors.twitter} />,
    whatsapp: <FaWhatsappSquare size="1.5rem" color={brandColors.whatsapp} />,
    instagram: <FaInstagramSquare size="1.5rem" color={brandColors.instagram} />,
  };
  if (type === 'static' && links) {
    iconsData = [
      {
        title: 'Follow on Facebook',
        link: links.facebook,
        icon: icons.facebook,
      },
      {
        title: 'Follow on Twitter',
        link: links.twitter,
        icon: icons.twitter,
      },
      {
        title: 'Text on Whatsapp',
        link: links.whatsapp,
        icon: icons.whatsapp,
      },
      {
        title: 'Follow on Instagram',
        link: links.instagram,
        icon: icons.instagram,
      },
    ];
  }
  if (type === 'dynamic' && data) {
    iconsData = [
      {
        title: 'Share on Facebook',
        link: `https://www.facebook.com/sharer.php?u=${url}`,
        icon: icons.facebook,
      },
      {
        title: 'Tweet on Twitter',
        link: `https://twitter.com/share?text=${title}-&url=${url}`,
        icon: icons.twitter,
      },
      {
        title: 'Share on Whatsapp',
        link: `https://api.whatsapp.com/send?text=${title}-${url}`,
        icon: icons.whatsapp,
      },
    ];
  }
  return (
    <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: '1 1 0%' }}>
      {iconsData.map((item, i) => (
        <a
          title={item.title}
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'block',
            mx: 2,
            my: 2,
            fontWeight: 'semibold',
            borderRadius: 'default',
            ':hover': { opacity: '0.75' },
          }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default ShareButtonGroup;
