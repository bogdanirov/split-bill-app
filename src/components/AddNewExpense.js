import React from 'react';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import expensesCategories from '../assets/expensesCategories';

class AddNewExpense extends React.Component {
    expense = {
        userId: '',
        amount: '',
        category: '',
        timestamp: Math.floor(Date.now() / 1000)
    }

    handleAddition = (e, { value }) => {
        console.log(value);
    }

    handleChange = (e, data) => {
        this.expense = {
            ...this.expense,
            [data.id] : data.value
        }
        console.log(this.expense);
    }

    createExpense = e => {
        e.preventDefault();
     
        this.props.addExpense(this.expense);
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
                    <Dropdown id="userId" placeholder='Select your split buddy' fluid selection search options={splitBuddies} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input id="amount" icon="currency" iconPosition="left" type="number" step=".01" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <Dropdown id="category" placeholder='Select expense category or add a new one' fluid selection search options={expensesCategories} allowAdditions onAddItem={this.handleAddition} onChange={this.handleChange} />
                </Form.Field>
            
                <Button type='submit'>Save Expense</Button>
            </Form>
        )
    }
}

export default AddNewExpense;