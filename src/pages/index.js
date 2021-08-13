import React from "react"
import { graphql } from 'gatsby'

import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import WhatIDo from "../components/WhatIDo"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import WorkWithMe from "../components/WorkWithMe"
import Footer from "../components/Footer"


const IndexPage = ({data}) => (
  <Layout> <SEO title="Home" />

    <Fade bottom>
      <Hero />
    </Fade>

    <Fade bottom>
      <WhatIDo />
    </Fade>

    <Fade bottom>
      <Experience/>
    </Fade>

    <Fade bottom>
      <Portfolio />
    </Fade>

    <Fade bottom>
      <WorkWithMe />
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>

  </Layout>
)

export default IndexPage

