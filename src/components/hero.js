import React from "react"

export default class Hero extends React.Component {
	render () {
    	return (
		<div className="hero" >
  	      	<img className="hero__background" />
  	      	<p className="hero__title">
  	     	   {this.props.children}
  	      	</p>
  	      	<span className="hero__arrow"></span>
  	    </div>
		);
  	}
}
