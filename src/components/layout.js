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
      darkmode: localStorage.getItem('darkmode') === "true" ? true : false
    }
    // Easter Egg 1
    console.log(
      'Hi there, thanks for visiting! if you have any questions about any of my work reach out to me at samuelrivera64@gmail.com',
      'If you would like to visit the repository of my portfolio check https://github.com/SamuelRiveraC/samuelriverac.github.io'
    )
  }
  darkmode() {
    this.setState({darkmode: !this.state.darkmode})

    localStorage.setItem('darkmode', !this.state.darkmode);
  }


  render () {
    return (
      <div className={this.state.darkmode ? "app darkmode" : "app"}> 

        <div className="nav__toggle" onClick={() => this.darkmode() }>
          {!this.state.darkmode && <FontAwesomeIcon icon={faMoon} size="2x" /> }
          { this.state.darkmode && <FontAwesomeIcon icon={faSun } size="2x" /> }
        </div>

        {this.props.children}

        <footer className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              {Social.map((data, index) => {
                return  <a className="social_media" key={index} href={data.text==="Email" ? "mailto:"+data.link : data.link}>
                  <FontAwesomeIcon icon={icons[data.text]} size="2x" /> 
                </a>
              })}
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              © {new Date().getFullYear()} SamuelRiveraC.com All Rights reserved.
            </div>
          </div>
        </footer>

      </div>
    )
  }
}