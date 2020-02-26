import React from "react";
import { GlobalContext } from "../context/global-state";
import Transaction from "./transaction.component";

const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <ul id="list" className="list">
      {transactions.map(transaction => (
        <Transaction transaction={transaction} key={transaction.id}/>
      ))}
    </ul>
  );
};

export default TransactionList;
