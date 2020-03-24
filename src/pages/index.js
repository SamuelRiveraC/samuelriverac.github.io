import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import Blog from "../components/blog"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <Hero />

    <div className="section_title">
      My Work        
    </div>
    <Portfolio portfolios={data.portfolios.edges}/>

    <div className="section_title">
      Want to learn cool stuff? read my blog!              
    </div>
    <Blog posts={data.posts.edges}/>

  </Layout>
)
export const query = graphql`
  query Homepage {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "post"}}},
      limit: 3

    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    portfolios: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "portfolio"}}},
      limit: 2
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default IndexPage
