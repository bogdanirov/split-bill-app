import React from 'react';
import AddNewExpense from './AddNewExpense';
import Expense from './Expense';
import Total from './Total';
import { Table } from 'semantic-ui-react';
import splitBuddies from '../assets/users';

class Dashboard extends React.Component {
    state = {
        expenses: {},
        totals: {},
        users: {
            splitBuddies,
            loggedIn :{
                text: 'Bogdan',
                value: 'Bogdan',
                balance: 0
            }
        }
       
    }
    
    groups = {
        group1: {
            id: 1,
            user1: 'Bogdan',
            user2: 'Catalina',
            balance: 0
        }
    }

    addExpense = key => {
        const expenses = {...this.state.expenses};
        expenses[`expense${key['timestamp']}`] = key;
        this.setState(
            { expenses },
            () => this.calculateTotal()
        );
    }

    calculateTotal = () => {
        const expenses = {...this.state.expenses};
        const totals   = {...this.state.totals};
        const total = Object.keys(expenses).reduce( (total, key) => {
            return total + parseInt(expenses[key].amount);
        }, 0);
        totals[`total${Math.floor(Date.now() / 1000)}`] = {
            amount: total,
            groupId: this.groups.group1.id,
            timestamp: Math.floor(Date.now() / 1000)
        }
        this.setState({totals});
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
                        <AddNewExpense addExpense={this.addExpense} splitBuddies={this.state.users.splitBuddies} />
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
                        <h4> Total: <Total totals={this.state.totals} /></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;