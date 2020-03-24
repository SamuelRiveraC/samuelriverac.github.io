import React from "react"
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

export default class Hero extends React.Component {

	render () {
    	return (
		<div className="hero row" >
  	  
      <StaticQuery
         query={graphql`
          query {
            file(relativePath: { eq: "hero.png" }) { childImageSharp { fluid(maxWidth: 1000) {   ...GatsbyImageSharpFluid } } }
          }
        `}
        render={data => (
          <Img className="hero__background" fluid={data.file.childImageSharp.fluid} />
        )}
      />
      

      <div className="hero__overlay" />

  	  <div className="hero__headline">
        <div className="hero__subtitle"> FULL STACK WEB DEVELOPER </div>
        <div className="hero__title"> SAMUEL </div>
        <div className="hero__title hero__title--bold"> RIVERA C </div>
  	  </div>
  	  <div className="hero__arrow"></div>
  	</div>
		);
  	}
}



