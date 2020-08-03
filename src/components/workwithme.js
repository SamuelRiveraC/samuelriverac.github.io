import React from "react"
import { Link } from "gatsby"
import CV from "../components/cv"



export default class AboutMe extends React.Component {
  render () { return (
    <div className="row justify-content-center calltoaction divider_container">
      <div className="col-12 col-md-8" >
        <h2 className="section_title">
          What's there for you. Work with me                                                                                   
        </h2>
      </div>


    	<div className="col-12 col-md-8" >
    		What's in for you --- I am Ideal for remote jobs :D I am a problem solver good at everything, master developer kek 
    		<br/>
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tenetur magni unde eos at distinctio placeat, perferendis quasi sit, earum dolorum dolores suscipit aliquid pariatur. Iure qui mollitia culpa accusamus.
	    </div>
	    <div className="col-12 col-md-8 text-center my-3" >
        <Link className="btn btn--primary m-3" to="/contact" >
          Contact Me here
        </Link>
		    <CV extraClasses="m-3"/>
	    </div>

      <div className="divider lower" ></div>
    </div>
  ) }
}