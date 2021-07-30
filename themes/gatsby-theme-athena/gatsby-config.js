module.exports = ({ spaceId }) => ({
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-vidcheck`,
      options: {
        spaceId,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
});
