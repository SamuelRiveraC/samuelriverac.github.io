import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const usePortfolios = () => {
  return useStaticQuery(graphql`
    query {
      portfolios: allMarkdownRemark(
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
  `)
};


const Portfolios = () => {
  const data = { portfolios: { edges:[] } }
  // const data = usePortfolios()
  return (
<div className="container" >
    <div className="row portfolio" >
      <div className="col-12" >
        <h3 className="section_title">   Portfolio   </h3>
      </div>

      <div className="col-12 col-md-6">
        <Link className="portfolio__item" to="#">
          <div className="portfolio__preview">
            <div className="portfolio__img__container">
              <img src="/static/1c2cd7856efc2d8f127493c443bc5251/0d026/orinoco-0.jpg"/>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-12 col-md-6">
        <Link className="portfolio__item" to="#">
          <div className="portfolio__preview">
            <div className="portfolio__img__container">
              <img src="/static/4c3c61cc19ef2c6cb170a86360a09859/dd5bb/Livinglondonway.png" />
            </div>
          </div>
        </Link>
      </div>

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
  </div>
  )
}


export default Portfolios
