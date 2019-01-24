import React from 'react';
import AddNewExpense from './AddNewExpense';

class Dashboard extends React.Component {
    state = {
        expenses: {}
    }
    
    addExpense = key => {
    const expenses = {...this.state.expenses};
    console.log(key);
    }

    render() {
        return (
            <div className="ui row text container">
                <AddNewExpense addExpense={this.addExpense} />
            </div>
        )
    }
}

export default Dashboard;