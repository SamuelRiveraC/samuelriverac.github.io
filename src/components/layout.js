/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
    }
  }



  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="logo" onClick={() => this.setState({navbar:!this.state.navbar})}>
            <StaticQuery
               query={graphql`
                query { file(relativePath: { eq: "SRC-Logo.png" }) { childImageSharp { fluid(maxWidth: 128) { ...GatsbyImageSharpFluid } } } }
              `}
              render={data => (
                <Img fluid={data.file.childImageSharp.fluid} />
              )}
            />
          </div>
  
          <nav style={{width: this.state.navbar ? "100vw" : "0vw"}}>
            <div onClick={() => this.setState({navbar:!this.state.navbar})}> 
              X
            </div>
            <Link to="/" >
              Home
            </Link>
            <Link to="/portfolio/">
              My Work
            </Link>
            <Link to="/about/">
              About me
            </Link>
            <Link to="/contact/">
              Contact me!
            </Link>
            <Link to="/">
              Download my CV
            </Link>
          </nav>

          <main className="col-12" >
              {this.props.children}
          </main>

          <footer className="col-12">
            © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
          </footer>

        </div>
      </div>
    )
  }
}