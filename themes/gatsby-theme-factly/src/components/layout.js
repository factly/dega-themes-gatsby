import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";

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
      console.log(space.logo.url)
      return (
        <>
          <Helmet
            title={`${space.name} ${space.tag_line}`}
            meta={[
              {
                name: "description",
                content: space.description,
              },
              { property: "og:url", content: space.site_address },
              {
                property: "og:image",
                content: space.logo.url,
              },
              { property: "og:title", content: space.name },
              {
                property: "og:description",
                content: space.description,
              },
            ]}
            link={[{ rel: "canonical", href: space.site_address }]}
          >
            <body className="bg-white text-gray-900 leading-normal mx-auto tracking-wider"></body>
          </Helmet>
          <Navbar logo={space.logo.url.replace(/^"(.*)"$/, '$1')}></Navbar>
          <div
            style={{ maxWidth: "1920px" }}
            className="w-full text-xl md:text-2xl text-gray-800 leading-normal lg:px-6 mt-10 pt-4 mx-auto"
          >
            {children}
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
