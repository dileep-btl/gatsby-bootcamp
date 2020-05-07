import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>This is a Contact Page</h1>
      <p>
        Follow me on Twitter! :
        <a
          href="https://twitter.com/dileep539"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dileep539
        </a>
      </p>
      <p>
        <Link to="/">{"<< "}Home Page</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
