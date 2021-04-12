/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
// import Footer from './Footer';

// import { useThemeUI } from 'theme-ui';
import Footer from './Footer';
import '../../static/css/tailwind.css';
import Seo from '../Seo';

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query layoutRQuery {
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
        <Seo
            title={`${space.site_title} - ${space.tag_line}`}
            // canonical={space.site_address}
            image={`${space.logo.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:40:150:40`}
            description={space.description !== 'null' ? space.description : space.site_title}
            fbAppId="587617254726291"
            fbPages="1521487944736293"
          >
            {space.fav_icon && <link rel="icon" href={`${space.fav_icon?.url?.proxy}`} />}
          </Seo>
          <Navbar logo={space.logo.url.proxy} />
          <main
            style={{ maxWidth: '1560px' }}
            sx={{
              width: 'full',
              fontSize: [
                (theme) => `${theme.fontSizes.h6}`,
                null,
                (theme) => `${theme.fontSizes.h5}`,
              ],
              color: (theme) => `${theme.colors.textPrimary}`,
              lineHeight: 'normal',
              pt: [(theme) => `${theme.space.spacing5}`, 0, 0],
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
          </main>
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
