import React from 'react';
import myKeys from './config.js';

class RoadStatus extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="status">
      <h3 className="status-header">Road</h3>
      </div>
    )
  }
}

export default RoadStatus;
