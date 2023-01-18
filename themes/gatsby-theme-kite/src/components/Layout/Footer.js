/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      mt: '2rem',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      background: '#5F3CC0',
      color: '#D6BBFB',
      py: '2rem',
    }}
  >
    <p sx={{ mb: 0 }}>
      © {new Date().getFullYear()} Kite - Created and maintained by Factly Media and Research
    </p>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        fontSize: '24px',
      }}
    >
      <a
        title="Tweet it"
        href={`https://twitter.com/share?text=${''}-&url=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>

      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${''} - ${''}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <a title="Share on Github" href={''} target="_blank" rel="noopener noreferrer">
        <GoMarkGithub />
      </a>
      <a
        title="Share on Linkedin"
        href={`https://www.linkedin.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
