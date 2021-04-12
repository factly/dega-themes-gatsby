import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Seo from './Seo';

const LayoutAmp = (props) => (
  <StaticQuery
    query={graphql`
      query layoutsQuery {
        dega {
          space {
            description
            name
            site_title
            tag_line
            site_address
            fav_icon {
              url
            }
            logo_mobile {
              url
            }
          }
        }
      }
    `}
    render={({ dega }) => {
      const { space } = dega;
      const { children } = props;
      return (
        <>
          <Seo
            title={`${space.site_title} ${space.tag_line}`}
            image={
              space.logo?.url?.proxy &&
              `${space.logo?.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:40:150:40`
            }
            description={space.description !== 'null' ? space.description : space.site_title}
            icon={space.fav_icon.url.proxy}
          />
          <nav style={{ background: '#e63743', padding: '0 16px', height: '54px' }}>
            <div style={{ maxWidth: '702px', margin: '0 auto', textAlign: 'center' }}>
              <a style={{ textDecoration: 'none' }} href={space.site_address}>
                <amp-img
                  src={space.logo_mobile.url.proxy}
                  width="97"
                  height="54"
                  alt={space.site_title}
                  layout="fixed"
                />
              </a>
            </div>
          </nav>
          <div style={{ maxWidth: '702px', margin: '0 auto' }}>
            {children}
            <div style={{ margin: '1rem 0', textAlign: 'center' }}>
              <amp-social-share type="twitter" aria-label="Share on Twitter"></amp-social-share>{' '}
              <amp-social-share type="facebook" aria-label="Share on Facebook"></amp-social-share>{' '}
              <amp-social-share type="system" aria-label="Share"></amp-social-share>{' '}
              <amp-social-share type="email" aria-label="Share"></amp-social-share>{' '}
              <amp-social-share
                type="linkedin"
                width="60"
                height="44"
                data-param-text="Hello "
                data-param-url="https://factly.in"
                aria-label="Share on LinkedIn"
              ></amp-social-share>{' '}
              <amp-social-share
                type="whatsapp"
                data-param-text="Check out this article: TITLE - CANONICAL_URL"
              ></amp-social-share>
            </div>
          </div>
        </>
      );
    }}
  />
);

export default LayoutAmp;
