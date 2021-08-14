import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Social from "../../content/social.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const icons = {"Email" :faEnvelope, "Linkedin" :faLinkedin,  "Github" :faGithub}



export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
      darkmode: this.readCookie('darkmode') === null ? false : true,
    }
    // Easter Egg 1
    console.log(
      'Hi there, thanks for visiting! if you have any questions about any of my work reach out to me at samuelrivera64@gmail.com',
      'If you would like to visit the repository of my portfolio check https://github.com/SamuelRiveraC/samuelriverac.github.io'
    )
  }

  darkmode() {
    this.setState({darkmode:!this.state.darkmode})
    let expirationDate = new Date()
    expirationDate.setMonth(expirationDate.getMonth()+1)
    this.createCookie('darkmode', this.darkmode, expirationDate.getTime())
  }

  createCookie (key, value, date) {
    var cookie = escape(key) + "=" + escape(value) + ";expires=" + new Date(date).toUTCString() + ";";
    document.cookie = cookie;
  }
  readCookie(name) {
    var key = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(key) === 0) {
        return cookie.substring(key.length, cookie.length);
      }
    }
    return null;
  }



  render () {
    return (
      <div className={this.state.darkmode ? "container-fluid app darkmode" : "container-fluid app"}> 
        <div className="row">

          <div className="nav__toggle" onClick={() => this.darkmode() }>
            {!this.state.darkmode && <FontAwesomeIcon icon={faMoon} size="2x" /> }
            { this.state.darkmode && <FontAwesomeIcon icon={faSun } size="2x" /> }
          </div>





          <main className="col-12" >
              {this.props.children}
          </main>





          <footer className="col-12">
            <div className="row">
              <div className="col-4">
                <StaticQuery
                  query={graphql` query { file(relativePath: { eq: "SRC-Logo.png" }) { childImageSharp { fluid(maxWidth: 128) { ...GatsbyImageSharpFluid } } } } `}
                  render={data => ( <Img width="32px" fluid={data.file.childImageSharp.fluid} /> )}
                />
              </div>

              <div className="col-4">
                {Social.map((data, index) => {
                  return  <a className="social_media" key={index} href={data.text==="Email" ? "mailto:"+data.link : data.link}>
                    <FontAwesomeIcon icon={icons[data.text]} size="2x" /> 
                  </a>
                })}
              </div>

              <div className="col-4">
                © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
              </div>
            </div>
          </footer>

        </div>
      </div>
    )
  }
}