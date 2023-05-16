/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const Footer = () => (
  // <footer>
  //   <div
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'space-around',
  //       fontFamily: 'Inter',
  //       fontStyle: 'normal',
  //       fontWeight: 400,
  //       fontSize: '12px',
  //       lineHeight: '24px',
  //       color: '#545454',
  //       borderTop: '1px solid #545454',
  //       p: '2rem',
  //       flexWrap: 'wrap',
  //       gap: '2rem',
  //       a: {
  //         cursor: 'pointer',
  //       },
  //     }}
  //   >
  //     <p>Quail © {new Date().getFullYear()}</p>
  //     <div
  //       sx={{
  //         display: 'flex',
  //         gap: '16px',
  //         flexWrap: 'wrap',
  //         fontSize: '12px',
  //         '&:hover': {
  //           color: '#000',
  //         }
  //       }}
  //     >
  //       <a>Data & privacy</a>
  //       <a>Contact</a>
  //     </div>
  //     <div
  //       sx={{
  //         display: 'flex',
  //         fontSize: '12px',
  //         gap: '16px',
  //         flexWrap: 'wrap',
  //         '&:hover': {
  //           color: '#000',
  //         }
  //       }}
  //     >
  //       <a>Terms</a>
  //       <a>Privacy</a>
  //       <a>Cookies</a>
  //     </div>
  //   </div>
  // </footer>
  <footer sx={{ mt: '4rem' }}>
    <div
      sx={{
        display: 'flex',
        color: '#999',
        background: "#fff",
        justifyContent: 'space-around',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '24px',
        borderTop: '1px solid #545454',
        px: '5rem',
        py: '7rem',
        flexWrap: 'wrap',
        gap: '2rem',
        a: {
          cursor: 'pointer',
        },
      }}
    >
      <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <p sx={{ fontSize: '20px', fontWeight: '700' }}>Quail</p>
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
              color: '#000',
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
            color: '#000',
          }
        }}>Powered by Dega</a>
      </p>
    </div>
  </footer>
);

export default Footer;
