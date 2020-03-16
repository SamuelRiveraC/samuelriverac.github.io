import React from "react"
import { StaticQuery, graphql } from "gatsby"


export default class Blog extends React.Component {
  render () { return (
    <div className="blog w-100" >
      <div className="section_title">
        Want to learn cool stuff? read my blog!         
      </div>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
              filter: {frontmatter: {posttype: {eq: "post"}}},
              limit: 3
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
            return <div className="col-12 col-md-4" key={index} >
              {JSON.stringify(item.node)}
            </div>
            })}
          </div>
        )}
      />
    </div>
  ) }
}