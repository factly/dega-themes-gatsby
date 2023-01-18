/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <footer
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          p: "16px",
        }}
      >
        <div
          sx={{
            display: "flex",
            my: "3rem",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "33.3%",
            }}
          >
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              About
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Twitter
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Github
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Loom
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Youtube
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Blog Rss Feed
            </Link>
          </div>

          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "33.3%",
            }}
          >
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Changelogs
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Sed Your Feedbacks
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Ghost Trips & Tricks
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Affiliate
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Ghost Inspire
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "blue" },
              }}
              to="/"
            >
              Ghost(Pro) Hosting
            </Link>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "33.3%",
            }}
          >
            <p>
              Subscribe to receive Ghost resources, new themes, and updates.
            </p>
            <form action="/">
              <label htmlFor=""></label>
              <input
                sx={{
                  py: "12px",
                  pr: "5rem",
                  pl: "1rem",
                }}
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </form>
          </div>
        </div>
        <hr />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: "2rem",
          }}
        >
          <p>2022 Dega Themes</p>
          <div
            sx={{
              display: "flex",
              gap: "1rem",
              textDecoration: "underline",
              color: "#4f4e4e",
            }}
          >
            <Link
              sx={{
                color: "#4f4e4e",
                "&:hover": {
                  color: "blue",
                },
              }}
              to=""
            >
              <h4>FAQ</h4>
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                "&:hover": {
                  color: "blue",
                },
              }}
              to=""
            >
              <h4>Terms</h4>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
