import React from "react"
import HomePage from "../components/HomePage"
import Layout from "../components/Layout"
import Documentation from "../components/Documentation"

const Home = () => {
  return (
    <Layout>
      <HomePage />
      <Documentation />
    </Layout>
  )
}
export default Home
