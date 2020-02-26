import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const handleSubmit = (e) => {
      e.preventDefault();
      addTransaction({text, amount: +amount});
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
