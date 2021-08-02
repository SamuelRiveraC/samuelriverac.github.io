import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheckCircle, faExclamationTriangle)

export default class Contact extends React.Component {
	constructor(props) {
	  super(props);
      this.state = {
      	names: '',
      	email: '',
      	message: '',

        //this package
      	namesValid: false,
    	emailValid: false,
    	messageValid: false,

        namesFirst: true,
        emailFirst: true,
        messageFirst: true,
  
    	responseClass: 'none',
    	responseTitle: '',
        responseMessage:'',
    	responseIcon:'',
      };

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}	
	handleChange(input,event) {
		this.validation(input,event.target.value)
	}
	validation(input,value) {
    this.setState({[input]: value});
		this.setState({[input+'First']: false});
		if (input === "email") {
			this.setState({[input+'Valid']: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false});
		} else {
			this.setState({[input+'Valid']: value !== '' ? true : false});
		}
	}
	handleSubmit(event) {
	  event.preventDefault();

	  axios.post(
	    "https://formcarry.com/s/AyEbozFGC5B",  
	    {
	      names: this.state.names,
	      email: this.state.email,
	      message: this.state.message,
	      location: this.props.location,
	      origin: this.props.origin
	    }, 
	    {headers: {"Accept": "application/json"}}
	  )
	  .then((response) => {
	    if(response.data.code === 200){
	    	this.setState ({ responseClass: response.data.status })
	    	this.setState ({ responseTitle: response.data.title })
	    	this.setState ({ responseMessage: response.data.message })
	      this.setState ({ responseIcon: "" })
	    } else {
	    	this.setState ({ responseClass: "error" })
	    	this.setState ({ responseTitle: "Sorry!" })
	    	this.setState ({ responseMessage: "Something went wrong! But You did everything ok! Please try again" })
	      this.setState ({ responseIcon: "" })
	    }
	  })
	  .catch((error) => {
	    console.log(error);
	  });


	  setTimeout(() => {
	  	this.setState ({ responseClass: "none" })
	  }, 10000);

	  setTimeout(() => {
	    this.setState ({ responseTitle: "" })
	    this.setState ({ responseMessage: "" })
	    this.setState ({ responseIcon: "" })
	  }, 11000);
	}

	render () {
		return (
  		<div>

			<form onSubmit={this.handleSubmit} className="row">
				<div className="col-12 col-md-6">
					<div className="input">
						<label for="name" >Your name</label>
					    <input type="text" for="name" className="form-control" value={this.state.names} onChange={this.handleChange.bind(this, 'names')} />
					    {(this.state.namesValid && !this.state.namesFirst) || (this.state.namesValid  === false && !this.state.namesFirst === false )  ?
			       		<br /> : <p className="error">  Please enter your names  </p> }
					</div>
				<div className="col-12 col-md-6">
					<div className="input">
					    <label for="email" >Your Email</label>
					    <input name="email" type="email"  className="form-control" onChange={this.handleChange.bind(this, 'email')} />
					    {(this.state.emailValid  && !this.state.emailFirst) || (this.state.emailValid  === false && !this.state.emailFirst === false) ?
			       		<br /> : <p className="error"> Please enter your email in this format: yourname@example.com </p>}
					</div>
				</div>

				<div className="col-12">
					<div className="input">
					    <label for="message">About your business and your needs </label>
					    <textarea name="message" className="form-control"  onChange={this.handleChange.bind(this, 'message')}></textarea>
					    {(this.state.messageValid && !this.state.messageFirst) || (this.state.messageValid  === false && !this.state.messageFirst === false) ?
			     		<br /> : <p className="error"> Please let me know about you! that's how I can help you :)  </p> }
					</div>
				</div>

				<div className="col-12 text-center">
				 	<div className="contact__button_wrap">
						<button type="submit" className="btn btn--cta" disabled={!this.state.namesValid || !this.state.emailValid || !this.state.messageValid}>
							Submit?
						</button>
				 	</div>
				</div>
			</form>


			<div className="row">
				<div className="col-12 text-center">
					<div className={'alert alert--'+this.state.responseClass}>
						<p className="title">{this.state.responseTitle} </p>
						<p>{this.state.responseMessage} </p>
						{ this.state.responseClass !== "none" && 
							<p><FontAwesomeIcon icon={this.state.responseClass === 'error' ?
								faExclamationTriangle : faCheckCircle}
							size="2x" /></p>
			    		}
						</div>
					</div>
				</div>
			</div>
  		</ div>
  		)
  	}
}