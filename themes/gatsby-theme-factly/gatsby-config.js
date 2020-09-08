const path = require('path');

const tailwindConfig = require('./tailwind.config.js');

const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);

module.exports = ({
  client,
  api,
  tailwindCustomConfig = {}
}) => {
  return {
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.join(__dirname, `src`, `static/images`)
        }
      },
      {
        resolve: 'gatsby-source-graphql',
        options: {
          typeName: "dega",
          fieldName: "dega",
          url: api,
          headers: {
            space: client
          }
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require(`tailwindcss`)({
              ...tailwindConfig,
              ...tailwindCustomConfig
            }),
            autoprefixer,
            cssnano
          ]
        }
      },
      'gatsby-plugin-offline',
    ]
  };
};
