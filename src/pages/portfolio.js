import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"

const PortfolioPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="section_title">
      My Work        
    </div>
    <div className="portfolio w100" >
 	   <Portfolio portfolios={data.allMarkdownRemark.edges}/>
    </div>
  </Layout>
)
export default PortfolioPage

export const portfolioQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "portfolio"}}}
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