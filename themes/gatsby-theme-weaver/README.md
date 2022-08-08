```
<h1 align="center">
  @factly/gatsby-theme-weaver
</h1>


Gatsby theme for DegaCMS. Built with [DegaCMS](https://dega.weaver.in) and [Theme UI](https://theme-ui.com/).


Read the [Source Code](https://github.com/factly/dega-themes).

## Features

- Sourcing data from Dega CMS
- Theme UI-based theming
- SEO
- Accessibility
- AMP Pages

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
## Add dependencies

```sh
yarn add gatsby react react-dom '@factly/gatsby-theme-weaver'
```

## Add gatsby-config.js file

create a file in root directory `gatsby-config.js` and add the below code

```js
// gatsby-config.js
const siteMetadata = {
    title: "Site title"
}

module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-weaver`,
      options: {
        accessToken: 'YOUR_ACCESS_TOKEN',
        apiUrl: 'https://dega-api.factly.in',
        spaceId: 'YOUR_SPACE_ID',
        ampPages: true,
        ampPagesPath: '/amp',
        basePath: '/',      
    },
  ],
};
```


## Run site

```
gatsby develop
```

## Build site

```
gatsby build
```


## Usage

### Theme options

| Key        | Default Value | Description                                                                                              | Required |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------- | ---------- | 
| `accessToken`      | null        | Access Token for the Dega API | true |
| `spaceId` | null | Space Id for the site       | true |
| `apiUrl` | `https://dega-api.factly.in`           | Dega API url for the theme     | false |
| `basePath` | `/` | Root url for the theme        | false |
| `ampPages` | true | Configure your site to have amp pages    | false |
| `ampPagesPath` | `/amp` | Path for amp pages        | false |


#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@factly/gatsby-theme-weaver`,
      options: {
        accessToken: 'YOUR_ACCESS_TOKEN',
        apiUrl: 'https://dega-api.factly.in',
        spaceId: 'YOUR_SPACE_ID',
        ampPages: true,
        ampPagesPath: '/amp',
        basePath: '/',      
    },
  ],
};
```


### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! Generally speaking you will want to place your files into `src/@factly/gatsby-theme-weaver/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Editing the content

The content of the page is managed by `DegaCMS`.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/factly/dega-themes/blob/main/themes/gatsby-theme-factly/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.



```