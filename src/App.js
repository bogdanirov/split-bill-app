import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">Split Bill App</h1>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
