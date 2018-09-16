import React from 'react';
import myKeys from './config.js';

class RoadStatus extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const url = "https://api-argon.tfl.gov.uk/Line/Mode/tube%2C%20dlr/Status?app_id=" + myKeys.appId + "&app_key=" + myKeys.appKey;
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {

    })
    .catch((err) =>{
      console.log('Failed to fetch data');
    })
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
