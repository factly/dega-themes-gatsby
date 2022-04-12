/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import { useThemeUI } from 'theme-ui';

/**
 * TODO: Add other social links like pinterest, reddit, tumblr, email
 * TODO: fix uri and title when shared
 * TODO: Possibly add native share by using navigator.share
 * TODO: Button to expand shared sites list
 */

const ShareButtonGroup = ({ data, setRef }) => {
  const { theme } = useThemeUI();
  const { rawColors: colors } = theme;
  const { socialFacebook, socialTwitter, socialWhatsapp } = colors;
  const { h4 } = theme.fontSizes;

  return (
    <div
      social-icon=""
      ref={setRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['flex-start', null, 'flex-end'],
        fontSize: (theme) => `${theme.fontSizes.h6}`,
        '& a:first-of-type': { ml: 0 },
      }}
    >
      <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          m: (theme) => `${theme.space.spacing1}`,
          p: (theme) => `${theme.space.spacing3}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
      >
        <FaFacebookSquare color={socialFacebook} fontSize={h4} />
      </a>
      {/* title uri ====> href={`https://twitter.com/share?text=${title}-&url=${data.url}`} */}
      <a
        title="Tweet it"
        href={`https://twitter.com/share?url=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          m: (theme) => `${theme.space.spacing1}`,
          p: (theme) => `${theme.space.spacing3}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
      >
        <FaTwitterSquare color={socialTwitter} fontSize={h4} />
      </a>
      {/* title uri ===> href={`https://api.whatsapp.com/send?text=${title}-${data.url}`} */}
      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${data.title} - ${data.url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          m: (theme) => `${theme.space.spacing1}`,
          p: (theme) => `${theme.space.spacing3}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
      >
        <FaWhatsappSquare color={socialWhatsapp} fontSize={h4} />
      </a>
    </div>
  );
};

export default ShareButtonGroup;
