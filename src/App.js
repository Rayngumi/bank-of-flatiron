import React, { useState } from 'react';
import Transactions from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';

const initialTransactions = [
  {
    date: '2019-12-01',
    description: "Paycheck from Bob's Burgers",
    category: 'Income',
    amount: 1000,
  },
  {
    date: '2019-12-02',
    description: 'South by Southwest Quinoa Bowl at Fresh & Co',
    category: 'Food',
    amount: -10.55,
  },
  {
    date: '2019-12-04',
    description: 'Sunglasses, Urban Outfitters',
    category: 'Fashion',
    amount: -24.99,
  },
  {
    date: '2019-12-06',
    description: 'Venmo, Alice Pays you for Burrito',
    category: 'Food',
    amount: 8.75,
  },
  {
    date: '2019-12-06',
    description: 'Chipotle',
    category: 'Food',
    amount: -17.59,
  },
];

const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <div><SearchBar transactions={transactions} setTransactions={setTransactions} /></div>
      <div><TransactionForm addTransaction={addTransaction} /> <Transactions transactions={transactions} /></div>
    </div>
  );
};

export default App;
