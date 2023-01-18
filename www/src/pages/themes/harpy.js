/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import { BsCheck } from "react-icons/Bs"

const harpy = () => {
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
            <Link to="">
              {" "}
              <img
                src="https://d33wubrfki0l68.cloudfront.net/07861dfb04b1599859a739bb43fc7fe39f422838/20ac5/images/themes/petra/hero/hero.png"
                alt=""
              />
            </Link>
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
              Harpy
            </p>
            <p
              sx={{
                mb: "1rem",
              }}
            >
              Dega themes for newsletters and personal websites
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
                Dega websites built with Harpy
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
              src="https://dl.airtable.com/.attachments/a1e5ffc1e7fa509472ff309e4757df78/e19388a5/aboutblank.png"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/31e3d50a4294b052038b893504b3e855/924ff726/otherlife.png"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://dl.airtable.com/.attachments/45626d3bb6ffbba2f3399a86ed24dd92/263919f6/alexbierach.png"
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
          }}
        >
          <p>
            Your Dega website can be more than a blog filled with recent posts
            or a design with a news-style layout.
          </p>
          <p>
            This harpy design will make your homepage uniquely yours. Showcase
            your personal or newsletter brand while keeping things light and
            minimalist.
          </p>
          <p>
            Harpy’s simplicity helps you deliver your message clearly and
            effectively.
          </p>
          <p>Start with a killer introduction of who you are.</p>
          <Link to="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/418e390f6234fc6b4bdf93cdf2c4663dc6bb1a4f/014d6/images/themes/petra/homepage/home.png"
              alt=""
            />
          </Link>
          <p>
            Then, showcase your highlights, featured, and recent posts with a
            modern and stylish design.
          </p>
          <Link to="">
            {" "}
            <img
              src="https://d33wubrfki0l68.cloudfront.net/92f44c2cf0694df397f2be21e8165700c7ca735f/8358a/images/themes/petra/homepage/highlight.png"
              alt=""
            />
          </Link>
          <Link to="">
            {" "}
            <img
              src="https://d33wubrfki0l68.cloudfront.net/6e11946c05e33f35e63e2297246f354dde858297/1c95e/images/themes/petra/homepage/recent.png"
              alt=""
            />
          </Link>
          <hr
            sx={{
              border: "1px solid #f4f1f1",
              mt: "2rem",
            }}
          />
        </div>

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
            a: {
              color: "#000",
              "&:hover": {
                color: "blue",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            },
          }}
        >
          <p
            sx={{
              fontSize: "24px",
              color: "blue",
            }}
          >
            Accessible From Any Device
          </p>
          <p>
            Harpy adjusts to phone, tablet, and desktop screens of any size.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/ac10c7303a981ee1b9acdbd503446704fbce2c38/8b87f/images/themes/petra/responsive/responsive.png"
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
            Paint your website a Hue of you
          </p>
          <p>Colors play a huge part in the entire brand of your website.</p>
          <p>
            I designed and engineered harpy for your convenience. From your
            website admin, you will change all the colors. No code is required.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/1a682d9fb1e854c8cddb880e47144b352c4251fa/86c6b/images/themes/petra/color/settings.png"
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
            Make Your Website Available for All
          </p>
          <p>
            Accessibility is essential, and I take this matter seriously. I
            designed harpy with all individuals in mind.
          </p>
          <p>
            The contrast in color schemes, the heading structure, and ARIA
            Attributes all meet inclusion and accessibility guidelines.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/866f6e7a9531d86e5cce44625bebb2d2267b285c/d2f94/images/themes/petra/accessibility/wave.png"
            alt=""
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/751c9927100d9b4981f48b810f9c70b15890cd15/27997/images/themes/petra/accessibility/skip.png"
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
            Pictures that Paint a Thousand Words
          </p>
          <p>
            Photographs can do wonders to reel your prospects in. It’s the
            easiest way to visually communicate a message to your audience –
            that they can trust you.
          </p>
          <p>
            In the harpy Dega theme, photos on your website are displayed in a
            lightbox gallery, so your visitors can stay on your page while
            browsing your images in a popup.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/01aa85fbbc6fe1f6020ea73774e007c9c8c8205f/c6e70/images/themes/petra/homepage/gallery.png"
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
            Integrated with the <a href="">Deploy Dega Theme </a>GitHub Action
            for easy theme deployment.
          </p>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/10c86d4a9778cf720a35d6fe4069b5c64770336a/eda4d/images/themes/petra/github/actions.png"
            alt=""
          />
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

export default harpy
