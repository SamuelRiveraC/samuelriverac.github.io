import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default class Hero extends React.Component {
	render () {
    	return (
		<div className="hero row" >
  	  <img className="hero__background" />



  	  <div className="hero__headline">
        {this.props.children}
  	  </div>
  	  <div className="hero__arrow"></div>
  	</div>
		);
  	}
}
