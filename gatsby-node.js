const fs = require('fs')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioPost = path.resolve(`./src/templates/portfolio.js`)
  
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



//comment
exports.onPostBuild = ({ store }) => {
  const { directory } = store.getState().program
  const indexHtmlPath = path.join(directory, 'public', 'index.html')

  const indexHtml = fs.readFileSync(indexHtmlPath, {
    encoding: 'utf8'
  })

  const comment = '<!-- Hi! Do you wanted to check my source code to see how it is programmed?\nI\'ll tell you first its gatsby.js, you can check the repository here https://github.com/SamuelRiveraC/samuelriverac.github.io. \nThanks for Visiting my site!. Btw i\'m looking for a Job, chances are that if you are looking this is because of that, so thanks for considering me! --> '

  fs.writeFileSync(indexHtmlPath, `${comment}${indexHtml}`)
}