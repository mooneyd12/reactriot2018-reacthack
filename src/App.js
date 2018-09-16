import React, { Component } from 'react';
import './App.css';
import Status from './Status.js';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="brand-name">TravelMapper</h2>
        <Status />
      </div>
    );
  }
}

export default App;
