import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <h1>Welcome to my Page!</h1>
      <h2>by {data.site.siteMetadata.author}</h2>
      <p>This is an awesome website that we are building here</p>
      <p>
        Checkout more about me at my <Link to="/about">About Page</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
