import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const initialTransactions = [
  { id: 1, date: '2019-12-01', description: "Paycheck from Bob's Burgers", category: 'Income', amount: 1000 },
  { id: 2, date: '2019-12-02', description: 'South by Southwest Quinoa Bowl at Fresh & Co', category: 'Food', amount: -10.55 },
  { id: 3, date: '2019-12-04', description: 'Sunglasses, Urban Outfitters', category: 'Fashion', amount: -24.99 },
  { id: 4, date: '2019-12-06', description: 'Venmo, Alice Pays you for Burrito', category: 'Food', amount: 8.75 },
  { id: 5, date: '2019-12-06', description: 'Chipotle', category: 'Food', amount: -17.59 },
];

const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(initialTransactions);
  const [sortMethod, setSortMethod] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); 

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  const filterTransactions = (searchTerm) => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filteredTransactions);
  };

  const sortTransactions = (method) => {
    let sortedTransactions = [...filteredTransactions];
    if (method === 'category' || method === 'description') {
      sortedTransactions.sort((a, b) => {
        const comparison = a[method].localeCompare(b[method]);
        return sortDirection === 'asc' ? comparison : -comparison;
      });
      setSortMethod(method);
    }
    setFilteredTransactions(sortedTransactions);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center bg-purple-700 text-white">The Royal Bank of Flatiron</h1>
      <div><SearchBar filterTransactions={filterTransactions} /></div>
      <div><TransactionForm addTransaction={addTransaction} /></div>
      <div>
        <TransactionsTable
          transactions={filteredTransactions}
          sortTransactions={sortTransactions}
          sortMethod={sortMethod}
          sortDirection={sortDirection}
        />
      </div>
    </div>
  );
};

export default App;
