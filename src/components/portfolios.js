import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Portfolios = (props) => {

  return (
  <div className="container" >
    <div className="row portfolio" >
      <div className="col-12" >
        <h2>   Portfolio   </h2>
      </div>

      { props.portfolios.map((item,index) => {
        return <div key={index} className="col-12 col-md-4">
          <Link key={index} className="portfolio__item" to={`portfolio${item.node.fields.slug}`}>
            <div className="portfolio__preview">
              <div className="portfolio__img__container">
                <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
              </div>
            </div>
          </Link>
        </div>
        })
      }
    </div>
  </div>
  )
}

export default Portfolios