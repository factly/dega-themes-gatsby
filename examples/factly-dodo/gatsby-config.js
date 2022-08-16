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
      resolve: '@factly/gatsby-theme-dodo',
      options: {
        // spaceId: process.env.SPACE_ID,
        // accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.NEWSCHECKER_SPACE_ID,
        accessToken: process.env.NEWSCHECKER_ACCESS_TOKEN,
        homepage: 2,
        siteUrl: process.env.SITE_URL,
        apiUrl: process.env.DEGA,
        // youtubeApiKey: process.env.GOOGLE_PRIVATE_KEY,
        // channelId: process.env.CHANNEL_ID,
      },
    },
  ],
};
