import React from "react"
import {Helmet} from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"
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

        <Helmet>
         {/*

          Hi there, thanks for visiting! if you have any questions about any of my work reach out to me at samuelrivera64@gmail.com
          If you would like to visit the repository of my portfolio check https://github.com/SamuelRiveraC/samuelriverac.github.io

          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRC
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCNNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCNWWSRCSRCSRCSRCSRCSRCSRCSRCM
          SRCSRCSRCSRCXOxoc:;,,'''''''''''''''''''''''''''''',:kXOc,''''''''''''''''''''''''''''''''''',;cokKNSRCSRCSRCSRCSRCSRCMM
          SRCSRCMMNOo;.                                     .cOWMW0c.                                       .,lONSRCSRCSRCSRCSRCMM
          SRCSRC0o'                                       .l0WSRCSRCOc'.                                        ,dXWSRCSRCSRCSRCMM
          SRCW0c.                                       .oKWSRCSRCSRCWNO:.                                        'dNSRCSRCSRCSRCM
          MMNd.                                       'dXWSRCSRCSRCSRCSRCO:.                                        :0WSRCSRCSRCMM
          MMNx'          .'codxkkkkkkkkkkkkkkkkkkkkkkOXWSRCSRCSRCSRCSRCSRCN0kkkkkkkkkkkkkkkkkkkkkkkkxdo:'            ,0SRCSRCSRCMM
          SRCMXd'      .l0NWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCWNOc.          ;KSRCSRCSRCM
          kdKWMMXd'   :KWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCWO,          lNSRCSRCSRC
          ' .oKWMMXd;lXSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMWNXXXXXXXXXXXXXXXXNWSRCSRCSRCSRCSRCSRCSRCSRCSRCM0,         ,0SRCSRCSRC
          .   .lKWMMNNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCKl'..............'lKWSRCSRCSRCSRCSRCSRCSRCSRCSRCo         .kSRCSRCSRC
          .     .lKWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCXx,               .oKWSRCSRCSRCSRCSRCSRCSRCSRCWd.        .kSRCSRCSRC
          .       .oKWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCXd'               .oKWSRCSRCSRCSRCSRCSRCSRCMX:         '0SRCSRCSRC
          ;         .lKWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCXd'               .oKWSRCSRCSRCSRCSRCSRCMXl.         cNSRCSRCSRC
          x.          .oKWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCXd:'              .oKWSRCSRCSRCSRCSRCNk;          'OSRCSRCSRCM
          No.           .oKWSRCSRCSRCSRCSRCSRCWWSRCSRCSRCSRCSRCSRCSRCWWXd'              'oXWSRCMNKKKKK0kl'           .xWSRCSRCSRCM
          MNd.            .lKWSRCSRCNk:''''''',:ldkKWSRCSRCSRCSRCSRCSRCMMXo.              'dXWMMXd,....             'kWSRCSRCSRCMM
          SRCO;             .lKWSRCSRC0c.          .;oONSRCSRCSRCSRCSRCSRCMKo.              'dXSRCO:.             .cKWSRCSRCSRCSRC
          SRCMNx,             .lKWSRCSRC0c.            ,oKWSRCSRCSRCSRCSRCSRCKo.              'dXSRCO:.         .:OWSRCSRCSRCSRCMM
          SRCSRCNOc'            .lKWSRCSRC0c.            .oXSRCSRCSRCSRCSRCSRCWKl.              'xXSRCO:.    .,o0WSRCSRCSRCSRCSRCM
          SRCSRCSRCNOo:'.         .lKWSRCSRC0c.            ,kWSRCSRCSRCSRCSRCSRCWKl.              ,xNSRCOc:lxKWSRCSRCSRCSRCSRCSRCM
          SRCSRCSRCSRCWNKOxdoooooood0WSRCSRCMWOc.           .dNSRCSRCSRCSRCSRCSRCMWKl.              ,xNSRCWSRCSRCSRCSRCSRCSRCSRCMM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMW0c.          .xWSRCSRCSRCSRCSRCSRCSRC0l.              ,xNSRCSRCSRCSRCSRCSRCSRCSRCM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCW0c.         '0SRCSRCSRCSRCSRCSRCSRCMW0l.              ,kNSRCSRCSRCSRCSRCSRCSRCMM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRC0c.        oWSRCSRCSRCSRCSRCSRCSRCSRC0c.              ;kNSRCSRCSRCSRCSRCSRCSRC
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMW0c.      :NSRCSRCSRCSRCSRCSRCSRCSRCMW0c.              ;kNSRCSRCSRCSRCSRCSRCM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCW0c.    :XSRCSRCSRCSRCSRCSRCSRCSRCSRCWOc.              ;kNSRCSRCSRCSRCSRCMM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMMNxkNSRC0c.  lNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCO:.             .;kNSRCSRCSRCSRCSRC
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMXl. ;kNSRC0c;kSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCO:.             .:ONSRCSRCSRCSRCM
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMWXx,     ;kNSRCNWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMWO:.             .:OWSRCSRCSRCMM
          SRCSRCSRCWXKKKKKKKKKKKKKKKKKKKKKKK0kdc.         ;kNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCNO:.             .:OWSRCSRCSRC
          SRCSRCMWKl'........................              .kWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMNk;.             .cOWSRCSRCM
          SRCSRC0l.                                       'xNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMNk;.             .c0WSRCMM
          SRCW0l.                                       'dXSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMMNk;              .c0WSRC
          MW0c.                                      'ckNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCNk;              .c0WM
          Oc.                                  ..,:oOXWSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCMNk,              .l0
          OSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCdxO0XNSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCOSRCSRCSRCSRCSRC0
          SRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRCSRC

          Hi there, thanks for visiting! if you have any questions about any of my work reach out to me at samuelrivera64@gmail.com
          If you would like to visit the repository of my portfolio check https://github.com/SamuelRiveraC/samuelriverac.github.io
        */}
        </Helmet>
  

        <div className="nav__toggle" onClick={() => this.darkmode() }>
          {!this.state.darkmode && <FontAwesomeIcon icon={faMoon} size="2x" /> }
          { this.state.darkmode && <FontAwesomeIcon icon={faSun } size="2x" /> }
        </div>

        {this.props.children}

        <footer className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <StaticImage src="../images/SRC-Logo.png" alt="logo" width="64" height="64" />
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