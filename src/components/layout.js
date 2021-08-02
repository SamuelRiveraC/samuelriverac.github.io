import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

import Social from "../../content/social.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars,faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const icons = {"Email" :faEnvelope,  "Facebook" :faFacebook,  "Instagram" :faInstagram,  "Linkedin" :faLinkedin,  "Github" :faGithub}



export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
      darkmode: this.readCookie('darkmode') === null ? false : true,
    }
    console.log('Hi there, thanks for visiting! if you have any questions about any of my work reach out to me at samuelrivera64@gmail.com',
                'if you would like to visit the repository of my portfolio check https://github.com/SamuelRiveraC/samuelriverac.github.io')
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
          <div className="nav__open" onClick={() => this.setState({navbar:!this.state.navbar})}>
            <FontAwesomeIcon icon={faBars} size="2x" /> 
          </div>
  
          <div className="nav__toggle" onClick={() => this.darkmode() }>
            {!this.state.darkmode && <FontAwesomeIcon icon={faMoon} size="2x" /> }
            {this.state.darkmode && <FontAwesomeIcon icon={faSun} size="2x" /> }
          </div>

          <nav className={!this.state.navbar && "open"} style={{width: this.state.navbar ? "100vw" : "0vw"}}>
            <div className="overlay"> </div>

            <div className="nav__icon_container"> 
              <div className="nav__close" onClick={() => this.setState({navbar:!this.state.navbar})}>
                <FontAwesomeIcon icon={faTimes} size="2x" /> 
              </div>
            </div>

            <Link to="/"  onClick={() => this.setState({navbar:!this.state.navbar})} >
              Home 
            </Link>
            <Link to="/portfolio/" onClick={() => this.setState({navbar:!this.state.navbar})} >
              My Work
            </Link>
            <Link to="/about/" onClick={() => this.setState({navbar:!this.state.navbar})} >
              About me
            </Link>
            <Link to="/contact/" onClick={() => this.setState({navbar:!this.state.navbar})} >
              Contact me!
            </Link>
            <a href="/Samuel-rivera-c-resume.pdf" target="_blank"  onClick={() => this.setState({navbar:!this.state.navbar})} >
              Check my CV
            </a>
          </nav>

          <main className="col-12" >
              {this.props.children}
          </main>

          <footer className="col-12">
            <div className="row justify-content-center">
              <div className="col-4 col-sm-2 col-md-2 col-lg-1">
                <StaticQuery
                  query={graphql` query { file(relativePath: { eq: "SRC-Logo.png" }) { childImageSharp { fluid(maxWidth: 128) { ...GatsbyImageSharpFluid } } } } `}
                  render={data => (
                    <Img width="32px" fluid={data.file.childImageSharp.fluid} />
                  )}
                />
              </div>
            </div>

            
            <div className="row justify-content-center">
              {Social.map((data, index) => {
                return  <a className="social_media" key={index} href={data.text==="Email" ? "mailto:"+data.link : data.link}>
                  <FontAwesomeIcon icon={icons[data.text]} size="2x" /> 
                </a>
              })}
            </div>


            <div className="row justify-content-center">
              <div className="col-12">
                © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
              </div>
            </div>

          </footer>

        </div>
      </div>
    )
  }
}

/*
**ABOUT US** 
[FOUNDERS] started [COMPANY] because [EXPLAIN PROBLEM IN YOUR INDUSTRY].
That's why [DESCRIBE JOURNEY TO SOLUTION].
Along the way, [SHARE MILESTONES AND WINS].
We want to be [STATE YOUR MISSION GOING FORWARD].

**PORTFOLIO **

ALWAYS TAKE THIS APPROACH (P.A.R.)
1 PROBLEM > 2 ACTION > 3 RESULT

🔺 Here's the portfolio that got me hired (web developer) = https://www.youtube.com/watch?v=R0JTAUg9PX0
🔺 5 pro tips for a BANGIN’ developer portfolio | Software Developer Jobs =https://www.youtube.com/watch?v=fvBcUanfUMs
🔺UH WHAT? Junior web developer portfolio has only ONE project = https://www.youtube.com/watch?v=nDUlH8Wyltc

*/