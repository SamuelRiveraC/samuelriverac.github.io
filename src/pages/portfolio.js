import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

import Testimonials from "../components/testimonials.js"
import CallToAction from "../components/calltoaction.js"

const PortfolioPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio" />
    <h2 className="section_title">
      My Work        
    </h2>

    <Portfolio portfolios={data.allMarkdownRemark.edges}/>
    
    <div className="separator" />
    <Testimonials />
    <div className="separator" />
    <CallToAction />


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
            thumbnail {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`