import React from 'react';
import myKeys from './config.js';

class Status extends React.Component {
constructor(props){
  super(props);
  this.state = {
    statusRow: []
  }
}

componentDidMount(){
  const url = "https://api-argon.tfl.gov.uk/Line/Mode/tube%2C%20dlr/Status?app_id=" +
      myKeys.apiId +
      "&app_key=" +
      myKeys.apiKey;
      fetch(url)
      .then(data => {
        console.log("fetched data successfully");
        return data.json();
      })
      .then(searchResults => {
        let statusRow = searchResults.map(res => {
          return (
            <div key={res.id}>
              <h5>{res.id}</h5>
              <p>{res.lineStatuses[0].statusSeverityDescription}</p>
            </div>
          );
        });
        this.setState({
          statusRow: statusRow
        });
      })
      .catch(err => {
        console.error("Failed to fetch data");
      });
    }


  render(){
    return <div>
      <h3 className="status-header">Status</h3>
        <div>
          {this.state.statusRow}
        </div>
      </div>
  }
}

export default Status;
