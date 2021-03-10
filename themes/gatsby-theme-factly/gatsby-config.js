// const path = require('path');
// const tailwindConfig = require('./tailwind.config.js');
const editorjsHTML = require('editorjs-html');

// const autoprefixer = require(`autoprefixer`);
// const cssnano = require(`cssnano`);

module.exports = ({
  client,
  api,
  siteUrl = 'https://localhost:9002',
  youtubeApiKey,
  channelId,
  tailwindCustomConfig = {},
}) => ({
  siteMetadata: {
    title: 'epage',
    siteUrl: siteUrl,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis corporis repudiandae dolor aperiam molestias autem perspiciatis similique quibusdam, eius adipisci debitis quam amet, unde rerum minus nulla atque quidem!',
  },
  // flags: { QUERY_ON_DEMAND: true },
  plugins: [
    'gatsby-plugin-react-helmet',
    /* {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.join(__dirname, `src`, `static/images`),
        },
      }, */
    youtubeApiKey && channelId
      ? {
          resolve: '@factly/gatsby-theme-youtube',
          options: {
            apiKey: youtubeApiKey,
            channelId,
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
        }
      : null,
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
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [
    //       require(`tailwindcss`)({
    //         ...tailwindConfig,
    //         ...tailwindCustomConfig,
    //       }),
    //       autoprefixer,
    //       cssnano,
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: `${siteUrl}/`,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        include_favicon: false,
        icon: 'src/favicons/favicon.png',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, dega } }) =>
              dega.posts.nodes.map((post) =>
                Object.assign(
                  {},
                  {
                    title: post.title,
                    description: post.excerpt,
                    date: post.created_at,
                    url: `${siteUrl}/${post.slug}`,
                    guid: `${siteUrl}/${post.slug}`,
                    custom_elements: [
                      {
                        'content:encoded': `${JSON.stringify(
                          editorjsHTML().parse(post.description),
                        )}`,
                      },
                    ],
                    // add post medium
                  },
                ),
              ),
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
  ].filter(Boolean),
});
