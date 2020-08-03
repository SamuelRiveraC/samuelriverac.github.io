import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from "../components/calltoaction"

const PortfolioPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      
      <article className="container-fluid p-0 portfolio_article">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="section_title my-5">
              {post.frontmatter.title}
            </h1>
          </div>

          <div className="col-12 col-md-4 problem_image">
            <img src="/gatsby-icon.png" width="128px"/>
          </div>
          <div className="col-12 col-md-6 problem_content">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="offset-md-2"></div>
          

          <div className="offset-md-2"></div>
          <div className="col-12 col-md-8 action">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="offset-md-2"></div>

          <div className="offset-md-2"></div>
          <div className="col-12 col-md-6 result_content">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          
          <div className="col-12 col-md-4 result_image">
          </div>

          <div className="col-12">
            sitio

            git
          </div>
          

          
        </div>

        <hr />

      </article>

      <div className="container"> 
        <div className="row">
          <div className="col-12 text-center">
            {previous && (
              <Link className="btn mx-3" to={'portfolio/'+previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link className="btn mx-3" to={'portfolio/'+next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="separator" />

      <CallToAction />

    </Layout>
  )
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`