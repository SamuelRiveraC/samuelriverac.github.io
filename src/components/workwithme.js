import React from "react"
import CV from "../components/cv"
import Social from "../../content/social.json"

export default class AboutMe extends React.Component {
  render () { return (
    <div className="row justify-content-center">
    	<div className="col-12 col-md-8" >
    		What's in for you --- I am Ideal for remote jobs :D I am a problem solver good at everything, master developer kek 
    		<br/>
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tenetur magni unde eos at distinctio placeat, perferendis quasi sit, earum dolorum dolores suscipit aliquid pariatur. Iure qui mollitia culpa accusamus.
	    </div>

	    <div className="col-12 col-md-8 text-center my-3" >
			<button className="btn btn--primary m-3">
				Contact Me here
			</button>
			<CV extraClasses="m-3"/>
	    </div>

	    <div className="col-12 col-md-8 text-center my-3" >
	    	<h4> Contact information and social media </h4>
	    </div>
	    <div className="col-12 col-md-8" >
    		Font awesome Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tenetur magni unde eos at distinctio placeat, perferendis quasi sit, earum dolorum dolores suscipit aliquid pariatur. Iure qui mollitia culpa accusamus.
	    </div>


	    <div className="col-12 col-md-8 my-3" >
	        <div className="row">
                {Social.map((data, index) => {
                  return  <div className="col-4 col-md-2">
                    <a href={"social/"+data.link}> <img src={data.image} alt={data.text} width="48px"/> {data.text} </a>
                  </div>
                })}
    		</div>
    	</div>


    </div>
  ) }
}