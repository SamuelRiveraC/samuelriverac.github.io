import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import CV from "../components/cv"
export default class Hero extends React.Component {

	render () {
    return (
      <div className="row" >

        <div className="col-12 col-md-6">
          <h1> Front End Engineer & Web developer </h1>
          <p>
            Hi, thanks for checking out my profile! I’m Samuel Rivera, a Front end engineer and web developer with more than 3 years of experience developing purposeful, consistent and attractive interfaces for business, startups and tech companies to appeal to clients and maintain their interest
          </p>
          <button> Contact me </button>
          <CV/>
        </div>

        <div className="col-12 col-md-6">
          <StaticQuery query={ graphql` query {
                file(relativePath: { eq: "hero.png" }) {
                  childImageSharp { fluid(maxWidth: 1024) { ...GatsbyImageSharpFluid }  }
                }
              }
            `} render={data => ( <Img fluid={data.file.childImageSharp.fluid} /> )}
          />
        </div>

        <div className="col-12">
          <div className="hero__arrow" />
        </div>
      </div>
		);
 	}
}



