module.exports = {
  plugins: [
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        client: 1,
        api: 'http://127.0.0.1:9000/query',
      }
    }
  ]
};
