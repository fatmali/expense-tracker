import React from "react";
import "./App.css";
import Header from "./components/header.component";
import Balance from "./components/balance.component";
import IncomeExpenses from "./components/income-expenses.component";
import TransactionList from "./components/transaction-list.component";
import AddTransaction from "./components/add-transaction.component";
import { GlobalProvider } from "./context/global-state";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
