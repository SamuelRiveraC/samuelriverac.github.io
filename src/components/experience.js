import React from "react"
import ExperiencesJSON from "../../content/experiences.json"

export default class Experience extends React.Component {
  render () { return (
    <div className="container">
      <div className="row" >
        <div className="col-12" >
          <h3> Portfolio </h3>
        </div>

        {ExperiencesJSON.map((data, index) => {
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div className="experience_circle" style={borderColor: data.color}>
                {index}
              </div>
            </div>
            <div className="col-9">
              <h3> {data.title} </h3>
              <p>  {data.content} </p>
            </div>
          </div>
        </div>
        })}
  
      </div>
    </div>
  ) }
}






