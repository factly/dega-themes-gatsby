/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

/**
 * TODO:
 */

function LinkTag({ text, to }) {
  return (
    <li>
      <a
        sx={{
          color: (theme) => `${theme.colors.gray[7]}`,
          fontWeight: 'semibold',
          display: 'block',
          pb: 2,
          fontSize: 1,
          '&:hover': {
            color: (theme) => `${theme.colors.gray[9]}`,
          },
        }}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </li>
  );
}

function FooterLinks() {
  return (
    <div sx={{ display: 'flex', mb: 6 }}>
      <div sx={{ pt: [6, null, 0], m: 'auto' }}>
        <span
          sx={{
            display: 'block',
            textTransform: 'uppercase',
            color: (theme) => `${theme.colors.gray[6]}`,
            fontSize: 1,
            fontWeight: 'semibold',
            mb: 2,
          }}
        >
          Useful Links
        </span>
        <ul sx={{ listStyle: 'none' }}>
          <LinkTag text="About Us" to="/about" />
          <LinkTag text="Facebook" to="https://facebook.com/factly" />
          <LinkTag text="Github" to="https://github.com/factly" />
          <LinkTag text="Free Produs" to="/about" />
        </ul>
      </div>
      <div sx={{ pt: [6, null, 0], px: [null, null, 4], m: 'auto' }}>
        <span
          sx={{
            display: 'block',
            textTransform: 'uppercase',
            color: (theme) => `${theme.colors.gray[6]}`,
            fontSize: 1,
            fontWeight: 'semibold',
            mb: 2,
          }}
        >
          Other Resources
        </span>
        <ul sx={{ listStyle: 'none' }}>
          <LinkTag text="MIT License" to="/" />
          <LinkTag text="Terms &amp; Conditions" to="/term" />
          <LinkTag text="Privacy Policy" to="/policy" />
          <LinkTag text="Contact Us" to="/about#contact" />
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
