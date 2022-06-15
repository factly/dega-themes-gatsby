<h1 align="center">
  gatsby-source-dega
</h1>
Source from [DegaCMS](https://dega.factly.in) API in Gatsby.

---

## Install

```bash
npm install --save gatsby-source-dega
```

## How to use

### Prerequisites

First, you need a way to pass environment variables to the build process, so secrets and other secured data aren't committed to source control. I recommend using [`dotenv`][dotenv] which will then expose environment variables. [Read more about dotenv and using environment variables here][envvars]. Then you can _use_ these environment variables and configure your plugin.

You'll need an `API Key` and `Space Id` from dega

Save both to your environment variable file

It should look something like this:

```
API_KEY=your-api-key-here
SPACE_ID=you-space-id-here
```

### gatsby-config

The plugin sets some defaults for the endpoints and options. Hence you can use it only with the two **mandatory** entries `apiKey` and `spaceId`.

```JS
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-dega',
      options: {
        // apiKey and spaceId are mandatory
        apiKey: process.env.API_KEY,
        spaceId: process.env.SPACE_ID,
      },
    },
  ],
}
```
