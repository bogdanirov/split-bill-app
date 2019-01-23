import React from 'react';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import expensesCategories from '../assets/expensesCategories';

class AddNewExpense extends React.Component {
    handleAddition = (e, { value }) => {
        console.log(value);
    }

    createExpense = e => {
        e.preventDefault();
        const expense = {
            userId: '',
            amount: '',
            category: '',
            timestamp: new Date()
        }
        this.props.addExpense(expense);
        e.currentTarget.reset();
    }

    render() {
        const splitBuddies = [
            {
                text: 'Bogdan',
                value: 'Bogdan'
            },
            {
                text: 'Simona',
                value: 'Simona'
            }
        ];

        return (
            <Form onSubmit={this.createExpense}>
                <Form.Field>
                    <Dropdown placeholder='Select your split buddy' fluid selection search options={splitBuddies} onChange={e => console.log(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input icon="currency" iconPosition="left" type="number" step=".01" onChange={e => console.log(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <Dropdown placeholder='Select expense category or add a new one' fluid selection options={expensesCategories} allowAdditions search onAddItem={this.handleAddition}  onChange={e => console.log(e.target.value)} />
                </Form.Field>
            
                <Button type='submit'>Save Expense</Button>
            </Form>
        )
    }
}

export default AddNewExpense;