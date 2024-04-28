import React from 'react';

const SearchBar = ({ transactions, setTransactions }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm)
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <input type="text" placeholder='Search Your Recent Transactions' onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
