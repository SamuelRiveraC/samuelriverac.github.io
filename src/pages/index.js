import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="btn">
      Base Lorem
    </div>

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
