import React from 'react';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import expensesCategories from '../assets/expensesCategories';
import { localCurrency } from '../helpers';

class AddNewExpense extends React.Component {
    expense = {
        splitUserId: '',
        amount: 0,
        category: '',
        groupId: '',
        timestamp: ''
    }

    userIdRef = React.createRef();
    categoryRef = React.createRef();

    handleAddition = (e, { value }) => {
        console.log(value);
    }

    handleChange = (e, data) => {
     
        const authUser = this.props.authenticated,
            groups = this.props.groups,
            currentGroupId = Object.keys(groups).map(group => {
                if(authUser.name === groups[group].user1) {
                    return groups[group].id;
                }
            });
        // console.log(currentGroupId);
        this.expense = {
            ...this.expense,
            [data.id] : data.value,
            groupId: currentGroupId,
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
                    <Dropdown id="splitUserId" ref={this.userIdRef} placeholder='Split with' fluid selection search options={this.props.users.splitBuddies} onChange={this.handleChange}  />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input id="amount" icon="currency" iconPosition="left" type="number" step=".01" onChange={this.handleChange} label={localCurrency} labelPosition='right' required />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <Dropdown id="category" ref={this.categoryRef} placeholder='Select expense category or add a new one' fluid selection search options={expensesCategories} allowAdditions onAddItem={this.handleAddition} onChange={this.handleChange} />
                </Form.Field>
            
                <Button type='submit'>Save Expense</Button>
            </Form>
        )
    }
}

export default AddNewExpense;