import React from "react"

export default class Portfolio extends React.Component {
  render () { return (
    <div className="portfolio w100" >      
      <div className="row" >
        {this.props.portfolios.map((item,index) => {
        return <div className="col-12 col-md-6" key={index} >
          {JSON.stringify(item.node)}
        </div>
        })}
      </div>
      />
    </div>
  ) }
}