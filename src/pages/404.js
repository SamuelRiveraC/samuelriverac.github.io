import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="separator" />
			<div className="row">  	
				<div className="col-12 text-center">  	
  					<h1>404 NOT FOUND</h1> 
  					<br />
  					<h3>These aren't the links you are looking for.</h3>
  					<br />
  					<p>Lucky for you I have some links that you may be interested on :)</p>
						<br />
  		      <Link className="mb-3" to="/" >
  		        Return to my landing page website
  		      </Link><br /><br />
  		      <Link className="mb-3" to="/portfolio/">
  		        Look my Work and how my experience can help you
  		      </Link><br /><br />
  		      <Link className="mb-3" to="/Samuel-rivera-c-resume.pdf">
  		        Or... maybe are you looking for my CV, here it is for you
  		      </Link><br /><br />
				</div>  	
			</div>  	
    <div className="separatr" />
  </Layout>
)

export default NotFoundPage
