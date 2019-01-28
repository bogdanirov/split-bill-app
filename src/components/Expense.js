import React from 'react';
import { formatDate, formatPrice } from '../helpers';

class Expense extends React.Component {
    render() {
        return(
            <li className="expenseItem">
                <div className="ui grid">
                    <strong>{this.props.id.category}</strong>
                    <p>{formatPrice(this.props.id.amount)} payable by {this.props.id.userId}. Added on {formatDate(this.props.id.timestamp)}</p>
                </div>
            </li>
                
        )
    }
}

export default Expense;