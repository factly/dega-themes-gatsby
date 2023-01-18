/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import { BsCheck } from "react-icons/Bs"

const dodo = () => {
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
              src="https://d33wubrfki0l68.cloudfront.net/34145a6fc257a1c0211a2aa7802f4036c14301d5/1c0a9/images/themes/melaka/home.png"
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
              Dodo
            </p>
            <p
              sx={{
                mb: "1rem",
              }}
            >
              Dega themes for blog and magazine websites
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
              src="https://dl.airtable.com/.attachments/1e8bf71afa0d5df2c51703e101e26530/e212e593/guideline.jpg"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/6102a261b0fc0fbd44ef105b338bdf98/e997d601/oliveoil.jpg"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/1e8bf71afa0d5df2c51703e101e26530/e212e593/guideline.jpg"
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
            my: "4rem",
            img: {
              mt: "2rem",
              background: "#FAFAFA",
            },
            p: {
              mt: "1.5rem",
            },
            li: {
              fontSize: "18px",
              mt: "0.5rem",
            },
          }}
        >
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Make a lovely Ghost website
          </p>
          <p>
            Make great first impressions. This Dega theme has a new color scheme
            and a unique home page design.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/8a9747fb99eecc7b283c89b01647d03453919b94/befef/images/themes/melaka/home-page.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Accessible from any device
          </p>
          <p>Dodo adjusts to phone, tablet, and desktop screens of any size.</p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/83e1685b00f1db688433fd1672aae2c1cbc7574c/ad2a2/images/themes/melaka/responsive.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Love dark mode?
          </p>
          <p>
            A dark mode is available based on the Operating System mode.
            Furthermore, you can choose between dark and light modes from the
            navigation button.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2a85905aa7775716972fa54ba2d1617d1d8e129a/c7ac4/images/themes/melaka/dark.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Find it faster
          </p>
          <p>
            Instantly search your posts as you type. Search organizes your
            results into links and photos for more visibility.
          </p>
          <p>
            Search supports English, Russian, French, Spanish, German,
            Portuguese, Italian, Finnish, Dutch, and Danish.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/3900a0801c9b3a7ba495ad48c7c5ffd627187739/dac29/images/themes/melaka/search.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Organize posts by tag
          </p>
          <p>
            Make your content easily accessible. Just organize it based on tags.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/cbb595dd6a528019fff2542a0c7e277e2ce71f17/afc8d/images/themes/melaka/tags-column.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Homepage accessible tags
          </p>
          <p>
            List the top blog tags based on how many posts are attached to them
            on the homepage. Then, you can click the Tags URL to go to the
            custom tags page to show all the tags.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/8caf41a509bcda53624a4c48ebecba217228c8c0/e6bb3/images/themes/melaka/home-tags.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Take blog tags to the next level
          </p>
          <p>
            Melaka has a custom and elegant tags page to list your blog tags
            differently. Each tag card shows the tag photo, name, description,
            and the number of posts included.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/1f4c3861680645f04b360ab50eeb0aace742cb89/072d0/images/themes/melaka/tags-page.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Deploy with GitHub
          </p>
          <p>
            Integrated with the Deploy Ghost Theme GitHub Action for easy theme
            deployment.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/d26c99db4b5664e8f7bfcd34bb4a72769cb89250/0b5e5/images/themes/melaka/github/actions.png"
            alt=""
          />
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Features you’ll love in Melaka:
          </p>
          <ul>
            <li>Responsive videos</li>
            <li>Responsive videos</li>
            <li>Related posts</li>
            <li>Syntax highlighting</li>
            <li>Disqus, Commento & CommentBox comments</li>
            <li>Lazy-loading images for optimal performance</li>
            <li>Social sharing icons (Twitter, Pinterest, Facebook, etc.)</li>
            <li>
              Public, Members, and Paid labels on the posts list for easy
              scanning
            </li>
          </ul>
        </div>
      </section>
      <hr
        sx={{
          border: "1px solid #f4f1f1",
          mt: "3rem",
        }}
      />
      <Footer />
    </>
  )
}

export default dodo
