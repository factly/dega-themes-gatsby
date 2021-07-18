require('dotenv').config({
  path: `.env`,
});
module.exports = {
  flags: {
    LAZY_IMAGES: true,
  },
  plugins: [
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
        apiUrl: 'http://127.0.0.1:9001/query',
        // youtube_api_key: process.env.GOOGLE_PRIVATE_KEY,
        // channel_id: process.env.CHANNEL_ID,
      },
    },
  ],
};
