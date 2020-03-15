const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/*
  Create blog posts
*/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog.js`)
  const portfolioPost = path.resolve(`./src/templates/portfolio.js`)
  
  ///////////////////////////////////////////////////////////////////////////////

  let result = await graphql( ` {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000,
      filter: {frontmatter: {posttype: {eq: "post"}}}
    ) {
      edges {
        node {
          fields {
            slug
            category
          }
          frontmatter {
            title
          }
        }
      }
    }
  } ` )
  if (result.errors) {
    throw result.errors
  }
  let posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: `${post.node.fields.category}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  ///////////////////////////////////////////////////////////////////////////////

  result = await graphql( ` {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000,
      filter: {frontmatter: {posttype: {eq: "portfolio"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  } ` )
  if (result.errors) {
    throw result.errors
  }
  posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: `/portfolio${post.node.fields.slug}`,
      component: portfolioPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })



}




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}