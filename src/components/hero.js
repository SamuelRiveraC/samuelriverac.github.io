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

          <img width="128" src="/SRC-Logo.png" alt="Samuel Rivera C Logo" />

          <h2 className="hero__title">
            Front End Engineer & Web developer
          </h2>
          <p className="px-0 px-lg-5">
            I’m Samuel Rivera, a Front end engineer and web developer with more than 3 years of experience developing purposeful, consistent and attractive interfaces for business, startups and tech companies to appeal to clients and maintain their interest
          </p>

          <div className="row justify-content-center">  
            <div className="btn btn--primary mx-3 mt-3" >
              &nbsp;&nbsp;&nbsp;&nbsp; Contact me &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <CV extraClasses="mx-3 mt-3"/>
          </div>
        </div>
      </div>

  	  


  	  <div className="hero__arrow"></div>
  	</div>
		);
  	}
}



