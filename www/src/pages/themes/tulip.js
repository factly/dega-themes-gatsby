/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import { BsCheck } from "react-icons/Bs"

const tulip = () => {
  return (
    <>
      <section
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          gap: "2rem",
        }}
      >
        <Navbar />
        <div
          sx={{
            display: "flex",
            gap: "1rem",
            mb: "3rem",
          }}
        >
          <div>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/a1b81080c41b09f594ace9b60eff10eb9308156d/cd1b7/images/themes/tripoli/hero/hero.png"
              alt=""
            />
          </div>
          <div
            sx={{
              flex: ["1 0 100%", null, "1 0 calc(30% - 1rem)"],
              maxWidth: ["100%", null, "calc(30% - 1rem)"],
            }}
          >
            <p
              sx={{
                fontSize: "32px",
              }}
            >
              Tulip
            </p>
            <p
              sx={{
                mb: "1rem",
              }}
            >
              Dega themes for news and magazine websites
            </p>
            <div
              sx={{
                display: "flex",
                p: "1rem",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #f4f1f1",
              }}
            >
              <Link to="">
                <p
                  sx={{
                    border: "1px solid blue",
                    padding: "0.75rem 6rem",
                    color: "#fff",
                    bg: "blue",
                    my: "1rem",
                  }}
                >
                  View on Github
                </p>
              </Link>
              <Link to="">
                <p
                  sx={{
                    border: "1px solid blue",
                    padding: "0.75rem 7rem",
                    color: "blue",
                    mb: "1rem",
                  }}
                >
                  Live Demo
                </p>
              </Link>
            </div>
            <div
              sx={{
                display: "flex",
                p: "1rem",
                flexDirection: "column",
                border: "1px solid #f4f1f1",
                mt: "2rem",
              }}
            >
              <p
                sx={{
                  my: "1rem",
                }}
              >
                Dega websites built with Tulip
              </p>
              <hr
                sx={{
                  border: "1px solid #f4f1f1",
                }}
              />
              <div
                sx={{
                  display: "flex",
                  gap: "1rem",
                  my: "1rem",
                }}
              >
                <p>Documentation</p>
                <span>.</span>
                <p>Changelog</p>
              </div>
              <hr
                sx={{
                  border: "1px solid #f4f1f1",
                }}
              />
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: "1rem",
                }}
              >
                <p>Current Version</p>
                <p>1.0.2 — 24 June 2022</p>
              </div>
              <hr
                sx={{
                  border: "1px solid #f4f1f1",
                }}
              />
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: "1rem",
                }}
              >
                <p>Dega 5.0</p>
                <BsCheck />
              </div>
              <hr
                sx={{
                  border: "1px solid #f4f1f1",
                }}
              />
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: "1rem",
                }}
              >
                <p>Images lazy loading</p>
                <BsCheck />
              </div>
            </div>
          </div>
        </div>
        <hr
          sx={{
            border: "1px solid #f4f1f1",
          }}
        />
        <div
          sx={{
            display: "flex",
            gap: "1rem",
            maxWidth: "1200px",
            my: "3rem",
            bg: "#fafafa",
          }}
        >
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/bf9a6bfca8c40a697114af6092ee1853/73fdb83e/vegasbusinessdigest.png"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/9781ca594cda0adfb801fab8fdec8e89/0ac2b3b9/geopolitical.png"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/4452c5d1e24a0d00cc23ed71bad185f5/2d09c933/chicagojournal.png"
              alt=""
            />
          </Link>
        </div>
        <hr
          sx={{
            border: "1px solid #f4f1f1",
          }}
        />

        <div
          sx={{
            maxWidth: "800px",
            margin: "auto",
            my: "3rem",
            a: {
              color: "#000",
              textDecoration: "underline",
              "&:hover": {
                color: "blue",
              },
            },
          }}
        >
          <p
            sx={{
              fontSize: "32px",
            }}
          >
            Tulip
          </p>
          <p
            sx={{
              fontSize: "20px",
              mt: "1rem",
            }}
          >
            A newspaper and magazine style will bring your content to life —
            with a minimalist design and beautiful typography.
          </p>
          <p
            sx={{
              fontSize: "20px",
              mt: "2rem",
            }}
          >
            Tripoli highlights featured articles at the site’s top section along
            with recent articles, so your readers can check your important and
            recent content from the first look.
          </p>
          <Link to="">
            <img
              sx={{
                mt: "2rem",
              }}
              src="https://d33wubrfki0l68.cloudfront.net/abf89836083a925d677b7edc2795e6689bc741a8/9d455/images/themes/tripoli/homepage/light.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            The dark mode will depend on your device settings; you can switch to
            toggle it on or off.
          </p>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/7b5d18c666f3d053ca5550bb8c6c4ee7fc09fd22/956a5/images/themes/tripoli/homepage/dark.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            Homepage section for your Editors’ Picks with a unique design.
          </p>

          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/473a7c25e91ed54dfafa1e6120141bc19fe4927a/f7fc6/images/themes/tripoli/homepage/editors.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            Organize your articles by <a href="/">tags</a> on the home page.
          </p>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/6a6ccf03f040969af7659d22ff1a09ea6e0618a0/a11f5/images/themes/tripoli/homepage/tags.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            A simple and easy-to-scan page to show all your tags with a unique
            color for each tag you can set from the admin.
          </p>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e7fd76fa54f9172da5839ed67c19e1b23e3ee4ae/2df9a/images/themes/tripoli/pages/tags.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            Show all your <a href="/">authors </a>on one page highlighting their
            recent articles.
          </p>
          <Link to=""></Link>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/b2861ceb5c5dbde288ea09c17db7464dce10e8e0/161e3/images/themes/tripoli/pages/authors.png"
              alt=""
            />
          </Link>
          <p
            sx={{
              my: "2rem",
            }}
          >
            A custom page for <a href="/">newsletters</a>lets your readers
            subscribe to a specific type of content.
          </p>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/567d54a480456a1a48f18549615a2b4a753e8331/9fbd5/images/themes/tripoli/pages/newsletter.png"
              alt=""
            />
          </Link>
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2.5rem",
            }}
          />
        </div>
        <div
          sx={{
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <p
            sx={{
              fontSize: "1.5rem",
              color: "blue",
            }}
          >
            Deploy with GitHub
          </p>
          <p
            sx={{
              mt: "2rem",
            }}
          >
            Integrated with the Deploy Dega Theme GitHub Action for easy theme
            deployment.
          </p>
          <img
            sx={{
              mt: "2rem",
            }}
            src="https://d33wubrfki0l68.cloudfront.net/0c0e693df7ceb0c94bdbebaa7773d10e0d0038f6/faa3c/images/themes/tripoli/github/actions.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <div
            sx={{
              maxWidth: "800px",
              my: "3rem",
              li: {
                mt: "12px",
                fontSize: "18px",
              },
            }}
          >
            <p
              sx={{
                mb: "2rem",
                fontSize: "18px",
              }}
            >
              Other things Tulip can bring to your website:
            </p>
            <ul>
              <li>Full-width navigation adapts to many navigation links.</li>
              <li>Support the new Dega Tiers feature.</li>
              <li>Support Ghost native Search and Comments.</li>
              <li>Support all the Dega editor cards.</li>
              <li>GitHub Action integration for theme deployment.</li>
              <li>
                Theme settings for Instagram, LinkedIn, and YouTube links.
              </li>
              <li>Sharing icons for Twitter, Facebook, and LinkedIn</li>

              <hr
                sx={{
                  border: "1px solid #f4f1f1",
                  mt: "2rem",
                }}
              />
              <p
                sx={{
                  mt: "3rem",
                  fontSize: "32px",
                }}
              >
                Upcoming updates
              </p>
              <li
                sx={{
                  mt: "2rem",
                }}
              >
                Homepage new content components
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr
        sx={{
          border: "1px solid #f4f1f1",
        }}
      />
      <Footer />
    </>
  )
}

export default tulip
