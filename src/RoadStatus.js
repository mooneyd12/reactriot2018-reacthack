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
    const url = "https://api.tfl.gov.uk/Road/a2/Disruption?closures=true&app_id="+ myKeys.apiId + "&app_key=" + myKeys.apiKey;
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let accidentRow = res.map((results) => {
        return (
          <div key={results.id} className="accidents-content">
          <h5 className="location-name">{results.location}</h5>
          <p className="update-desc">{results.currentUpdate}</p>
          <p className="update-comments">{results.comments}</p>
          </div>
        )
      });
      this.setState({
        accidentRow: accidentRow
      });
    })
    .catch((err) => {
        console.log('No data');
    })
  }

  render(){
    return (
      <div className="status">
      <h3 className="status-header">Road</h3>
      {(this.state.accidentRow.length === 0) ? <div className="no-updates">No updates</div> : this.state.accidentRow}
      </div>
    )
  }
}

export default RoadStatus;
