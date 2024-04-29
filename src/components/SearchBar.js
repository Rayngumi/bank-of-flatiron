import React from 'react';

const SearchBar = ({ filterTransactions }) => {
  const handleSearch = (e) => {
    filterTransactions(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='Search Your Recent Transactions' onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
