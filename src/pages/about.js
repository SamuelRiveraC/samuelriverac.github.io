import React from "react"
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import CTA from "../components/cta"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About me" />
    <div className="aboutme row" >
      <div className="col-12 col-md-4 aboutme__image">
        <StaticQuery query={ graphql` 
          query { file(relativePath: { eq: "hero.png" }) { childImageSharp { fluid(maxWidth: 1000) { ...GatsbyImageSharpFluid } } } }
        `} render={data => ( <Img className="hero__background" fluid={data.file.childImageSharp.fluid} /> )}
        />
      </div>
      <div className="col-12 col-md-8 aboutme__content">
        <div className="section_title">
          About Me        
        </div>
        <p>
          I am a software developer specialized in web development, with a full stack experience in diverse and modern backend and frontend technologies, always backed up by the agile scrum and kanban project managing methodologies.
        </p>
        <p>
          I am fueled by an obsessive passion to become better everyday and helping you, the small business or startup owner, to do the same. Creating and updating websites or web applications that solve real problems, benefiting your company in valuable ways.
        </p>
        <p>
          I am always available for a challenge! contact me on the form below and i will email you soon!
        </p>
        <p>
          What i do: UI/UX Design • APP Design • Web Design
        </p>
        <p>
          Technologies i often use: (insert colorful icons here)
        </p>
      </div>
  	</div>
  
    <CTA text="Contact me" />    

    <div className="testimonials row" >

    </div>


  </Layout>
)

export default About
