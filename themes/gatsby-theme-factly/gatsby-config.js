const path = require('path');

const tailwindConfig = require('./tailwind.config.js');

const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);

module.exports = ({ client, api, youtube_api_key, channel_id, tailwindCustomConfig = {} }) => {
  return {
    siteMetadata: {
      title: 'epage',
      siteUrl: 'http://localhost:9002',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis corporis repudiandae dolor aperiam molestias autem perspiciatis similique quibusdam, eius adipisci debitis quam amet, unde rerum minus nulla atque quidem!',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      /* {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.join(__dirname, `src`, `static/images`),
        },
      }, */

      {
        resolve: '@factly/gatsby-theme-youtube',
        options: {
          apiKey: youtube_api_key,
          channelId: channel_id,
          basePath: '/videos',
          logo: 'logo.png',
          bannerData: [
            {
              name: 'Decode',
              icon: 'decode.png',
              playlistId: 'PLEQcsVYyf3IA_pPC8LR81vpEPkDl1czou',
            },
            {
              name: 'Decode Lite',
              icon: 'decode-lite.png',
              playlistId: 'PLEQcsVYyf3IBlzW5qPaozJZRKeS-aFpfv',
            },
            {
              name: 'Pause',
              icon: 'pause.png',
              playlistId: 'PLEQcsVYyf3IDpDYZ_Y-fuvSgYIY3TyBLv',
            },
          ],
        },
      },
      {
        resolve: 'gatsby-source-graphql',
        options: {
          typeName: 'dega',
          fieldName: 'dega',
          url: api,
          headers: {
            space: client,
          },
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require(`tailwindcss`)({
              ...tailwindConfig,
              ...tailwindCustomConfig,
            }),
            autoprefixer,
            cssnano,
          ],
        },
      },
      {
        resolve: `gatsby-plugin-amp`,
        options: {
          canonicalBaseUrl: 'http://festive-nobel.netlify.app/',
          components: [
            'amp-social-share',
            'amp-pinterest',
            'amp-twitter',
            'amp-instagram',
            'amp-youtube',
            'amp-facebook',
            'amp-iframe',
          ],
          excludedPaths: ['/404*', '/'],
          pathIdentifier: '/amp/',
          relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
          relCanonicalPattern: '{{canonicalBaseUrl}}{{pathname}}',
        },
      },
      {
        resolve: `gatsby-plugin-advanced-sitemap`,
      },
      'gatsby-plugin-robots-txt',
      'gatsby-plugin-manifest',
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          feeds: [
            {
              serialize: ({ query: { site, dega } }) => {
                return dega.posts.nodes.map((node) => {
                  return Object.assign(
                    {},
                    {
                      title: node.title,
                      description: node.excerpt,
                      date: node.created_at,
                      url: 'http://localhost:9002/' + node.slug,
                      guid: 'http://localhost:9002/' + node.slug,
                      custom_elements: [{ 'content:encoded': node.description }],
                    },
                  );
                });
              },
              query: `
            {
              dega {
                posts {
                  nodes {
                    excerpt
                    description
                    title
                    slug
                    created_at
                  }
                }
              }
            }`,
              output: '/rss.xml',
              title: "Factly's RSS Feed",
            },
          ],
        },
      },
      'gatsby-plugin-offline',
    ],
  };
};
