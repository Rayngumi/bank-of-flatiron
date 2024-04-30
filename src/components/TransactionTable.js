import React from 'react';

const TransactionTable = ({ transactions, sortTransactions, sortMethod, sortDirection }) => {
  return (
    <div className="container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th onClick={() => sortTransactions('description')} className="cursor-pointer">Description {sortMethod === 'description' && sortDirection === 'asc' ? '▲' : '▼'}</th>
            <th onClick={() => sortTransactions('category')} className="cursor-pointer">Category {sortMethod === 'category' && sortDirection === 'asc' ? '▲' : '▼'}</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
