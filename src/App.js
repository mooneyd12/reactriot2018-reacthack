import React, { Component } from 'react';
import './App.css';
import Status from './Status.js';

class App extends Component {

  render() {
    return (
      <div>
        <h2 className="brand-name">Status<span>Report</span></h2>
        <Status />
      </div>
    );
  }
}

export default App;
