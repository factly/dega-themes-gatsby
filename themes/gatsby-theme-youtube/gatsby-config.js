module.exports = ({ apiKey, channelId, trackingId, favicon }) => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Factly Videos',
        short_name: 'Factly Videos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: favicon, // This path is relative to the root of the site.
      },
    },
  ],
});
