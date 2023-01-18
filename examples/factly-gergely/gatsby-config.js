require('dotenv').config({
  path: `.env`,
});
module.exports = {
  flags: {
    LAZY_IMAGES: true,
  },
  plugins: [
    {
      resolve: '@factly/gatsby-theme-gergely',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        siteUrl: process.env.SITE_URL,
        // apiUrl: 'https://dega-api.factly.in/query',
        apiUrl: 'https://dega-api.factly.in/query',
        // youtube_api_key: process.env.GOOGLE_PRIVATE_KEY,
        // channel_id: process.env.CHANNEL_ID,
      },
    },
  ],
};
