import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

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
          <Helmet
            title={`${space.name} ${space.tag_line}`}
            meta={[
              {
                name: 'description',
                content: space.description,
              },
              { property: 'og:url', content: space.site_address },
              {
                property: 'og:image',
                content: space.logo_mobile.url,
              },
              { property: 'og:title', content: space.name },
              {
                property: 'og:description',
                content: space.description,
              },
            ]}
          ></Helmet>
          <nav style={{ background: '#e63743', padding: '0 16px', height: '54px' }}>
            {' '}
            <div style={{ maxWidth: '702px', margin: '0 auto', textAlign: 'center' }}>
              <a style={{ textDecoration: 'none' }} href={space.site_address}>
                <amp-img
                  src={space.logo_mobile.url.raw}
                  width="97"
                  height="54"
                  alt={space.name}
                  layout="fixed"
                />
              </a>
            </div>
          </nav>
          <div style={{ maxWidth: '702px', margin: '0 auto' }}>{children}</div>
        </>
      );
    }}
  />
);

export default LayoutAmp;
