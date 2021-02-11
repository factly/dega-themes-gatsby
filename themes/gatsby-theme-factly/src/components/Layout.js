/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
// import Footer from './Footer';

// import { useThemeUI } from 'theme-ui';
import FooterTwo from './FooterTwo';
import '../static/css/tailwind.css';

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
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
            logo {
              url
            }
          }
        }
      }
    `}
    render={({ dega }) => {
      const { space } = dega;
      const { children } = props;
      // const themeUIContext = useThemeUI();
      // const { theme } = themeUIContext;
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
                content:
                  space.logo &&
                  `${space.logo.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:0:150:0`,
              },
              { property: 'og:title', content: space.name },
              {
                property: 'og:description',
                content: space.description,
              },
            ]}
          >
            <html lang="en" />
            {space.fav_icon && <link rel="icon" href="icons/favicon.png" />}
            {/* <body
              style={{
                backgroundColor: theme.colors.white,
                color: theme.colors.gray[9],
                lineHeight: theme.lineHeights.normal,
                marginLeft: 'auto',
                marginRight: 'auto',
                letterSpacing: theme.letterSpacings.wider,
              }}
            /> */}
          </Helmet>
          <Navbar logo={space.logo.url.proxy}></Navbar>
          <div
            style={{ maxWidth: '1920px' }}
            sx={{
              width: 'full',
              fontSize: [4, 4, 5],
              color: (theme) => `${theme.colors.gray[8]}`,
              lineHeight: 'normal',
              pt: [4, 0, 0],
              mt: '60px',
              minHeight: 'calc(100vh - 60px)',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {children}
            {/* <Footer /> */}

            <FooterTwo />
          </div>
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
