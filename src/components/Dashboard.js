import React from 'react';
import AddNewExpense from './AddNewExpense';
import Expense from './Expense';
import Total from './Total';
import { Table } from 'semantic-ui-react';
import splitBuddies from '../assets/users';
import groups from '../assets/groups';

class Dashboard extends React.Component {
    state = {
        expenses: {},
        users: {
            splitBuddies
        },
        authenticated: {
            id: 1,
            name: 'Bogdan',
            balance: 0
        },
        groups
    }

    addExpense = key => {
        const expenses = {...this.state.expenses};
        expenses[`expense${key['timestamp']}`] = key;
        this.setState(
            { expenses },
            () => this.updateUserBalance(key),
            () => this.calculateTotal()
        );
    }

    updateUserBalance = (expense) => {
        let authenticated  = {...this.state.authenticated};
        const balance =  parseInt(authenticated.balance) + parseInt(expense.amount);
        authenticated = {
            ...authenticated,
            balance: balance
        }
        this.setState({authenticated});
    }

    updateGroupBalance = (expense) => {
        const groups = {...this.state.groups};
        
    }

    calculateTotal = () => {
        const expenses = {...this.state.expenses};
        const groups = {...this.state.groups};
        const total = Object.keys(expenses).reduce( (total, key) => {
            return total + parseInt(expenses[key].amount);
        }, 0);

        groups.group1 = {
            ...groups.group1,
            balance: total
        }
        this.setState({groups});
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
                        <AddNewExpense addExpense={this.addExpense} authenticated={this.state.authenticated} users={this.state.users} groups={this.state.groups} />
                    </div>
                    <div className="column eight wide">
                        <h3>Latest Expenses Added</h3>
                        <Table celled striped>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>Amount</Table.HeaderCell>
                                <Table.HeaderCell>Added By</Table.HeaderCell>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    Object.keys(this.state.expenses).map(key => {
                                        return <Expense id={this.state.expenses[key]} key={key}/>
                                    })
                                }
                            </Table.Body>
                        </Table>
                        <h4> Total: <Total groups={this.state.groups}/> </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;