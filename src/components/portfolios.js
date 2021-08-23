import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolios = (props) => {

  return (
  <div className="container" >
    <div className="row portfolio" >
      <div className="col-12" >
        <h2>   Portfolio   </h2>
      </div>
      { props.portfolios.map((item,index) => {
        return <div key={index} className="col-12 col-md-4">
          <Link key={index} className="portfolio__item" to={`/portfolio${item.node.fields.slug}`}>
            <div className="portfolio__preview">
              <div className="portfolio__img__container">
                <GatsbyImage image={getImage(item.node.frontmatter.thumbnail)} alt={item.node.fields.slug} />
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