import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Portfolios from "../components/Portfolios"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

import { graphql } from 'gatsby'

const PortfolioPage = ({data}) => (
  <Layout> <SEO title="Portfolio" />

    <Fade bottom>
    	<div className="container">
    		<div className="row">
	    		<div className="col-12 text-center mt-5">
          			<h1> My portfolio </h1>
        		</div>
    		  </div>
		    </div>
	    <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Portfolios portfolios={data.portfolios.edges} />
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Testimonials/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>

  </Layout>
)

export default PortfolioPage

export const portfolioQuery = graphql`
  query {
    portfolios: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
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
