require('dotenv').config({
  path: `.env`,
});

module.exports = {
  flags: {
    LAZY_IMAGES: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        client: 8,
        homepage: 2,
        siteUrl: 'https://quizzical-keller-c9fd10.netlify.app',
        api: 'http://dega-api.factly.org/query',
        // youtubeApiKey: process.env.GOOGLE_PRIVATE_KEY,
        // channelId: process.env.CHANNEL_ID,
      },
    },
  ],
};
