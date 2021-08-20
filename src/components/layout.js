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

          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNWWMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMWXOxoc:;,,'''''''''''''''''''''''''''''',:kXOc,''''''''''''''''''''''''''''''''''',;cokKNMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMNOo;.                                     .cOWMW0c.                                       .,lONMMMMMMMMMMMMMMMMM
          MMMMMW0o'                                       .l0WMMMMMWOc'.                                        ,dXWMMMMMMMMMMMMMM
          MMMW0c.                                       .oKWMMMMMMMMMWNO:.                                        'dNMMMMMMMMMMMMM
          MMNd.                                       'dXWMMMMMMMMMMMMMMWO:.                                        :0WMMMMMMMMMMM
          MMNx'          .'codxkkkkkkkkkkkkkkkkkkkkkkOXWMMMMMMMMMMMMMMMMMMN0kkkkkkkkkkkkkkkkkkkkkkkkxdo:'            ,0MMMMMMMMMMM
          MMMMXd'      .l0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNOc.          ;KMMMMMMMMMM
          kdKWMMXd'   :KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,          lNMMMMMMMMM
          ' .oKWMMXd;lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXXXXXXXXXXXXXXXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,         ,0MMMMMMMMM
          .   .lKWMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl'..............'lKWMMMMMMMMMMMMMMMMMMMMMMMMMMWo         .kMMMMMMMMM
          .     .lKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXx,               .oKWMMMMMMMMMMMMMMMMMMMMMMMMWd.        .kMMMMMMMMM
          .       .oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd'               .oKWMMMMMMMMMMMMMMMMMMMMMMX:         '0MMMMMMMMM
          ;         .lKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd'               .oKWMMMMMMMMMMMMMMMMMMMXl.         cNMMMMMMMMM
          x.          .oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd:'              .oKWMMMMMMMMMMMMMMMNk;          'OMMMMMMMMMM
          No.           .oKWMMMMMMMMWNNNNNNNNNWWMMMMMMMMMMMMMMMMMMMMMWWXd'              'oXWMMMMNKKKKK0kl'           .xWMMMMMMMMMM
          MNd.            .lKWMMMMMMNk:''''''',:ldkKWMMMMMMMMMMMMMMMMMMMMXo.              'dXWMMXd,....             'kWMMMMMMMMMMM
          MMWO;             .lKWMMMMMW0c.          .;oONMMMMMMMMMMMMMMMMMMMKo.              'dXMMWO:.             .cKWMMMMMMMMMMMM
          MMMMNx,             .lKWMMMMMW0c.            ,oKWMMMMMMMMMMMMMMMMMWKo.              'dXMMWO:.         .:OWMMMMMMMMMMMMMM
          MMMMMMNOc'            .lKWMMMMMW0c.            .oXMMMMMMMMMMMMMMMMMMWKl.              'xXMMWO:.    .,o0WMMMMMMMMMMMMMMMM
          MMMMMMMMWNOo:'.         .lKWMMMMMW0c.            ,kWMMMMMMMMMMMMMMMMMMWKl.              ,xNMMWOc:lxKWMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMWNKOxdoooooood0WMMMMMMMWOc.           .dNMMMMMMMMMMMMMMMMMMMWKl.              ,xNMMWWMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.          .xWMMMMMMMMMMMMMMMMMMMMW0l.              ,xNMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.         '0MMMMMMMMMMMMMMMMMMMMMMW0l.              ,kNMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.        oWMMMMMMMMMMMMMMMMMMMMMMMW0c.              ;kNMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.      :NMMMMMMMMMMMMMMMMMMMMMMMMMW0c.              ;kNMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.    :XMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc.              ;kNMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxkNMMW0c.  lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.             .;kNMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl. ;kNMMW0c;kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.             .:ONMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx,     ;kNMMWNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.             .:OWMMMMMMMMMMM
          MMMMMMMMMWXKKKKKKKKKKKKKKKKKKKKKKK0kdc.         ;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO:.             .:OWMMMMMMMMM
          MMMMMMMWKl'........................              .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.             .cOWMMMMMMM
          MMMMMW0l.                                       'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.             .c0WMMMMM
          MMMW0l.                                       'dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;              .c0WMMM
          MW0c.                                      'ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;              .c0WM
          Oc.                                  ..,:oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk,              .l0
          OddddddddddddddddddddddddddddddddddxO0XNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOddddddddddddddd0
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

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