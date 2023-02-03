/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto p-4">
        <hr />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: "2rem",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Dega Themes</p>
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
              to="/"
            >
              FAQ
            </Link>
            <Link
              sx={{
                color: "#4f4e4e",
                "&:hover": {
                  color: "blue",
                },
              }}
              to="/"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
