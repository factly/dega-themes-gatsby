// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-youtube`,
      options: {
        apiKey: process.env.GOOGLE_PRIVATE_KEY,
        channelId: process.env.CHANNEL_ID,
        trackingId: process.env.GA_TRACKING_ID,
        basePath: '/',
        logo: 'logo.png',
        favicon: 'static/favicon.png',
        navData: {
          leftNavItems: [],
          rightNavItems: [
            {
              name: 'About',
              link: '/about',
            },
            {
              name: 'More from Us',
              dropDown: [
                { name: 'Factly Stories', link: 'https://factly.in' },
                { name: 'Data Dashboards', link: 'https://dashboards.factly.in' },
                { name: 'Counting India', link: 'https://countingindia.com' },
              ],
            },
          ],
        },
        bannerData: [
          {
            name: 'Decode Season 1',
            icon: 'decode.jpg',
            playlistId: 'PLEQcsVYyf3ICmFn7ZP00y362M2YdPHwHt',
          },
          {
            name: 'Decode Lite',
            icon: 'decode-lite.jpg',
            playlistId: 'PLEQcsVYyf3IBlzW5qPaozJZRKeS-aFpfv',
          },
          {
            name: 'Pause',
            icon: 'pause.jpg',
            playlistId: 'PLEQcsVYyf3IDpDYZ_Y-fuvSgYIY3TyBLv',
          },
        ],
        footer: 'Factly',
      },
    },
  ],
};
