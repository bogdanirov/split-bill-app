import React from 'react';
import { Table } from 'semantic-ui-react';
import { formatDate, formatPrice } from '../helpers';

class Expense extends React.Component {
    render() {
        return(
            <Table.Row>
                <Table.Cell collapsing>
                    <strong>{this.props.id.category}</strong>
                </Table.Cell>
                <Table.Cell collapsing>
                    {formatPrice(this.props.id.amount)}
                </Table.Cell>
                <Table.Cell>
                {this.props.id.userId}
                </Table.Cell>
                <Table.Cell collapsing textAlign='right'>
                {formatDate(this.props.id.timestamp)}
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default Expense;