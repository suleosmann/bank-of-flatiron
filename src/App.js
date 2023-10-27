import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Fetch data when the component mounts using the useEffect hook
  useEffect(() => {
    // Fetch data from your JSON file and set the 'transactions' state
    fetch('/db.json') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  // Function to filter transactions by description
  const filterTransactions = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <SearchBar onSearch={filterTransactions} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
