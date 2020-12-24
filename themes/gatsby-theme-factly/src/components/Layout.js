import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
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
            <body className="bg-white text-gray-900 leading-normal mx-auto tracking-wider" />
          </Helmet>
          <Navbar logo={space.logo.url.raw}></Navbar>
          <div
            style={{ maxWidth: '1920px' }}
            className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 sm:pt-0 mx-auto"
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
