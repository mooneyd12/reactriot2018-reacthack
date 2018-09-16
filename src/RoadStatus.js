import React from 'react';
import myKeys from './config.js';

class RoadStatus extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accidentRow: []
    }
  }

  componentDidMount(){
    const url = "https://api-argon.tfl.gov.uk/Line/Mode/tube%2C%20dlr/Status?app_id=" + myKeys.appId + "&app_key=" + myKeys.appKey;
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let accidentRow = res.map((results) => {
        return (
          <div key={res.id} className="accidents-content">
          <h5 className="location-name">{res.location}</h5>
          <p className="update-desc">{res.currentUpdate}</p>
          </div>
        )
      })
      this.setState({
        accidentRow: accidentRow
      })
    })
    .catch((err) =>{
      console.log('Failed to fetch data');
    })
  }

  render(){
    return (
      <div className="status">
      <h3 className="status-header">Road</h3>
      {this.state.accidentRow}
      </div>
    )
  }
}

export default RoadStatus;
