/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Navbar from '@components/Layout/Navbar';
import Footer from '@components/Layout/Footer';
import '@static/css/styles.css';
import Seo from '@components/Seo';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      menu: allDegaMenu {
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

  const { space, menu } = data;
  return (
    <div className="is-head-b--a_n">
      <Seo
        title={`${space?.site_title} - ${space?.tag_line}`}
        // canonical={degaSpace.site_address}
        image={`${space?.logo?.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:40:150:40`}
        description={space?.description !== 'null' ? space?.description : space?.site_title}
      >
        {space?.fav_icon && <link rel="icon" href={`${space?.fav_icon?.url?.proxy}`} />}
      </Seo>
      <Navbar data={data} />
      <main>{children}</main>
      <Footer space={space} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
