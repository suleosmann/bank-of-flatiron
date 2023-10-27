import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    category: '',
    amount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data here if needed

    // Call the parent component's function to add the new transaction
    onAddTransaction(newTransaction);

    // Clear the form
    setNewTransaction({
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newTransaction.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
