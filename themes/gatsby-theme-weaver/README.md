```
<h1 align="center">
  @factly/gatsby-theme-weaver
</h1>


Site link:([https://stag-weaver.netlify.app])


Gatsby theme for DegaCMS. Built with [DegaCMS](https://dega.weaver.in) and [Theme UI](https://theme-ui.com/).


Read the [Source Code](https://github.com/factly/dega-themes).

## Features

- Sourcing data from Dega CMS
- Theme UI-based theming
- SEO
- Accessibility
- AMP Pages


## Prerequisites

Before installing and using themes based on the Dega CMS, you need to make sure that your system meets the following requirements:

1. Node.js Version 18 or Higher

The Dega CMS requires Node.js version 18 or higher to be installed on your system. If you don't have Node.js installed, you can download it from the [official Node.js website](https://nodejs.org/en/).

2. Package Manager (npm or yarn)

You also need to have a package manager installed to install the required dependencies. The recommended package managers are either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

To check if Node.js and the package manager are installed on your system, you can run the following commands in your terminal:

```
node -v

```

This will display the version of Node.js installed on your system. If you see a version number that is less than 18, you need to update your version of Node.js.

```
npm -v

```

or

```
yarn -v

```


These commands will display the version of npm or yarn installed on your system. If you don't have either of these package managers installed, you can download and install them from the [official npm website](https://www.npmjs.com/) or [yarn website](https://yarnpkg.com/).

Once you have Node.js and the package manager installed, you can proceed to install and use themes based on the Dega CMS.



## Theme Installation

- Installation

### Installation

Once you have the Dega CMS installed and configured, you can download and install a Dega theme to use on your website. Here are the steps to install a Dega theme using npm or yarn:

1. Go to root folder
2. Install the theme using npm or yarn:

  with npm:

```
npm install @factly/gatsby-theme-weaver

```


with yarn:

```
yarn add @factly/gatsby-theme-weaver

```


### Configuration

Once you have installed a Dega theme, you may want to configure it to fit your specific needs. Most Dega themes come with configuration options that can be modified to change the look and feel of your website.

1. SPACE ID: This is the ID of the content space that you want to use with your Dega CMS project.
2. ACCESS TOKEN: This is the access token that allows your Dega CMS project to access the content in your space.
3. URI: This is the URI endpoint of your Dega CMS API.


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

````
## Add dependencies

```sh
yarn add gatsby react react-dom '@factly/gatsby-theme-weaver'
````

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

## To Run site

```
yarn workspace [sitename] start
```

## To Build site

```
yarn workspace [sitename] build

```
```
Example -

yarn workspace factly-weaver build

```
### Theme options

| Key            | Default Value                | Description                           | Required |
| -------------- | ---------------------------- | ------------------------------------- | -------- |
| `accessToken`  | null                         | Access Token for the Dega API         | true     |
| `spaceId`      | null                         | Space Id for the site                 | true     |
| `apiUrl`       | `https://dega-api.factly.in` | Dega API url for the theme            | false    |
| `basePath`     | `/`                          | Root url for the theme                | false    |
| `ampPages`     | true                         | Configure your site to have amp pages | false    |
| `ampPagesPath` | `/amp`                       | Path for amp pages                    | false    |

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

Theme shadowing in Gatsby allows you to override the default components and styles of a theme with your own custom components and styles in a theme’s src directory.

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! Generally speaking you will want to place your files into `src/@factly/gatsby-theme-weaver/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Editing the content

The content of the page is managed by `DegaCMS`.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/factly/dega-themes/blob/main/themes/gatsby-theme-factly/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

```

```
