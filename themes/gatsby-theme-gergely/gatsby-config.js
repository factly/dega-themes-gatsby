// const path = require('path');
// const tailwindConfig = require('./tailwind.config.js');
const editorjsHTML = require('editorjs-html');

// const autoprefixer = require(`autoprefixer`);
// const cssnano = require(`cssnano`);

module.exports = ({
  spaceId,
  accessToken,
  apiUrl,
  siteUrl = 'https://localhost:9002',
  youtubeApiKey,
  channelId,
  tailwindCustomConfig = {},
}) => ({
  siteMetadata: {
    title: 'epage',
    siteUrl,
    description: 'Gatsby site built using Dega CMS',
  },
  // flags: { QUERY_ON_DEMAND: true },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@factly/gatsby-theme-dega-core',
      options: {
        spaceId,
        accessToken,
        apiUrl,
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'dega',
    //     fieldName: 'dega',
    //     url: apiUrl,
    //     headers: {
    //       'X-Space': spaceId,
    //       'X-Dega-API-Key': accessToken,
    //     },
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        injectColorFlashScript: false,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
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
                    // custom_elements: [
                    //   {
                    //     'content:encoded': `${JSON.stringify(
                    //       editorjsHTML().parse(post.description),
                    //     )}`,
                    //   },
                    // ],
                    // add post medium
                  },
                ),
              ),
            query: `
            {
              allDegaPost {
                nodes {
                  excerpt
                  description
                  title
                  slug
                  published_date
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
      workboxConfig: {
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
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `NetworkFirst`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
        ],
      },
      debug: true,
    },
  ].filter(Boolean),
});
