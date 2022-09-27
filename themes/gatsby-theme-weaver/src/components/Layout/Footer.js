/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go'
import { jsx } from 'theme-ui';
import { Link } from 'gatsby'

const FooterTwo = () => (
  <footer
    sx={{
      display: 'flex',
      justifyContent: 'space-around',
      height: '136px',
      alignItems: 'center',
      background: '#143F6B',
      color: '#98A2B3',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    }}
  >
    <p>
      © 2022 Tulip - All rights reserved
    </p>
    <p>
      Data & Privacy . Contact
    </p>
    <p>Powered by <Link passHref href="/"><a sx={{
      fontWeight: 600,
      color: '#F55353'
    }}>Tulip</a></Link></p>

  </footer>
);

export default FooterTwo;
