import React from 'react';
import {formatPrice} from '../helpers';

class Total extends React.Component {
    render() {
        const totals = this.props.totals; 
        const latestTotal = totals[Object.keys(totals)[Object.keys(totals).length - 1]]; 
        return (
            <span>{latestTotal ? formatPrice(latestTotal.amount) : 'Add an expense first'}</span>
        )
    }
}

export default Total;