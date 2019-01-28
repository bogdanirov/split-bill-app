import React from 'react';
import AddNewExpense from './AddNewExpense';
import Expense from './Expense';

class Dashboard extends React.Component {
    state = {
        expenses: {},
        totals: {},
        users: {}
    }
    
    addExpense = key => {
        const expenses = {...this.state.expenses};
        expenses[`expense${key['timestamp']}`] = key;
        this.setState({ expenses });
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui dividing header">
                    <i className="dashboard icon"></i>
                    <div className="content">
                    <h2>Dashboard</h2>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="column eight wide">
                        <h3>Add New Expense</h3>
                        <AddNewExpense addExpense={this.addExpense} />
                    </div>
                    <div className="column eight wide">
                        <h3>Latest Expenses Added</h3>
                        {
                            Object.keys(this.state.expenses).map(key => {
                                return <Expense id={this.state.expenses[key]} key={key}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;