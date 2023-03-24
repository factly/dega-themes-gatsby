/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby themes Website`,
    description: `This website contains various gatsby themes.`,
    siteUrl: process.env.SITE_URL,
    image: '/images/og-image.png',
  },
  plugins: ["gatsby-plugin-theme-ui",
    "gatsby-plugin-postcss",

    {
      resolve: `@factly/gatsby-source-dega`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        uri: process.env.API_ENDPOINT,

        // spaceId: process.env.SPACE_ID,
        // accessToken: process.env.ACCESS_TOKEN,
        // siteUrl: process.env.SITE_URL,
        // apiUrl: process.env.DEGA_API_URL,
      },
    }

  ],
}
