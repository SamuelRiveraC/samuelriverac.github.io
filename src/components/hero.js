import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CV from "../components/cv"
export default class Hero extends React.Component {

	render () {

    const executeScroll = () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }

    return (
    <div className="container" >
      <div className="row hero pb-5 pb-md-0">

        <div className="col-12 col-md-6 text-center text-md-left order-2 order-md-1">
          <h1> Front End Engineer & Web developer </h1>
          <p>
            Hi, thanks for checking out my profile! I’m Samuel Rivera, a Front end engineer and web developer with more than 3 years of experience developing purposeful, consistent and attractive interfaces for business, startups and tech companies to appeal to clients and maintain their interest
          </p>
          <button className="primary"> Contact me </button>
          <CV/>
        </div>

        <div className="col-12 col-md-6 text-center  order-1 order-md-2">
          <StaticImage  className="hero__img" src="../images/hero.png" alt="logo" />
        </div>


        <a className="hero__arrow" onClick={() => executeScroll()} />

      </div>
    </div>
		);
 	}
}



