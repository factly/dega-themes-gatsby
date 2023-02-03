import React from "react"
import Layout from "../components/Layout"
import DocumentationList from "../components/Documentation/DocumentationList"
import ThemesList from "../components/Homepage/ThemesList"
import HeroSection from "../components/Homepage/HeroSection"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <header></header>
      <ThemesList />
      {/* <Documentation />  */}
    </Layout>
  )
}
export default Home
