const editorjsHTML = require('editorjs-html');

module.exports = ({
  spaceId,
  accessToken,
  apiUrl,
  siteUrl = 'https://localhost:9002',
  youtubeApiKey,
  channelId,
}) => ({
  siteMetadata: {
    title: 'epage',
    siteUrl,
    description: 'Gatsby Site built using DegaCMS',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-dega`,
      options: {
        spaceId,
        accessToken,
        uri: apiUrl,
      },
    },
    youtubeApiKey && channelId
      ? {
          resolve: '@factly/gatsby-theme-youtube',
          options: {
            apiKey: youtubeApiKey,
            channelId,
            basePath: '/videos',
            logo: 'logo.png',
            bannerData: [
              {
                name: 'Decode',
                icon: 'decode.png',
                playlistId: 'PLEQcsVYyf3IA_pPC8LR81vpEPkDl1czou',
              },
              {
                name: 'Decode Lite',
                icon: 'decode-lite.png',
                playlistId: 'PLEQcsVYyf3IBlzW5qPaozJZRKeS-aFpfv',
              },
              {
                name: 'Pause',
                icon: 'pause.png',
                playlistId: 'PLEQcsVYyf3IDpDYZ_Y-fuvSgYIY3TyBLv',
              },
            ],
          },
        }
      : null,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        injectColorFlashScript: false,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: `${siteUrl}/`,
        components: [
          'amp-social-share',
          'amp-pinterest',
          'amp-twitter',
          'amp-instagram',
          'amp-youtube',
          'amp-facebook',
          'amp-iframe',
        ],
        excludedPaths: [
          '/404*',
          '/',
          '/tag/*',
          '/user/*',
          '/format/*',
          '/category/*',
          '/about',
          '/podcasts',
        ],
        pathIdentifier: '/amp/',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        relCanonicalPattern: '{{canonicalBaseUrl}}{{pathname}}',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      // add options to make sitemaps for other things
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        include_favicon: false,
        icon: 'src/Icons/favicon.png',
        cache_busting_mode: 'none',
      },
    },

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
