module.exports = ({ apiKey, channelId }) => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
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
  ],
});
