/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const FooterTwo = () => (
  <footer
    sx={{
      bg: (theme) => `${theme.colors.bgDark}`,
      color: (theme) => `${theme.colors.textFooterDark}`,
      width: '100%',
    }}
  >
    <div
      className="footer-header"
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        maxWidth: 1200,
        mx: 'auto',
        p: (theme) => `${theme.space.spacing7}`,
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          '& a': {
            mr: '1rem',
          },
        }}
      >
        <a
          href="https://ifcncodeofprinciples.poynter.org/profile/factly-media-research"
          title="IFCN signatory"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.ifcncodeofprinciples.poynter.org/storage/badges/37D3E89D-68BC-1EAA-5AD8-B1BC397BB9B6.png"
            style={{ height: 'auto', width: '140px' }}
            alt=""
          />
        </a>
        <a
          href="https://www.facebook.com/journalismproject/programs/third-party-fact-checking?content_id=Ez92MVl4asoxvNL"
          title="Facebook Third Party Fact-Checker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://factly.in/wp-content/uploads//2021/06/Factly-Facebook-Third-Party-Fact-Checker-dark-background-logo.png"
            style={{ height: '50%', width: '25%' }}
            className="no-display appear"
            alt="Facebook Third Party Fact-Checker Badge"
          />
        </a>
      </div>
      <div>
        <h3 sx={{ fontSize: (theme) => `${theme.fontSizes.h5}` }}>About Factly</h3>
        <hr sx={{ my: (theme) => `${theme.space.spacing4}` }} />
        <p
          sx={{
            fontSize: [
              (theme) => `${theme.fontSizes.bodySmall}`,
              (theme) => `${theme.fontSizes.bodyArticleSmall}`,
            ],
          }}
        >
          FACTLY is one of the well known Data Journalism/Public Information portals in India. Each
          news story on FACTLY is backed by factual evidence/data from official sources that is
          either available in the public domain or that is collated/gathered/collected using tools
          such as the Right to Information (RTI).
        </p>
      </div>
    </div>
    <div
      sx={{
        fontSize: (theme) => `${theme.fontSizes.h8}`,
        textAlign: 'center',
        bg: '#101010',
        color: '#8d8e92',
        p: (theme) => `${theme.space.spacing3}`,
        pt: (theme) => `${theme.space.spacing4}`,
      }}
    >
      © 2014-{new Date().getFullYear()} Factly Media &amp; Research | Except for videos, content on
      this site is licensed under a{' '}
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by/4.0/"
        sx={{ display: 'inline-block' }}
      >
        Creative Commons Attribution 4.0 International License
      </a>
      .
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by/4.0/"
        sx={{ display: 'inline-block' }}
      >
        <img
          alt="Creative Commons License"
          src="https://licensebuttons.net/l/by/4.0/88x31.png"
          sx={{ display: 'inline-block' }}
          className="no-display appear"
        />
      </a>
    </div>
  </footer>
);

export default FooterTwo;
