/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import { BsCheck } from "react-icons/Bs"

const kite = () => {
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
              src="https://d33wubrfki0l68.cloudfront.net/c0a328b9e2b06f251dfe907cdf86d7d86f8c7463/564a9/images/themes/hue/home.png"
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
              Kite
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
                Dega websites built with Kite
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
              src="https://dl.airtable.com/.attachments/d9dc542946c4e5169641246edced3d44/346756ee/scrimba.jpg"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/89aea77064034e187597bbae42b0cc98/b93f4c2d/tonyshapshow.jpg"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/c600dce8d02f6fda2604eab92ea91a06/d8750fdc/thinkfitbefitpodcast.jpg"
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
            Show off your podcast with Hue
          </p>
          <p>
            I designed Hue for podcasts. So you’ll have an easy time showcasing
            your podcasts in an attractive and organized way.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/e0c2c0733d34ca25b73421d9cf756acc55079b6b/71cb1/images/themes/hue/home-page.png"
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
          <p>Hue adjusts to phone, tablet, and desktop screens of any size.</p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/be0f8e5888c85fdbb02d42db40acb5a69c32189c/d04d6/images/themes/hue/responsive.png"
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
            src="https://d33wubrfki0l68.cloudfront.net/3ab1e00bd426cfe14993877d9f50b970ae794da8/da787/images/themes/hue/dark.png"
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
            src="https://d33wubrfki0l68.cloudfront.net/52e084e55f7504ca21527b7d74beef1b4f85410d/57392/images/themes/hue/search.png"
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
            The icons are for the following services:
          </p>
          <ul>
            <li>Apple Podcasts</li>
            <li>Overcast</li>
            <li>Spotify</li>
            <li>Pocket Casts</li>
            <li>Castro</li>
            <li>Breaker</li>
            <li>Google Podcasts</li>
            <li>RadioPublic</li>
            <li>YouTube</li>
          </ul>
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
            src="https://d33wubrfki0l68.cloudfront.net/f42cb0b960427432a762742f207bcd7b93b2da81/5de68/images/themes/hue/github/actions.png"
            alt=""
          />
        </div>
      </section>
      <hr
        sx={{
          border: "1px solid #f4f1f1",
          mt: "2rem",
        }}
      />
      <Footer />
    </>
  )
}

export default kite
