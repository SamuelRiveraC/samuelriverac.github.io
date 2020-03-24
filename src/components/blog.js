import React from "react"

export default class Blog extends React.Component {
  render () { return (
    <div className="blog w-100" >
      <div className="row" >
        {this.props.posts.map((item,index) => {
        return <div className="col-12 col-md-4" key={index} >
          {JSON.stringify(item.node)}
        </div>
        })}
      </div>
      />
    </div>
  ) }
}