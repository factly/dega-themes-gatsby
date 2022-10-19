require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: '@factly/gatsby-theme-harpy',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        siteUrl: process.env.SITE_URL,
        apiUrl: process.env.DEGA_API_URL,
      },
    },
  ],
};
