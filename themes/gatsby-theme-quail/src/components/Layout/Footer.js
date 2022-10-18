/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const FooterTwo = () => (

  <footer>
    <div sx={{
      bg: '#143F6B',
      py: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <div sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <p sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          color: '#FFFFFF'

        }}>Sign up for our newsletter</p>
        <p sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#FFE5E5'
        }}>Be the first to know about releases and industry news and insights.</p>
      </div>
      <div sx={{
        gap: '12px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div sx={{
          display: 'flex',
          gap: '12px'
        }}>
          <input sx={{
            padding: '8px',
            pr: '32px',
            borderRadius: '12px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#667085'
          }}
            type="text"
            placeholder='Enter your email'
          />

          <button sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            bg: '#F55353',
            borderRadius: '12px',
            padding: '8px',
            px: '12px'
          }}>
            Subscribe
          </button>
        </div>
        <div>
          <p sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFE5E5',
          }}>We care about your data in our privacy policy</p>
        </div>
      </div>
    </div>
    <div sx={{
      display: 'flex',
      justifyContent: 'space-around',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#545454',
      mt: '2.5rem'
    }}>
      <p>The Journal © 2022</p>
      <div sx={{
        display: 'flex',
        gap: '16px'
      }}>
        <p>Data & privacy</p>
        <p>. Contact</p>
        <p>Contribute →</p>
      </div>
      <div sx={{
        display: 'flex',
        gap: '16px'
      }}>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </div>
  </footer>
);

export default FooterTwo;
