/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { TbBrandFacebook } from 'react-icons/tb';
import { TbBrandTwitter } from 'react-icons/tb'


const Footer = () => (
  <footer sx={{
    display: 'flex',
    flexDirection: 'column',
    mt: '2rem',
    padding: '24px',
    alignItems: 'center',
    background: '#5F3CC0',
    color: '#D6BBFB',
  }}>
    <h2 sx={{ mt: '2rem', fontSize: '32px' }}>Kite</h2>
    <p sx={{ mt: '1rem' }}>Kite is a modern, clean and dashboard style Premium theme. Build a community around your content or create your own platform.</p>
    <div sx={{ display: 'flex', fontSize: '24px', gap: '1rem', mt: '1rem', a: { bg: '#f5f5f5', borderRadius: '50%', padding: '8px' } }}>
      <Link to=''><TbBrandFacebook /></Link>
      <Link to=''><TbBrandTwitter /></Link>
    </div>
    <p sx={{ fontSize: '0.875rem', mt: '1rem', mb: "2rem" }}>
      © {new Date().getFullYear()} Kite - Created and maintained by Factly Media and Research
    </p>
  </footer>
);

export default Footer;
