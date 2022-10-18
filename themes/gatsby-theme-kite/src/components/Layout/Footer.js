/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go'
import { jsx } from 'theme-ui';


const FooterTwo = () => (
  <footer
    sx={{
      display: 'flex',
      width: '100%',
      mt: '2rem',
      mb: '1rem',
      textAlign: 'center',
      background: '#5F3CC0',
      color: '#D6BBFB',
      py: '2rem'
    }}
  >
    <p sx={{
      ml: '112px',
      width: '920px',
      height: "'24px",
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    }}>
      © 2022 Tulip - Created and maintained by Factly Media and Research
    </p>
    <div sx={{
      ml: '112px',
      width: '264px',
      height: '24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '24px',
      fontSize: '24px'
    }}>
      <a
        title="Tweet it"
        href={`https://twitter.com/share?text=${''}-&url=${''}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{

        }}
      >
        <FaTwitter />


      </a>
      <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{

        }}
      >
        <FaFacebook />
      </a>


      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${''} - ${''}`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
        }}
      >
        <FaWhatsapp />

      </a>

      <a
        title="Share on Github"
        href={''}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
        }}
      >
        <GoMarkGithub />

      </a>
      <a
        title="Share on Linkedin"
        href={`https://www.linkedin.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
        }}
      >
        <FaLinkedin />

      </a>
    </div>

  </footer >
);

export default FooterTwo;
