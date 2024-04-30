import React from 'react';

const SearchBar = ({ filterTransactions }) => {
  const handleSearch = (e) => {
    filterTransactions(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1 mt-1">
      <input type="text" placeholder='Search Your Recent Transactions' onChange={handleSearch} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  );
};

export default SearchBar;
