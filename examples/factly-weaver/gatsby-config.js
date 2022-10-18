require('dotenv').config({
  path: `.env`,
});

module.exports = {
  flags: {
    LAZY_IMAGES: true,
    // FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: '@factly/gatsby-theme-weaver',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        // spaceId: process.env.SPACE_ID,
        // accessToken: process.env.ACCESS_TOKEN,
        homepage: 2,
        siteUrl: process.env.SITE_URL,
        apiUrl: 'https://dega-api.factly.in/query',
        // youtubeApiKey: process.env.GOOGLE_PRIVATE_KEY,
        // channelId: process.env.CHANNEL_ID,
      },
    },
  ],
};
