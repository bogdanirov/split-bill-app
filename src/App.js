import React, { Component } from 'react';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <div className="ui container page-wrap">
        <h1 className="ui center aligned header page-logo">Split Bill App</h1>
        <Router/>
      </div>
    );
  }
}

export default App;
