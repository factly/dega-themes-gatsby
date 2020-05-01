const siteMetadata = require('./data/site-config')

module.exports = {
  plugins: [
      {
          resolve: '@mhjadav/gatsby-theme-factly',
          options: {
            client: 'factly',
            metaData: siteMetadata
          }
      }
  ]
}