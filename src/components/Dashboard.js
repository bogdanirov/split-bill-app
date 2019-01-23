import React from 'react';
import AddNewExpense from './AddNewExpense';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="ui row">
                <AddNewExpense addExpense={this.props.addExpense} />
            </div>
        )
    }
}

export default Dashboard;