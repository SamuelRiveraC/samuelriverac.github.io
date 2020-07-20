import React from "react"
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import CV from "../components/cv"

export default class Hero extends React.Component {

	render () {
    	return (
		<div className="hero row" >

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

          <div className="hero__title">
            SAMUEL RIVERA
          </div>

          <div className="hero__subtitle">
            FULL STACK WEB DEVELOPER
          </div>
  
          <div className="hero__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nulla, reiciendis, cum iure nemo excepturi! Expedita mollitia quas laudantium doloribus velit consectetur hic repellendus, dignissimos minima quis unde blanditiis labore.
          </div>


          <div className="row justify-content-center">  
            <div className="btn btn--primary mx-3 mt-3">  
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



