/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../../components/Layout"

const harpyPage = () => {
  return (
    <Layout>
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
            Harpy
          </h1>
          <span> - </span>
          <a
            sx={{ color: "#525252", fontSize: "20px", fontWeight: 400 }}
            href=""
          >
            Documentation
          </a>
        </div>
        <div
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
        </div>
        <div
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
        </div>
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
              <a href="#Theme_Installation"> Theme Installation</a>
            </li>
            <li>
              <a href="#Upload_yaml_Files">Upload the routes.yaml File</a>
            </li>
            <li>
              {" "}
              <a href="#"> Members / Subscriptions</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  {" "}
                  <a href="#">
                    Remove ‘Log In’ and ‘Subscribe’ from Header
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    Remove Ghost Portal / The Bottom Right Button
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Membership Troubleshooting Tips</a>{" "}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#"> Dark Mode</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  {" "}
                  <a href="#">Disable Dark Mode</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Disable Light Mode</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Remove the Header Dark Mode Switch Button</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    Add Different Logo Images for Light and Dark Modes
                  </a>{" "}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Navigation</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  {" "}
                  <a href="#">Secondary Navigation</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Search</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  {" "}
                  <a href="#">ghostHunter Slow Search</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Pages</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  {" "}
                  <a href="#">Tags Page</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Author page</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Contact page</a>{" "}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Homepage Posts by Tag</a>{" "}
            </li>
            <li>
              <a href="#"> Posts Per Page</a>
            </li>
            <li>
              <a href="#">Related Posts</a>
            </li>
            <li>
              <a href="#"> Google Analytics</a>
            </li>
            <li>
              <a href="#">Update Favicon</a>
            </li>
            <li>
              <a href="#">Responsive Tables</a>
            </li>
            <li>
              <a href="#">Social Sharing Icons</a>
            </li>
            <li>
              <a href="#">Footer Social Media Icons</a>
            </li>
            <li>
              <a href="#">Languages</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  <a href="#"> Theme Translation</a>
                </li>
                <li>
                  {" "}
                  <a href="#"> Add a New Language Translation</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Edit Translation</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> Portal Text & Translation</a>{" "}
                </li>
                <li>
                  <a href="#"> RTL</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Syntax Highlighting</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>Prism</li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Theme Deploy with GitHub Actions</a>{" "}
            </li>
            <li>
              <a href="#">Code Injection</a>
            </li>
            <li>
              <a href="#">Changing Colors with CSS Variables</a>
            </li>
            <li>
              <a href="#">Customize Home Post Card Image Height</a>
            </li>
            <li>
              <a href="#">Customize Home Hero Image Size</a>
            </li>
            <li>
              <a href="#">Customize Logo Size</a>
            </li>
            <li>
              <a href="#">Footer Copyright</a>
            </li>
            <li>
              <a href="#">AMP</a>
            </li>
            <li>
              <a href="#"> Theme Development</a>
              <ul
                sx={{
                  ml: "20px",
                  mt: "8px",
                }}
              >
                <li>
                  <a href="#"> My Current Setup</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Zip Theme Files</a>{" "}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#"> Theme Update</a>
            </li>
          </ul>
        </div>
        <hr
          sx={{
            mt: "32px",
          }}
        />

        <div id="Theme_Installation">
          <h2
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              mt: "32px",
            }}
          >
            Theme Installation
          </h2>
          <p sx={{ mt: "16px" }}>
            The first step is to unzip the downloaded package by double-clicking
            it on Mac or by right-clicking and selecting “Extract All” in
            Windows.
          </p>
          <p sx={{ mt: "32px" }}>
            Inside the new folder tripoli, you will find the tripoli.zip theme
            file and an online documentation file.
          </p>
          <p sx={{ mt: "32px" }}>
            Follow these steps to upload the theme to your website:
          </p>
          <ol sx={{ mt: "32px", ml: "18px", li: { mt: "8px" } }}>
            <li>Log in to your Ghost website admin (example.com/ghost).</li>
            <li>
              Click the <strong> settings icon</strong> ( ) at the bottom of the
              left-hand side.
            </li>
            <li>
              Go to <strong> Design {">"} Change theme</strong>.
            </li>
            <li>
              Click <strong>Upload theme</strong> and select the tripoli.zip
              theme file.
            </li>
            <li>
              Once uploaded, click <strong>Activate now</strong> to activate
              Tripoli.
            </li>
          </ol>
        </div>
        <hr sx={{ mt: "40px" }} />
        <div id="Upload_yaml_Files">
          <h2
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              mt: "32px",
            }}
          >
            Upload the routes.yaml File{" "}
          </h2>
          <p
            sx={{
              mt: "16px",
            }}
          >
            The routes.yaml is required for the following reasons:
          </p>
          <ul
            sx={{
              mt: "32px",
              ml: "14px",
              textDecoration: "underline",
            }}
          >
            <li>Latest page</li>
            <li>Setup URL</li>
          </ul>
          <p
            sx={{
              mt: "32px",
            }}
          >
            To upload the file, follow these steps:
          </p>
          <ol
            sx={{
              mt: "32px",
              ml: "18px",
              li: { mt: "8px" },
            }}
          >
            <li>Unzip the tripoli.zip theme file.</li>
            <li>
              In your Ghost admin, click the settings icon ( ) at the bottom of
              the left-hand side.
            </li>
            <li>
              Go to the <strong>Labs</strong>.
            </li>
            <li>
              Scroll down to the Routes section and click the Upload routes YAML
              button.
            </li>
            <li>
              Select and upload the{" "}
              <code
                sx={{
                  border: "1px solid #D2D2D7",
                  padding: "4px",
                  borderRadius: "4px",
                  background: "#FAFAFA",
                }}
              >
                routes.yaml
              </code>{" "}
              file inside the theme folder.
            </li>
          </ol>
        </div>
        <hr sx={{ mt: "40px" }} />
        <div sx={{ background: "#E7F5FB", padding: "32px", mt: "32px" }}>
          <h2
            sx={{
              pb: "16px",
              mb: "8px",
              borderBottom: "1px solid #181818",
            }}
          >
            Note: upload routes.yaml after uploading the theme zip
          </h2>
          <p
            sx={{
              mt: "24px",
            }}
          >
            There will already be a default{" "}
            <code
              sx={{
                border: "1px solid #D2D2D7",
                padding: "4px",
                borderRadius: "4px",
                background: "#FFF",
              }}
            >
              {" "}
              routes.yaml
            </code>{" "}
            file uploaded to Ghost. You need to upload your theme’s{" "}
            <code
              sx={{
                border: "1px solid #D2D2D7",
                padding: "4px",
                borderRadius: "4px",
                background: "#FFF",
              }}
            >
              {" "}
              routes.yaml
            </code>{" "}
            to override the default.
          </p>
          <p
            sx={{
              mt: "24px",
            }}
          >
            Do this separately after uploading your theme zip file
          </p>
        </div>
        <hr
          sx={{
            mt: "32px",
          }}
        />
      </div>
    </Layout>
  )
}

export default harpyPage
