<h1 align="center">
  @factly/gatsby-theme-youtube
</h1>

A Gatsy theme for creating a site from a youtube channel.

## Installation

### For an existing site

If you already have a site you’d like to add the blog theme to, you can manually configure it.

1. Install the theme.

```shell
npm install @factly/gatsby-theme-youtube
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-youtube`,
      options: {
        apiKey: YOUR_API_KEY, // mandatory
        channelId: CHANNEL_ID, // mandatory
        trackingId: YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
        logo: 'logo.png',
      },
    },
  ],
};
```

3.  Add your logo image in the static folder as specified below and add the name of your logo in `gatsby-config.js` in `logo` field in options object

## Folder structure

```text
your-gatsby-project
├── src
|   ├── gatsby-plugin--theme-ui
|   |   └── index.js // edit here to make changes to theme defaults
|   └── @factly
│       └── gatsby-theme-youtube
|           └── components
│               └── Layout.js // for over-riding Layout of the site
├── static // add your logo and banner images here
├── .gitignore
├── .prettierrc
├── gatsby-config.js
├── LICENSE
└── package.json
```

## Usage

### Theme options

|     key     |  default value   | Descrption                                                                  |
| :---------: | :--------------: | --------------------------------------------------------------------------- |
|   apiKey    |        ''        | Google private youtube API                                                  |
|  basePath   |       '/'        | Root url for all blog posts                                                 |
|  channelId  |        ''        | Youtube Channel Id                                                          |
|    logo     |        ''        | Your logo image name                                                        |
| trackingId  |        ''        | Your google analytics ID                                                    |
| bannerTitle | 'Featured Shows' | Title of the banner element in Homepage                                     |
| bannerData  |        []        | Array of objects (maxed at 3 ) containing data about the featured playlists |

### Advanced config

```js
module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-youtube`,
      options: {
        apiKey: YOUR_API_KEY, // mandatory
        channelId: CHANNEL_ID, // mandatory
        basePath: '/youtube', // optional, default to '/'
        trackingId: YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
        bannerTitle: '', // optional
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
        ], // optional, array of objects with info about banner images with playlist images
      },
    },
  ],
};
```

### Run the site by running

```shell
gatsby develop
```

### Build the site by running

```shell
gatsby build
```

### Dependencies

1. gatsby
2. react
3. react-dom
4. @factly/gatsby-source-youtube
