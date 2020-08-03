import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import CV from "../components/cv"

export default class Hero extends React.Component {

	render () {
    	return (
		<div className="hero row" >
      
      <div className="hero__overlay"> </div>

      <StaticQuery
         query={graphql`
          query {
            file(relativePath: { eq: "hero.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid 
                } 
              }
            }
          }
        `}
        render={data => (
          <Img className="hero__background" fluid={data.file.childImageSharp.fluid} />
        )}
      />
      

      <div className="col-12 col-md-6 px-1 px-lg-3 px-xl-5">
        <div className="hero__headline">

          <h1 className="hero__title">
            SAMUEL RIVERA C
          </h1>

          <h2 className="hero__subtitle">
            FULL STACK WEB DEVELOPER
          </h2>

          <div className="row justify-content-center">  
            <Link className="btn btn--primary mx-3 mt-3" to="/contact" >
              &nbsp;&nbsp;&nbsp;&nbsp; Contact me &nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
            <CV extraClasses="mx-3 mt-3"/>
          </div>
        </div>
      </div>

  	  


  	  <div className="hero__arrow"></div>
  	</div>
		);
  	}
}



