<h1 align="center">
  @factly/gatsby-source-youtube
</h1>
Source from [Youtube](https://developers.google.com/youtube/v3/getting-started) API (v3) in Gatsby.

---

## Install

```bash
npm install --save @factly/gatsby-source-youtube
```

## How to use

### Prerequisites

First, you need a way to pass environment variables to the build process, so secrets and other secured data aren't committed to source control. I recommend using [`dotenv`][dotenv] which will then expose environment variables. [Read more about dotenv and using environment variables here][envvars]. Then you can _use_ these environment variables and configure your plugin.

You'll need an `API Key` from google and `Channel ID` from youtube channel.

1. [Create your API Key](https://developers.google.com/youtube/v3/getting-started)
2. [Get your Channel ID](https://youtube.com)

   1. Sign in to YouTube.
   2. In the top right, click your profile picture and then Settings Settings.
   3. From the left Menu, select Advanced settings.
   4. You’ll see your channel’s user and channel IDs.

3. Save both to your environment variable file

It should look something like this:

```
API_KEY=your-api-key-here
CHANNEL_ID=you-channel-id-here
```

### gatsby-config

The plugin sets some defaults for the endpoints and options. Hence you can use it only with the two **mandatory** entries `apiKey` and `channelId`.

```JS
module.exports = {
  plugins: [
    {
      resolve: '@factly/gatsby-source-youtube',
      options: {
        // apiKey and channelId are mandatory
        apiKey: process.env.API_KEY,
        channelId: process.env.CHANNEL_ID,
      },
    },
  ],
}
```
