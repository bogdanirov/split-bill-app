import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    expenses: {}
  }

  addExpense = key => {
    const expenses = {...this.state.expenses};
    console.log(key);
  }

  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">Split Bill App</h1>
        <Dashboard addExpense={this.addExpense} />
      </div>
    );
  }
}

export default App;
