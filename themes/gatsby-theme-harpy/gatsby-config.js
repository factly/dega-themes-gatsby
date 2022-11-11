const editorjsHTML = require('editorjs-html');

module.exports = ({ spaceId, accessToken, apiUrl, siteUrl = 'https://localhost:9002' }) => ({
  siteMetadata: {
    title: 'harpy',
    siteUrl,
    description: 'Gatsby Site built using DegaCMS',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@factly/gatsby-theme-dega-core',
      options: {
        spaceId,
        accessToken,
        apiUrl,
      },
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        injectColorFlashScript: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      // add options to make sitemaps for other things
    },
    'gatsby-plugin-robots-txt',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     include_favicon: false,
    //     icon: 'src/Icons/favicon.png',
    //     cache_busting_mode: 'none',
    //   },
    // },

    {
      resolve: 'gatsby-plugin-offline',
      precachePages: ['/about/', '/podcasts/'],
      workboxConfig: {
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `NetworkFirst`,
          },
          {
            // page-data.json files, static query results and app-data.json
            // are not content hashed
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `NetworkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `NetworkFirst`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
        ],
      },
      debug: true,
    },
  ].filter(Boolean),
});
