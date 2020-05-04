import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';

const Layout = props => (
  <StaticQuery
    query={graphql`
      query layoutMeta {
        site {
          siteMetadata {
            description
            title
            author
            type
            logo
            favicon
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => {
      const { siteMetadata } = site;
      const { children } = props;

      return (
        <>
          <Helmet
            title={siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: siteMetadata.description
              },
              { name: 'author', content: siteMetadata.author },
              { property: 'og:url', content: siteMetadata.siteUrl },
              {
                property: 'og:image',
                content: `${siteMetadata.siteUrl}/images/favicon.png`
              },
              { property: 'og:title', content: siteMetadata.title },
              { property: 'og:type', content: siteMetadata.type },
              {
                property: 'og:description',
                content: siteMetadata.description
              }
            ]}
            link={[{ rel: 'canonical', href: siteMetadata.siteUrl }]}
          >
            <html lang={siteMetadata.lang} />
            <body className="bg-white text-gray-900 leading-normal mx-auto tracking-wider"></body>
          </Helmet>
          <Navbar></Navbar>
          <div
            style={{ maxWidth: '1920px' }}
            className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 mx-auto"
          >
            {children}
          </div>
          {/* <Footer></Footer> */}
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
