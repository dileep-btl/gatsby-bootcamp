const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    //console.log(JSON.stringify(node, undefined, 4))
    //console.log("@@@@@@@@@@@@@Slug Name: " + slug)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const contentfulBlogTemplate = path.resolve(
    "./src/templates/contentfulblogtemplate.js"
  )
  const markDownBlogTemplate = path.resolve(
    "./src/templates/markdownblogtemplate.js"
  )

  const mdResponse = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  mdResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: markDownBlogTemplate,
      path: `/mdblogs/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const contentfulResponse = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  contentfulResponse.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: contentfulBlogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
