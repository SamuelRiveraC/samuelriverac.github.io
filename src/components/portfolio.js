import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default class Portfolio extends React.Component {
  render () { return (
    <div className="portfolio w100" >
      <div className="section_title">
        My Work        
      </div>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
              filter: {frontmatter: {posttype: {eq: "portfolio"}}},
              limit: 2
            ) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="row" >
            {data.allMarkdownRemark.edges.map((item,index) => {
            return <div className="col-12 col-md-6" key={index} >
              {JSON.stringify(item.node)}
            </div>
            })}
          </div>
        )}
      />
    </div>
  ) }
}