import React from "react"
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';



import Layout from "../components/layout"
import SEO from "../components/seo"

import Testimonials from "../components/testimonials.js"
import CallToAction from "../components/calltoaction.js"


const About = () => (
  <Layout>
    <SEO title="About me" />

    <div className="aboutme row" >
      <div className="col-12 col-md-4 px-0 pr-md-2 aboutme__image">
        <StaticQuery query={ graphql` 
          query { file(relativePath: { eq: "hero.png" }) { childImageSharp { fluid(maxWidth: 1000) { ...GatsbyImageSharpFluid } } } }
          `} render={data => ( <Img className="hero__background" fluid={data.file.childImageSharp.fluid} /> )}
        />

      </div>
      <div className="col-12 col-md-8 aboutme__content">
        <h3 className="section_title my-5">   About Me   </h3>
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
          I am a software developer specialized in web development, with a full stack experience in diverse and modern backend and frontend technologies, always backed up by the agile scrum and kanban project managing methodologies.
        </p>
        <p>
          I am fueled by an obsessive passion to become better everyday and helping you, the small business or startup owner, to do the same. Creating and updating websites or web applications that solve real problems, benefiting your company in valuable ways.
        </p>
        <p>
          I am always available for a challenge! contact me on the form below and i will email you soon!
        </p>
      </div>
  	</div>
    
    <Fade bottom>
      <Testimonials />
    </Fade>

    <div className="separator" />
    
    <CallToAction />
    
  </Layout>
)

export default About
