/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const FooterTwo = () => (
  <footer sx={{ bg: '#1e1e1e', color: '#bcbcbc' }}>
    <div
      className="footer-header"
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        maxWidth: 1200,
        mx: 'auto',
        p: 8,
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
            class="no-display appear"
            alt="Facebook Third Party Fact-Checker Badge"
          />
        </a>
      </div>
      <div>
        <h3 sx={{ fontSize: 5 }}>About Factly</h3>
        <hr />
        <p sx={{ fontSize: [2, null, 3] }}>
          FACTLY is one of the well known Data Journalism/Public Information portals in India. Each
          news story on FACTLY is backed by factual evidence/data from official sources that is
          either available in the public domain or that is collated/gathered/collected using tools
          such as the Right to Information (RTI).
        </p>
      </div>
    </div>
    <div sx={{ fontSize: 1, textAlign: 'center', bg: '#101010', color: '#8d8e92', p: 2, pt: 3 }}>
      © 2014-2021 Factly Media &amp; Research | Except for videos, content on this site is licensed
      under a{' '}
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
