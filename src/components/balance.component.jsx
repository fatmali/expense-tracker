import React, { useContext } from 'react';
import { GlobalContext } from '../context/global-state';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance
