# Dega Themes

The repository contains open sourced themes developed by Factly to generate modern websites using Dega CMS as a data source. Themes are developed using GatsbyJS and are free of cost to use.

We at Factly are making developing quality websites easier with Dega Themes and Dega CMS.

### Prerequisites

- You'll need DegaCMS API key, Space Id and the API endpoint to run a site.
- Node.js v18

## Installing source plugin to your site

Install source plugin to the project

```sh
npm install @factly/gatsby-source-dega
```

if you're using yarn

```sh
yarn add @factly/gatsby-source-dega
```

Add configuration to gatsby-config.js

create a file in root directory gatsby-config.js and add below code

```sh
module.exports = {
  plugins: [
    ...
   {
        resolve: `@factly/gatsby-source-dega`,
        options: {
          spaceId: "",
          accessToken: "",
          uri: "",
        },
      },
  ]
};
```

```sh
yarn workspace [sitename] start

```

## Run example sites

## Create a theme

To run example site

ex -

```sh
yarn workspace factly-english start

```

# To build new site

```sh
mkdir project-name && cd project-name
```

## Add package.json file

```sh
yarn init -y -p
```

create a file in root directory gatsby-config.js and add below code

```sh
const siteMetadata = {
    title: "Site title"
}

module.exports = {
  plugins: [
    {
      resolve: '@factly/gatsby-theme-factly',
      options: {
        spaceId,
        accessToken,
        apiUrl,
        siteUrl
      }
    }
  ]
};
```

## Install packages

```sh
yarn add gatsby react react-dom '@factly/gatsby-theme-factly'
```

## Run site

```sh
gatsby develop
```

## Build site

```sh
gatsby build
```
