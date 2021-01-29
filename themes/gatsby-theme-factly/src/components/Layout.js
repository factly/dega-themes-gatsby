/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
import Footer from './Footer';
import '../static/css/tailwind.css';
// import { useThemeUI } from 'theme-ui';

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
                content: space.logo && space.logo.url,
              },
              { property: 'og:title', content: space.name },
              {
                property: 'og:description',
                content: space.description,
              },
            ]}
          >
            <html lang="en" />
            {space.fav_icon && <link rel="icon" href={space.fav_icon.url.raw} />}
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
          <Navbar logo={space.logo.url.raw}></Navbar>
          <div
            style={{ maxWidth: '1920px' }}
            sx={{
              width: 'full',
              fontSize: [4, 4, 5],
              color: (theme) => `${theme.colors.gray[8]}`,
              lineHeight: 'normal',
              pt: [4, 0, 0],
              px: [null, null, null, 6],
              mt: 12,
              mx: 'auto',
            }}
          >
            {children}
          </div>
          <Footer />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
