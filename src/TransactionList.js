import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch the data from the public folder (assuming the app is running on localhost:3000)
    fetch('/db.json') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => {
        // Assuming the transactions are stored in the 'transactions' key of the JSON
        setTransactions(data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
