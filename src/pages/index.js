import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import WhatIDo from "../components/WhatIDo"
import Experience from "../components/Experience"
import Portfolios from "../components/Portfolios"
import Footer from "../components/Footer"


const IndexPage = ({data}) => (
  <Layout> <SEO title="Home" />

    <Fade bottom>
      <Hero />
      <hr className="separator"/>
    </Fade>

    <Fade bottom>
      <WhatIDo />
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Experience/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Portfolios/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>

  </Layout>
)

export default IndexPage

