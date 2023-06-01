/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../../components/Layout"
import { Seo } from '@components/Seo';

const quailPage = () => {
  return (
    <Layout>
      <Seo
        title="Documentation | Quail Theme"
        description=""
      />
      <div
        sx={{
          maxWidth: "746px",
          margin: "auto",
          my: '3rem',
          a: {
            '&:hover': { textDecoration: 'underline', textUnderlineOffset: '4px' }
          }
        }}
      >
        <a
          sx={{
            color: "#000",
            fontSize: "14px",
            "&:hover": { color: "blue" },
          }}
          href="/docs"
        >
          {" "}
          BACK TO DOCUMENTATIONS
        </a>

        <p sx={{
          fontSize: "24px",
          display: 'flex',
          justifyContent: ['center', 'null', 'start'],
        }}><a sx={{
          textDecoration: "underline",
          "&:hover": { color: "blue" },
        }} href="/themes/quail">Quail</a>- documentation</p>
        <h1
          sx={{
            display: 'flex',
            justifyContent: ['center', 'null', 'start'],
            mt: "16px",
            pb: "16px",
          }}
        >
          <strong> TABLE OF CONTENTS</strong>
        </h1>
        <hr />
        <div
          sx={{
            display: 'flex',
            justifyContent: ['center', 'null', 'start'],
          }}
        >
          <ul
            sx={{
              a: {
                color: "#000",
                textDecoration: "underline",
                "&:hover": { color: "blue" },
              },
              li: { mb: "8px" },
            }}
          >
            <li>
              <a href="#Prerequisites"> Prerequisites</a>
            </li>
            <li>
              <a href="#Theme_Installation"> Theme Installation</a>
              <ul sx={{
                ml: '20px',
                mt: '8px',
              }}>
                <li><a href="#Installation">Installation</a></li>
                <li><a href="#Configuration">Configuration</a></li>
              </ul>
            </li>
            <li>
              <a href="#Theme shadowing"> Theme Shadowing</a>
            </li>
          </ul>
        </div>
        <hr
          sx={{
            mt: "32px",
          }}
        />

        <div id="Prerequisites"
          sx={{
            background: '#E7F5FB',
            padding: '32px',
            h4: {
              background: '#FAFAFA', padding: '16px', fontSize: '20px', fontWeight: '600'
            }
          }}
        >
          <h2
            sx={{
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Prerequisites
          </h2>
          <p sx={{ mt: '16px' }}>Before installing and using themes based on the Dega CMS, you need to make sure that your system meets the following requirements:</p>
          <ol sx={{ mt: '16px' }}>
            <li sx={{ mt: '16px' }}>1. Node.js Version 18 or Higher</li>
            <p sx={{ mt: '16px' }}>The Dega CMS requires Node.js version 18 or higher to be installed on your system. If you don't have Node.js installed, you can download it from the official Node.js website <a href="(https://nodejs.org/en/).">(https://nodejs.org/en/)</a></p>
            <li sx={{ mt: '16px' }}>2. Package Manager (npm or yarn)</li>
            <p sx={{ mt: '16px' }}>You also need to have a package manager installed to install the required dependencies. The recommended package managers are either npm <a href="(https://www.npmjs.com/)">(https://www.npmjs.com/)</a> or yarn <a href=" (https://yarnpkg.com/)."> (https://yarnpkg.com/).</a>
            </p>
            <p sx={{ mt: '16px' }}>To check if Node.js and the package manager are installed on your system, you can run the following commands in your terminal:
            </p>
            <h4 sx={{ mt: '16px' }}>node-v</h4>
            <p sx={{ mt: '16px' }}>This will display the version of Node.js installed on your system. If you see a version number that is less than 18, you need to update your version of Node.js.
            </p>
            <h4 sx={{ mt: '16px' }}>npm-v</h4>
            or
            <h4 sx={{ mt: '16px' }}>yarn-v</h4>
            <p sx={{ mt: '16px' }}>These commands will display the version of npm or yarn installed on your system. If you don't have either of these package managers installed, you can download and install them from the official npm website <a href="(https://www.npmjs.com/)">(https://www.npmjs.com/)</a> or yarn website <a href="(https://yarnpkg.com/)">(https://yarnpkg.com/)</a></p>
            <p sx={{ mt: '16px' }}>Once you have Node.js and the package manager installed, you can proceed to install and use themes based on the Dega CMS.</p>
          </ol>

        </div>
        <div id="Theme_Installation"
          sx={{
            li: {
              fontWeight: '600',
              ml: '20px',
              textDecoration: "underline",
            }
          }}
        >
          <h2
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              mt: "32px",
              textAlign: ['center', 'null', 'null']
            }}
          >
            Theme Installation
          </h2>
          <ul sx={{ textAlign: ['center', 'start', 'null'] }}>
            <li id="Installation">Installation</li>
            <li id="Configuration">Configuration</li>
          </ul>
          <div sx={{
            background: '#E7F5FB',
            padding: '32px',
            mt: '42px'
          }}>
            <h2
              sx={{
                fontSize: "20px",
                fontWeight: "600",
              }}>Installation</h2>
            <p sx={{ mt: '16px' }}>Once you have the Dega CMS installed and configured, you can download and install a Dega theme to use on your website. Here are the steps to install a Dega theme using npm or yarn:</p>
            <p sx={{ mt: '16px' }}>1. Go to root folder</p>
            <p sx={{ mt: '16px' }}>2. Install the theme using npm or yarn:</p>
            <h4 sx={{ mt: '16px' }}>with npm:</h4>
            <p sx={{ background: '#FAFAFA', padding: '16px', fontSize: '20px', fontWeight: '600', mt: '16px' }}>npm install @factly/gatsby-theme-quail</p>
            <h4 sx={{ mt: '16px' }}>with yarn:</h4>
            <p sx={{ background: '#FAFAFA', padding: '16px', fontSize: '20px', fontWeight: '600', mt: '16px' }}>yarn add @factly/gatsby-theme-quail</p>
          </div>
          <div sx={{
            background: '#E7F5FB',
            padding: '32px',
            mt: '42px'
          }}>
            <h2
              sx={{
                fontSize: "20px",
                fontWeight: "600",
              }}>Configuration</h2>
            <p sx={{ mt: '16px' }}>Once you have installed a Dega theme, you may want to configure it to fit your specific needs. Most Dega themes come with configuration options that can be modified to change the look and feel of your website.</p>
            <h4 sx={{ mt: '16px' }}>1. SPACE ID</h4>
            <p sx={{ mt: '16px' }}>This is the ID of the content space that you want to use with your Dega CMS project. </p>
            <h4 sx={{ mt: '16px' }}>2. ACCESS TOKEN</h4>
            <p sx={{ mt: '16px' }}>This is the access token that allows your Dega CMS project to access the content in your space.</p>
            <h4 sx={{ mt: '16px' }}>3. URI</h4>
            <p sx={{ mt: '16px' }}>This is the URI endpoint of your Dega CMS API.</p>
            <pre sx={{ background: '#FAFAFA', padding: '16px', mt: '16px' }}>
              <code>
                {`
module.exports = {
      plugins: [
        'gatsby-plugin-sass',
          {
           resolve: '@factly/gatsby-theme-quail',
           options: {
           spaceId: process.env.SPACE_ID,
           accessToken: process.env.ACCESS_TOKEN,
           uri: process.env.API_ENDPOINT,
          },
        },
       ],
      }
     `
                }

              </code>
            </pre>
          </div>
        </div>
        <div id='Theme shadowing'
          sx={{
            background: '#E7F5FB',
            padding: '32px',
            mt: '42px'
          }}>
          <h2 sx={{
            fontSize: "20px",
            fontWeight: "600",
          }}>
            Theme Shadowing
          </h2>
          <p sx={{ mt: '16px' }}>Theme shadowing in Gatsby allows you to override the default components and styles of a theme with your own custom components and styles.</p>
          <p sx={{ mt: '16px' }}>To get started with theme shadowing in Dega themes, follow these steps:</p>
          <ul sx={{
            mt: '16px', li: {
              mt: '16px'
            }
          }}>
            <li>1. Inside the `src` folder, create a new folder called `gatsby-plugin-theme-ui`.</li>
            <li>2. Inside the `gatsby-plugin-theme-ui` folder, create a new file called `index.js`.
            </li>
            <li>3. In the `index.js` file, export a theme object that includes the custom styles and components you want to use. For example:</li>
          </ul>
          <p sx={{
            mt: '16px',
            'a: hover': {
              textDecoration: 'underline',
            }
          }}>Please read the guide <a href="https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/">Shadowing in Gatsby Themes</a> to understand how to customize the theme! Generally speaking you will want to place your files into <code>src/@factly/gatsby-theme-quail/</code> to shadow/override files. The Theme UI config can be configured by shadowing its files in <code>src/gatsby-plugin-theme-ui/</code>.</p>
        </div>
        <div sx={{
          background: '#E7F5FB',
          padding: '32px',
          mt: '42px',
          h2: {
            fontSize: "20px",
            fontWeight: "600",
          },
          p: {
            my: '16px'
          }
        }}>
          <h2>Editing the content</h2>
          <p>The content of the page is managed by `DegaCMS`.</p>
          <h2>Changelog</h2>
          <p>You can find the extensive [changelog of changes on GitHub] <a href="(https://github.com/factly/dega-themes/blob/main/themes/gatsby-theme-factly/CHANGELOG.md)">(https://github.com/factly/dega-themes/blob/main/themes/gatsby-theme-factly/CHANGELOG.md).</a> You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.</p>
          <h2> Questions?</h2>
          <p>If you have general questions or need help with Gatsby, please go to one of the <a href="[support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support)">[support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support)</a> mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the <a href="[GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions)">[GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions)</a></p>
        </div>
      </div>
    </Layout>
  )
}

export default quailPage
