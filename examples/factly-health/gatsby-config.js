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
        api: 'http://dega-api.factly.org/query',
        youtube_api_key: process.env.GOOGLE_PRIVATE_KEY,
        channel_id: process.env.CHANNEL_ID,
      },
    },
  ],
};
