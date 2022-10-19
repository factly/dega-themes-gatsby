const withDefaults = require('./utils/default-options.js');
module.exports = (themeOptions) => {
  const { spaceId, accessToken, apiUrl, siteUrl, basePath } = withDefaults(themeOptions);
  return {
    siteMetadata: {
      title: 'Dega',
      siteTitle: 'Dega',
      siteHeadline: 'Dega - Gatsby Theme from @factly',
      siteUrl: 'https://localhost:9002',
      siteDescription: ``,
      siteLanguage: `en`,
      siteImage: `/header.png`,
      author: `@factly`,
      basePath,
      description: 'Gatsby Site built using DegaCMS',
    },
    plugins: [
      {
        resolve: `@factly/gatsby-source-dega`,
        options: {
          spaceId,
          accessToken,
          uri: apiUrl,
        },
      },
      //`gatsby-plugin-extract-schema`,

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
          excludedPaths: [
            '/404*',
            '/',
            '/tag/*',
            '/user/*',
            '/format/*',
            '/category/*',
            '/about',
            '/podcasts',
          ],
          pathIdentifier: '/amp/',
          relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
          relCanonicalPattern: '{{canonicalBaseUrl}}{{pathname}}',
        },
      },
      {
        resolve: `gatsby-plugin-advanced-sitemap`,
        // add options to make sitemaps for other things
      },
      'gatsby-plugin-robots-txt',
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
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/,
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
  };
};
