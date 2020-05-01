require('dotenv').config();
const path = require('path');

const tailwindConfig = require('./tailwind.config.js');

const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const localMetadata = require('./data/site-config');

module.exports = ({
  client = '',
  metaData = {},
  tailwindCustomConfig = {}
}) => {
  const siteMetadata = { ...localMetadata, ...metaData };
  return {
    siteMetadata,
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: siteMetadata.googleAnalyticsID,
          head: true
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.join(__dirname, `src`, `static/images`)
        }
      },
      {
        resolve: 'gatsby-source-graphql',
        options: {
          typeName: 'Dega',
          fieldName: 'siteContent',
          url: 'https://api.degacms.com/query',
          headers: {
            client
          }
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require(`tailwindcss`)({
              ...tailwindConfig,
              ...tailwindCustomConfig
            }),
            autoprefixer,
            cssnano
          ]
        }
      },
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true,
          develop: true,
          tailwind: true,
          content: [
            path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
            path.join(
              process.cwd(),
              '../../node_modules/@factly/gatsby-theme-factly/src/**/!(*.d).{ts,js,jsx,tsx}'
            )
          ]
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteMetadata.name,
          short_name: siteMetadata.shortName,
          start_url: siteMetadata.siteUrl,
          background_color: siteMetadata.backgroundColor,
          theme_color: siteMetadata.themeColor,
          display: 'minimal-ui',
          icon: siteMetadata.favicon
        }
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-sitemap',
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: siteMetadata.siteUrl,
          sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
          policy: [{ userAgent: '*', disallow: '' }]
        }
      }
    ]
  };
};
