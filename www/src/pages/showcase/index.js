
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo'
import Showcase from "../../components/Homepage/Showcase"

const ShowcasePage = () => {
  return (
    <Layout>
      <Seo
        title="Showcase Page | Gatsby Themes Website"
        description=""
      />
      <h2 className="mt-14"><Showcase /></h2>
    </Layout>
  )
}

export default ShowcasePage
