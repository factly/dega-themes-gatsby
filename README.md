# Factly


Factly dega themes is open sourced themes for the gatsby site

You can build site quickly using dega gatsby themes with dega CMS as data source for your site.

We at factly making site building easier with dega-themes and dega-cms

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
        client: 'factly',
        metaData: siteMetadata
      }
    }
  ]
};
```

## Install packages
```
yarn add gatsby react '@factly/gatsby-theme-factlyreact-dom 
```

## Run site

```
gatsby develop
```

## Build site
```
gatsby build
```