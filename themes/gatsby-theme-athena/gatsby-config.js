module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-vidcheck`,
      options: {
        spaceId: 1,
      },
    },
  ],
};
