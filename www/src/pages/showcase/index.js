
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Showcase from "../../components/Homepage/Showcase"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo'

const ShowcasePage = () => {
  return (
    <Layout>
      <Seo
        title="Showcase Page | Gatsby Themes Website"
        description=""
      />
      <h1 className='max-w-7xl mx-auto flex justify-center text-2xl font-bold hover:text-blue-600'>Themes</h1>
      <Showcase />
    </Layout>
  )
}

export default ShowcasePage
