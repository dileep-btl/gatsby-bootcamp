import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>This is my About Page</h1>
      <p>I love to watch Football. I follow Manchester City</p>
      <p>
        To Contant me, <Link to="/contact">Click Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
