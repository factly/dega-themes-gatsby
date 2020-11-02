module.exports = ({ apiKey, channelId, trackingId  }) => ({
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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId,
      },
    },
  ],
});
