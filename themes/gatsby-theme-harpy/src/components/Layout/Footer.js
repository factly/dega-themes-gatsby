/** @jsx jsx */

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = ({ space }) => (
  <footer
    sx={{
      width: '100%',
      padding: '2rem',
      bg: '#eff8fa',
      p: { textAlign: 'center' }
    }}
  >
    <h2 sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', mb: '1rem' }}>
      {' '}
      <Link
        to="/"
        sx={{
          display: 'flex',
          mx: 'auto',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '2.75rem',
          lineHeight: 1,
          fontWeight: 'bold',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {space.name}
      </Link>
    </h2>
    <p>Harpy is a modern classic blog theme. Use this theme for company blog, magazine, niche or personal blog</p>
    <div sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mt: '32px' }}>
      <Link to='https://twitter.com'><AiOutlineTwitter /></Link>
      <Link to='https://www.facebook.com'><TiSocialFacebook /></Link>
      <Link to='https://www.instagram.com'><AiOutlineInstagram /></Link>
      <Link to=''><AiFillGithub /></Link>    </div>
    <p sx={{ fontSize: '0.875rem', mt: '32px' }}>
      © {new Date().getFullYear()} Harpy Theme - Created and maintained by Factly Media and Research
    </p>
  </footer>
);

export default Footer;
