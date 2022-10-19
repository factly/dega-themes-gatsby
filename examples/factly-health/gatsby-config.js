require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        spaceId: process.env.H_SPACE_ID,
        accessToken: process.env.H_ACCESS_TOKEN,
        siteUrl: process.env.SITE_URL,
        apiUrl: process.env.DEGA_API_URL,
      },
    },
  ],
};
