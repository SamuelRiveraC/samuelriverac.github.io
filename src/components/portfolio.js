import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default class Portfolio extends React.Component {
  render () { return (
    <div className="row portfolio" >
        {this.props.portfolios.map((item,index) => {
        return <div className="col-12 col-md-6 portfolio__item" key={index} >
          <div className="portfolio__preview">
            <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
          </div>
            <Link className="portfolio__link" to={`/portfolio/${item.node.fields.slug}/`}>
              {item.node.frontmatter.title}
            </Link>
        </div>
        })}
    </div>
  ) }
}