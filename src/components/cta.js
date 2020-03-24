import React from "react" 
export default class CallToActionButton extends React.Component { render () { return (
  <div className="row" >
    <div className="col-12" style={{textAlign: 'center'}}>
      <div className="btn btn--primary">
        {JSON.stringify(this.props.text)}
      </div>
    </div>
  </div>
) } }
