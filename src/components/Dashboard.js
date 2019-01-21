import React from 'react';
import AddNewExpense from './AddNewExpense';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="ui row">
                <AddNewExpense />
            </div>
        )
    }
}

export default Dashboard;