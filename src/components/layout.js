/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"

export default class Layout extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <header className="col-3" >
            <Link to="/" >
              <StaticQuery
                query={graphql` query { site { siteMetadata { title } } } `}
                render={( data ) => ( <h1> {data.site.siteMetadata.title} </h1> )}
              />
            </Link>
            <Link to="/portfolio/">
              My Work
            </Link>
            <Link to="/about/">
              About me
            </Link>
            <Link to="/blog/">
              Blog
            </Link>
            <Link to="/contact/">
              Contact me!
            </Link>
            <Link to="/blog/">
              Download my CV
            </Link>
          </header>
          <main className="col-9" >
            <div className="row">
              <div className="col-12">
              {this.props.children}
              </div>
              <footer className="col-12">
                © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
              </footer>
            </div>
          </main>
        </div>
      </div>
    )
  }
}