import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const MarkDownBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //console.log(JSON.stringify(data, undefined, 4))

  return (
    <Layout>
      <Head title="Mark-down Blogs" />
      <h1>My Blog Page</h1>
      <p>This is my blog description</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/mdblogs/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>

                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default MarkDownBlogs
