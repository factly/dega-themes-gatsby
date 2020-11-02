/** @jsx jsx */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';
import { jsx } from 'theme-ui';
// import styled from '@emotion/styled';

/**
 * TODO: Add other social links like pinterest, reddit, tumblr, email
 * TODO:
 * TODO: Possibly add native share by using navigator.share
 */

// const ButtonGroup = styled.div`
//  display:flex;
//  align-items:center;
//  justify-content:flex-end;
//  flex:1 1 0%;
//  a {
//    display:block;
//    margin:0 0.5rem;
//  }
// `
const ShareButtonGroup = ({ data }) => {
  const title = data ? encodeURIComponent(data.title) : '';
  const url = data ? encodeURIComponent(data.url) : '';
  const brandColors = {
    facebook: '#3b5998',
    whatsapp: '#25d366',
    twitter: '#1da1f2',
  };
  const icons = [
    {
      color: brandColors.facebook,
      icon: faFacebookSquare,
      link: `https://www.facebook.com/sharer.php?u=${url}`,
      title: 'Share on Facebook',
    },
    {
      color: brandColors.twitter,
      icon: faTwitterSquare,
      link: `https://twitter.com/share?text=${title}-&url=${url}`,
      title: 'Tweet it',
    },
    {
      color: brandColors.whatsapp,
      icon: faWhatsappSquare,
      link: `https://api.whatsapp.com/send?text=${title}-${url}`,
      title: 'Share on WhatsApp',
    },
  ];
  return (
    <div
      className="flex flex-1 items-center justify-end"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: '1 1 0%' }}
    >
      {icons.map((i) => (
        <a
          key={i.color}
          title={i.title}
          href={i.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-2 first:mx-0 my-2 font-semibold rounded "
          sx={{ display: 'block', mx: 2, my: 2, fontWeight: 'semibold', borderRadius: 'default' }}
        >
          <FontAwesomeIcon color={i.color} size="lg" icon={i.icon} />
        </a>
      ))}
      {/* <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-2 first:mx-0 my-2 font-semibold rounded " sx={{display:'block',mx:'0',my:'0.5rem'}}
      >
        <FontAwesomeIcon color={brandColors.facebook} size="lg" icon={faFacebookSquare} />
      </a>
      <a
        title="Tweet it"
        href={`https://twitter.com/share?text=${title}-&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-2 first:mx-0 my-2 font-semibold rounded "
      >
        <FontAwesomeIcon color={brandColors.twitter} size="lg" icon={faTwitterSquare} />
      </a>
      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${title}-${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-2 first:mx-0 my-2 font-semibold rounded "
      >
        <FontAwesomeIcon color={brandColors.whatsapp} size="lg" icon={faWhatsappSquare} />
      </a> */}
    </div>
  );
};

export default ShareButtonGroup;
