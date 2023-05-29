/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto p-4">
        <hr />
        <div sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <div
            sx={{
              display: "flex",
              flexDirection: 'column',
              justifyContent: "space-between",
              gap: '16px',
              my: "2rem",
              width: '488px',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            <p sx={{ fontWeight: 700, }}>&copy; {new Date().getFullYear()} Dega Themes</p>
            <p sx={{ color: "#4f4e4e", }}>FACTLY is one of the well known Data Journalism/Public Information portals in India. Each news story on FACTLY is backed by factual evidence/data from official sources that is either available in the public domain or that is collated/gathered/collected using tools such as the Right to Information (RTI).</p>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: 'column',
              gap: "12px",
              textDecoration: "underline",
              color: "#4f4e4e",
              a: {
                "&:hover": {
                  color: "blue",
                },
              }
            }}
          >
            <a href="#">FAQ</a>
            <a href="/themes">Themes</a>
            <a href="/blog">Blog</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
