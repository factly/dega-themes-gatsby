const siteMetadata = require('./data/site-config');

module.exports = {
  plugins: [
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        client: 'factly-telugu',
        metaData: siteMetadata,
      },
    },
  ],
};
