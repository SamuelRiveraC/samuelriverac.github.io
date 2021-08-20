import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Portfolios from "../components/Portfolios"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"


const PortfolioPage = ({data}) => (
  <Layout> <SEO title="Portfolio" />

    <Fade bottom>
    	<div className="container">
    		<div className="row">
	    		<div className="col-12 text-centerr">
          			<h1> My portfolio </h1>
        		</div>
    		</div>
		</div>
	    <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Portfolios/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Testimonials/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>

  </Layout>
)

export default IndexPage

