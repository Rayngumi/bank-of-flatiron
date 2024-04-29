import React from 'react';

const TransactionTable = ({ transactions, sortTransactions, sortMethod, sortDirection }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortTransactions('date')}>Date</th>
          <th onClick={() => sortTransactions('description')}>Description {sortMethod === 'description' && sortDirection === 'asc' ? '▲' : '▼'}</th>
          <th onClick={() => sortTransactions('category')}>Category {sortMethod === 'category' && sortDirection === 'asc' ? '▲' : '▼'}</th>
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
  );
};

export default TransactionTable;
