/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#545454',
        borderTop: '1px solid #545454',
        p: '2rem',
        flexWrap: 'wrap',
        gap: '2rem',
        a: {
          cursor: 'pointer',
        },
      }}
    >
      <p>Quail © {new Date().getFullYear()}</p>
      <div
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <a>Data & privacy</a>
        <a>Contact</a>
      </div>
      <div
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <a>Terms</a>
        <a>Privacy</a>
        <a>Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
