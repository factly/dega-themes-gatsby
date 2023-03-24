import React from "react"
import DocumentationList from "../../components/Documentation/DocumentationList"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo';

const DocumentationListPage = () => {
  return (
    <Layout>
      <Seo
        title="Documentation page | Gatsby Themes Website"
        description=""
      />
      <DocumentationList />
    </Layout>
  )
}

export default DocumentationListPage
