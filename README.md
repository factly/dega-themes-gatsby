# Dega Themes

The repository contains open sourced themes developed by Factly to generate modern websites using Dega CMS as a data source. Themes are developed using GatsbyJS and are free of cost to use.

We at Factly are making developing quality websites easier with Dega Themes and Dega CMS.

To run example site

```
yarn workspace [sitename] start

```

ex -

```
yarn workspace factly-english start

```

# To build new site

```
mkdir project-name && cd project-name
```

## Add package.json file

```
yarn init -y -p
```

create a file in root directory gatsby-config.js and add below code

```
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

```
yarn add gatsby react react-dom '@factly/gatsby-theme-factly'
```

## Run site

```
gatsby develop
```

## Build site

```
gatsby build
```
