/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Footer = () => (

  <footer sx={{ mt: '4rem' }}>
    <div
      sx={{
        display: 'flex',
        color: '#ffffffb3',
        background: "#000",
        justifyContent: 'space-around',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '24px',
        borderTop: '1px solid #545454',
        p: '5rem',
        flexWrap: 'wrap',
        gap: '2rem',
        a: {
          cursor: 'pointer',
        },
      }}
    >
      <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <p sx={{ color: '#FFF', fontSize: '20px', fontWeight: '700' }}>Weaver</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
      <div
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          fontSize: '12px',
          a: {
            '&:hover': {
              color: '#fff',
            }
          }
        }}
      >
        <a>Data & privacy . </a>
        <a>Contact . </a>
        <a>Contribute</a>
      </div>
      <p>
        <a sx={{
          '&:hover': {
            color: '#fff',
          }
        }}>Powered by Dega</a>
      </p>
    </div>
  </footer>
);

export default Footer;
