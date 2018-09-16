import React, { Component } from 'react';
import './App.css';
import Status from './Status.js';
import RoadStatus from './RoadStatus.js';

class App extends Component {

  render() {
    return (
      <div>
        <h2 className="brand-name">Status<span>Report</span></h2>
        <Status />
        <RoadStatus />
      </div>
    );
  }
}

export default App;
