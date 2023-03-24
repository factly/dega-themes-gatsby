
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ThemesList from "../../components/Homepage/ThemesList"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo'

const ThemesListPage = () => {
  return (
    <Layout>
      <Seo
        title="Showcase Page | Gatsby Themes Website"
        description=""
      />
      <h1 className='max-w-7xl mx-auto flex justify-center text-2xl font-bold '>Themes</h1>
      <ThemesList />
    </Layout>
  )
}

export default ThemesListPage
