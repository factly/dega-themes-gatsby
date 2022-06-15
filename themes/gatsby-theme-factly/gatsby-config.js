const editorjsHTML = require('editorjs-html');

module.exports = ({
  spaceId,
  accessToken,
  apiUrl,
  siteUrl = 'https://localhost:9002',
}) => ({
  siteMetadata: {
    title: 'epage',
    siteUrl,
    description: 'Gatsby Site built using DegaCMS',
  },
  plugins: [
    {
      resolve: '@factly/gatsby-theme-dega-core',
      options: {
        spaceId,
        accessToken,
        apiUrl,
        siteUrl,
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        // injects a script tag which causes error in AMP pages can be removed if we're not using AMP pages 
        injectColorFlashScript: false,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     include_favicon: false,
    //     icon: 'src/favicons/favicon.png',
    //     cache_busting_mode: 'none',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, dega } }) =>
    //           dega.posts.nodes.map((post) =>
    //             Object.assign(
    //               {},
    //               {
    //                 title: post.title,
    //                 description: post.excerpt,
    //                 date: post.published_date,
    //                 url: `${siteUrl}/${post.slug}`,
    //                 guid: `${siteUrl}/${post.slug}`,
    //                 // custom_elements: [
    //                 //   {
    //                 //     'content:encoded': `${JSON.stringify(
    //                 //       editorjsHTML().parse(post.description),
    //                 //     )}`,
    //                 //   },
    //                 // ],
    //                 // add post medium
    //               },
    //             ),
    //           ),
    //         query: `
    //         {
    //           dega {
    //             posts(limit:100,page:1) {
    //               nodes {
    //                 excerpt
    //                 description
    //                 title
    //                 slug
    //                 published_date
    //               }
    //             }
    //           }
    //         }`,
    //         output: '/rss.xml',
    //         title: "Factly's RSS Feed",
    //       },
    //     ],
    //   },
    // },
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
