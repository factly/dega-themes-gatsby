/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Navbar from '@components/Layout/Navbar';
import Footer from '@components/Layout/Footer';
import '@static/css/styles.css';
import Seo from '@components/Seo';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allDegaMenu {
        nodes {
          menu
          id
          slug
          name
        }
      }
      space: degaSpace {
        description
        name
        site_title
        tag_line
        site_address
        fav_icon {
          url
          dimensions
        }
        logo {
          url
          dimensions
        }
      }
    }
  `);

  const { space, allDegaMenu } = data;
  const { children } = props;
  return (
    <>
      <Seo
        title={`${space.site_title} - ${space.tag_line}`}
        // canonical={degaSpace.site_address}
        image={`${space?.logo?.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:40:150:40`}
        description={space.description !== 'null' ? space.description : degaSpace.site_title}
        fbAppId="587617254726291"
        fbPages="1521487944736293"
      >
        {space.fav_icon && <link rel="icon" href={`${space.fav_icon?.url?.proxy}`} />}
      </Seo>
      {data && data.allDegaMenu && <Navbar data={data} />}
      <main
        style={{ maxWidth: '1560px' }}
        sx={{
          width: 'full',
          fontSize: [(theme) => `${theme.fontSizes.h6}`, null, (theme) => `${theme.fontSizes.h5}`],
          color: (theme) => `${theme.colors.textPrimary}`,
          lineHeight: 'normal',
          pt: [(theme) => `${theme.space.spacing5}`, 0, 0],
          minHeight: 'calc(100vh - 60px)',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
