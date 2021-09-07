module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Athena Theme',
        short_name: 'Athena Theme',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: `@factly/gatsby-theme-athena`,
      options: {
        spaceId: 8,
      },
    },
  ],
};
