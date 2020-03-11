/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
//import { StaticQuery , graphql } from "gatsby"


export default class Layout extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <header className="col-3" >
            <Link to="/" >
              here it goes StaticQuery
            </Link>
            <Link to="/blog/">
              Go to blog
            </Link>
          </header>
          <main className="col-9" >
            <div className="row">
              <div className="col-12">
              {this.props.children}
              </div>
              <div className="col-12">
                © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}