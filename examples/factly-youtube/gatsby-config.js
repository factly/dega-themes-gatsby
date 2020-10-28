module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-youtube`,
      options: {
        apiKey: 'AIzaSyAKjjTJOpqrRziHAfx8NtvRzEawPAC_R9c',
        channelId: 'UCpi2S8wW4xLlUCVryhyBtsA',
        basePath: '/',
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
  ],
};
