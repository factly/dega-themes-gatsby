import React from "react"
import ThemesList from "../../components/Homepage/ThemesList"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo'

const ThemesListPage = () => {
  return (
    <Layout>
      <Seo
        title="Themes | Gatsby Themes Website"
        description=""
      />
      <ThemesList />
    </Layout>
  )
}

export default ThemesListPage
