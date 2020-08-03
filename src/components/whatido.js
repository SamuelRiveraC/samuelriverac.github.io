import React from "react"
import { Link } from "gatsby"
import CV from "../components/cv"
import Skills from "../../content/skills.json"

               

export default class WhatIDo extends React.Component {
  render () { return (
    <div className="row align-items-center" >
	    <div className="col-12 col-md-6" >
	   		<div className="card" >
	   			<h4> Hard Skills </h4>
	   			<p>
    			  I am a software developer specialized in web development, with a full stack experience in diverse and modern backend and frontend technologies, always backed up by the agile scrum and kanban project managing methodologies.
    			</p>
    			<p>
    			  I am fueled by an obsessive passion to become better everyday and helping you, the small business or startup owner, to do the same. Creating and updating websites or web applications that solve real problems, benefiting your company in valuable ways.
    			</p>
    			<p>
    			  Technologies i often use:
    			</p>


          <div className="badge"> 
            <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
          </div>


          <div className="badge text-left px-0 mx-0 mt-3 mb-1">Back end</div>
          <div className="row backend"> 
            {Skills.back.map((data, index) => {
              return <div className="badge"> 
                {data}
              </div>

            })}
          </div>
          <div className="badge text-left px-0 mx-0 mt-3 mb-1">Front end</div>
          <div className="row front"> 
            {Skills.front.map((data, index) => {
              return <div className="badge"> 
                {data}
              </div>
            })}
          </div>
          <div className="badge text-left px-0 mx-0 mt-3 mb-1">Databases</div>
          <div className="row db"> 
            {Skills.db.map((data, index) => {
              return <div className="badge"> 
                {data}
              </div>
            })}
          </div>



	    	</div>
	    </div>

	    <div className="col-12 col-md-6" >
	    	<div className="card" >
	    		<h4> Soft Skills </h4>
    			<p>
    			  I am fueled by an obsessive passion to become better everyday and helping you, the small business or startup owner, to do the same. Creating and updating websites or web applications that solve real problems, benefiting your company in valuable ways.
    			</p>
    			<p>
    			  I am always available for a challenge! contact me on the form below and i will email you soon!
    			</p>
	    	</div>
	    	<div className="w100 text-center">
          <Link className="btn btn--primary m-3" to="/contact" >
            Know more about me
          </Link>
          <CV extraClasses="m-3"/>
	    	</div>
	    </div>
    </div>
  ) }
}
/*

          <Img className="hero__background" fluid={data.file.childImageSharp.fluid} />
export const query = graphql`
  query images {
    allFile(filter: { relativePath: { regex: "/techstacks/.*.png/" } } ) 
    {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`;*/