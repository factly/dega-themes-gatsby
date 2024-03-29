module.exports = ({ apiKey, channelId, trackingId, favicon }) => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `@factly/gatsby-source-youtube`,
      options: {
        apiKey,
        channelId,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'bannerImages',
        path: `${__dirname}/src/static/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    trackingId
      ? {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [trackingId],
          },
        }
      : null,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Factly Videos',
    //     short_name: 'Factly Videos',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#fff',
    //     display: 'standalone',
    //     icon: favicon, // This path is relative to the root of the site.
    //   },
    // },
  ].filter(Boolean),
});
