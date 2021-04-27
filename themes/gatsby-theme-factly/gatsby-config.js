// const path = require('path');
// const tailwindConfig = require('./tailwind.config.js');
const editorjsHTML = require('editorjs-html');

// const autoprefixer = require(`autoprefixer`);
// const cssnano = require(`cssnano`);
const workboxOptions = {
  importWorkboxFrom: `local`,
  globDirectory: rootDir,
  globPatterns,
  modifyURLPrefix: {
    // If `pathPrefix` is configured by user, we should replace
    // the default prefix with `pathPrefix`.
    '/': `${pathPrefix}/`,
  },
  cacheId: `gatsby-plugin-offline`,
  // Don't cache-bust JS or CSS files, and anything in the static directory,
  // since these files have unique URLs and their contents will never change
  dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
  runtimeCaching: [
    {
      // Use cacheFirst since these don't need to be revalidated (same RegExp
      // and same reason as above)
      urlPattern: /(\.js$|\.css$|static\/)/,
      handler: `NetworkFirst`,
    },
    {
      // page-data.json files, static query results and app-data.json
      // are not content hashed
      urlPattern: /^https?:.*\/page-data\/.*\.json/,
      handler: `NetworkFirst`,
    },
    {
      // Add runtime caching of various other page resources
      urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
      handler: `StaleWhileRevalidate`,
    },
    {
      // Google Fonts CSS (doesn't end in .css so we need to specify it)
      urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
      handler: `StaleWhileRevalidate`,
    },
  ],
  skipWaiting: true,
  clientsClaim: true,
};
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
    {
      resolve: 'gatsby-source-dega',
      options: {
        url: api,
        spaceId: client,
        headers: {
          space: client,
        },
      },
    },
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
    // {
    //   resolve: `gatsby-plugin-amp`,
    //   options: {
    //     canonicalBaseUrl: `${siteUrl}/`,
    //     components: [
    //       'amp-social-share',
    //       'amp-pinterest',
    //       'amp-twitter',
    //       'amp-instagram',
    //       'amp-youtube',
    //       'amp-facebook',
    //       'amp-iframe',
    //     ],
    //     excludedPaths: ['/404*', '/'],
    //     pathIdentifier: '/amp/',
    //     relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
    //     relCanonicalPattern: '{{canonicalBaseUrl}}{{pathname}}',
    //   },
    // },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      // add options to make sitemaps for other things
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
                    date: post.published_date,
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
                posts(spaces:[${client}],limit:100,page:1) {
                  nodes {
                    excerpt
                    description
                    title
                    slug
                    published_date
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
    {
      resolve: 'gatsby-plugin-offline',
      precachePages: ['/about/', '/podcasts/'],
      workboxConfig: workboxOptions,
    },
  ].filter(Boolean),
});
