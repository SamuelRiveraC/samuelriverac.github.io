import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <div>
          <h1>
            Portfolio: {post.frontmatter.title}
          </h1>
          <p>
            {post.frontmatter.date}
          </p>
        </div>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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