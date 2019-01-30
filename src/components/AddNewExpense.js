import React from 'react';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import expensesCategories from '../assets/expensesCategories';
import { localCurrency } from '../helpers';

class AddNewExpense extends React.Component {
    state = {
        expense : {
            userId: '',
            amount: '',
            category: '',
            timestamp: ''
        },
        fields: {},
        errors: {}
    }

    splitBuddies = [
        {
            text: 'Bogdan',
            value: 'Bogdan'
        },
        {
            text: 'Simona',
            value: 'Simona'
        }
    ];

    handleAddition = (e, { value }) => {
        //TODO: Handle adition for Dropdowns (Buddies and Categories)
        console.log(value);
    }

    handleChange = (e, data) => {
        this.expense = {
            ...this.expense,
            [data.id] : data.value,
            timestamp: Math.floor(Date.now() / 1000)
        }
    }

    createExpense = e => {
        e.preventDefault();
        this.props.addExpense(this.expense);
        //Reset form values //Used REFs for now until I know better how to manage controlling FORMS https://reactjs.org/docs/uncontrolled-components.html
        e.currentTarget.reset();
        this.userIdRef.current.clearValue();
        this.categoryRef.current.clearValue();
    }

    render() {
        return (
            <Form onSubmit={this.createExpense}>
                <Form.Field>
                    <Dropdown name="userId" placeholder='Select your split buddy' fluid selection search options={this.splitBuddies} onChange={this.handleChange} error={false} />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input name="amount" icon="currency" iconPosition="left" type="number" step=".01" onChange={this.handleChange} label={localCurrency} labelPosition='right' required />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <Dropdown name="category" placeholder='Select expense category or add a new one' fluid selection search options={expensesCategories} allowAdditions onAddItem={this.handleAddition} onChange={this.handleChange} error={false} />
                </Form.Field>
            
                <Button type='submit'>Save Expense</Button>
            </Form>
        )
    }
}

export default AddNewExpense;