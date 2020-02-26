export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.payload, id: autogenerateRandomID(state.transactions) }
        ]
      };
    default:
      return state;
  }
};

// helpers

function autogenerateRandomID(transactions) {
  const randomID = Math.floor(Math.random() * 1000000000);
  const idExists = transactions.find(
    transaction => transaction.id === randomID
  );
  if (idExists) {
    autogenerateRandomID(transactions);
  }
  return randomID;
}
