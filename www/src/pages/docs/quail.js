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
        <div sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h1
            sx={{
              fontSize: "32px",
              textDecoration: "underline",
              "&:hover": { color: "blue" },
            }}
          >
            Quail
          </h1>
          <span> - </span>
          <a
            sx={{ color: "#525252", fontSize: "20px", fontWeight: 400 }}
            href=""
          >
            Documentation
          </a>
        </div>
        {/* <div
          sx={{
            background: "#FAFAFA",
            display: "flex",
            marginleft: "8px",
            mt: "16px",
            padding: "16px",
          }}
        >
          {" "}
          <p
            sx={{
              marginRight: "8px",
            }}
          >
            {" "}
            Theme version:
          </p>
          <code
            sx={{
              border: "1px solid #D2D2D7",
              marginRight: "8px",
              px: "6px",
            }}
          >
            {" "}
            1.1.9 - 4 may 2022{" "}
          </code>{" "}
          <p> Changelog</p>
        </div> */}
        {/* <div
          sx={{
            background: "#E7F5FB",
            marginTop: "32px",
            padding: "32px",
            borderRadius: "2px",
            a: {
              color: "#000",
              textDecoration: "underline",
              "&:hover": { color: "blue" },
              textUnderlineOffset: "4px",
            },
          }}
        >
          <h1
            sx={{
              mb: "8px",
              pb: "16px",
            }}
          >
            Theme Editing & Tools
          </h1>
          <hr />
          <p
            sx={{
              mt: "24px",
            }}
          >
            Edit the theme files mentioned here with a code editor. I recommend{" "}
            <a href="/">Visual Studio Code,</a> Sublime Text, or Atom. Don’t use
            TextEdit on Mac.
          </p>
          <p
            sx={{
              mt: "24px",
            }}
          >
            Once you finish, <a href="/">zip</a> the theme files, and{" "}
            <a href="/">upload</a> the final zip file to your Ghost website.
          </p>
          <p
            sx={{
              mt: "24px",
            }}
          >
            If editing the{" "}
            <code
              sx={{
                background: "#FFFFFF",
                border: "1px solid",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              routes.yaml
            </code>{" "}
            file, make sure to upload it after every change you make.
          </p>
          <hr
            sx={{
              mt: "2rem",
            }}
          />
        </div> */}
        <h1
          sx={{
            mt: "32px",
            pb: "16px",
          }}
        >
          <strong> TABLE OF CONTENTS</strong>
        </h1>
        <hr />
        <div
          sx={{
            ml: "20px",
            my: "16px",
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
          <p>Before installing and using themes based on the Dega CMS, you need to make sure that your system meets the following requirements:</p>
          <ol>
            <li>1. Node.js Version 18 or Higher</li>
            <p>The Dega CMS requires Node.js version 18 or higher to be installed on your system. If you don't have Node.js installed, you can download it from the official Node.js website <a href="(https://nodejs.org/en/).">(https://nodejs.org/en/)</a></p>
            <li>2. Package Manager (npm or yarn)</li>
            <p>You also need to have a package manager installed to install the required dependencies. The recommended package managers are either npm <a href="(https://www.npmjs.com/)">(https://www.npmjs.com/)</a> or yarn <a href=" (https://yarnpkg.com/)."> (https://yarnpkg.com/).</a>
            </p>
            <p>To check if Node.js and the package manager are installed on your system, you can run the following commands in your terminal:
            </p>
            <h4>node-v</h4>
            <p>This will display the version of Node.js installed on your system. If you see a version number that is less than 18, you need to update your version of Node.js.
            </p>
            <h4>npm-v</h4>
            or
            <h4>yarn-v</h4>
            <p>These commands will display the version of npm or yarn installed on your system. If you don't have either of these package managers installed, you can download and install them from the official npm website <a href="(https://www.npmjs.com/)">(https://www.npmjs.com/)</a> or yarn website <a href="(https://yarnpkg.com/)">(https://yarnpkg.com/)</a></p>
            <p>Once you have Node.js and the package manager installed, you can proceed to install and use themes based on the Dega CMS.</p>
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
            }}
          >
            Theme Installation
          </h2>
          <ul>
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
            <p>Once you have the Dega CMS installed and configured, you can download and install a Dega theme to use on your website. Here are the steps to install a Dega theme using npm or yarn:</p>
            <p>1. Go to root folder</p>
            <p>2. Install the theme using npm or yarn:</p>
            with npm:
            <p sx={{ background: '#FAFAFA', padding: '16px', fontSize: '20px', fontWeight: '600' }}>npm install @factly/gatsby-theme-quail</p>
            with yarn:
            <p sx={{ background: '#FAFAFA', padding: '16px', fontSize: '20px', fontWeight: '600' }}>yarn add @factly/gatsby-theme-quail</p>
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
            <p>Once you have installed a Dega theme, you may want to configure it to fit your specific needs. Most Dega themes come with configuration options that can be modified to change the look and feel of your website.</p>
            <h4>1. SPACE ID</h4>
            <p>This is the ID of the content space that you want to use with your Dega CMS project. </p>
            <h4>2. ACCESS TOKEN</h4>
            <p>This is the access token that allows your Dega CMS project to access the content in your space.</p>
            <h4>3. URI</h4>
            <p>This is the URI endpoint of your Dega CMS API.</p>
            <pre sx={{ background: '#FAFAFA', padding: '16px' }}>
              <code>
                {`{

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
                }`}
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
          <p>Theme shadowing in Gatsby allows you to override the default components and styles of a theme with your own custom components and styles.</p>
          <p>To get started with theme shadowing in Dega themes, follow these steps:</p>
          <ul>
            <li>1. Inside the `src` folder, create a new folder called `gatsby-plugin-theme-ui`.</li>
            <li>2. Inside the `gatsby-plugin-theme-ui` folder, create a new file called `index.js`.
            </li>
            <li>3. In the `index.js` file, export a theme object that includes the custom styles and components you want to use. For example:</li>
          </ul>
          <pre sx={{ background: '#FAFAFA', padding: '16px', my: '20px' }}>
            <code>
              {`{
    import { baseTheme } from 'gatsby-theme-dega';

export default {
  ...baseTheme,
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '48px',
    },
  },
};
  }`}
            </code>
          </pre>
          <p>In this example, we are extending the base theme from gatsby-theme-dega and customizing the colors and styles.</p>
        </div>
      </div>
    </Layout>
  )
}

export default quailPage
