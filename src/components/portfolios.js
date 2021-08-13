import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Portfolios () {
  return (
    <div className="row portfolio" >
        {data.portfolios.edges.map((item,index) => {
        return <div key={index} className="col-12 col-md-6">
          <Link key={index} className="portfolio__item" to={`/portfolio/${item.node.fields.slug}/`}>
            <div className="portfolio__preview">
              <div className="portfolio__img__container">
                <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
              </div>
            </div>
            <div className="portfolio__link">
              {item.node.frontmatter.title}
            </div>
          </Link>
        </div>
        })}
    </div>
  )
}

export const query = graphql`
  query Homepage {
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