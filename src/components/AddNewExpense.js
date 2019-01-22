import React from 'react';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import expensesCategories from '../assets/expensesCategories';

class AddNewExpense extends React.Component {
    handleAddition = (e, { value }) => {
        console.log(value);
    }

    handleExpenseSubmit = e => {
        e.preventDefault();
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
            <Form onSubmit={this.handleExpenseSubmit}>
                <Form.Field>
                    <Dropdown placeholder='Select your split buddy' fluid selection search options={splitBuddies} />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input icon="currency" iconPosition="left" type="number" step=".01" />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <Dropdown placeholder='Select expense category or add a new one' fluid selection options={expensesCategories} allowAdditions search onAddItem={this.handleAddition} />
                </Form.Field>
            
                <Button type='submit'>Save Expense</Button>
            </Form>
        )
    }
}

export default AddNewExpense;