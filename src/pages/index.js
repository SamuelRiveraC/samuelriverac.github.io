import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import AboutMe from "../components/aboutme"
import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <div className="hero__subtitle"> FULL STACK WEB DEVELOPER </div>
      <div className="hero__title"> SAMUEL </div>
      <div className="hero__title hero__title--bold"> RIVERA C </div>
    </Hero>

    <Portfolio />

    <AboutMe />

    <Blog />

    <button className="btn" disabled>
      Disabled Lorem
    </button>

    <div className="btn btn--primary">
      btn--primary
    </div>
    <div className="btn btn--secondary">
      btn--secondary
    </div>
    <div className="btn btn--tertiary">
      btn--tertiary
    </div>


  </Layout>
)

export default IndexPage
