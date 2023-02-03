import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="isolate bg-white">
      <Navbar />
      <main style={{ paddingTop: "2rem" }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
