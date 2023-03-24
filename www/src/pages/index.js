import React from "react"
import Layout from "../components/Layout"
import DocumentationList from "../components/Documentation/DocumentationList"
import ThemesList from "../components/Homepage/ThemesList"
import HeroSection from "../components/Homepage/HeroSection"
import { Seo } from "../components/Seo"

const Home = () => {
  return (
    <Layout>
      <Seo
        title="Homepage | Gatsby Themes Website"
        description=""
      />
      <HeroSection />
      <header></header>
      <ThemesList />
      {/* <Documentation />  */}
    </Layout>
  )
}
export default Home
