import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({ date: '', description: '', category: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.description || !formData.category || !formData.amount) {
      alert('Please fill out all fields.');
      return;
    }
    addTransaction(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 container">
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/4 px-3 md:mb-0">
          <label className="text-gray-700 text-sm" htmlFor="date">Date: </label>
          <input className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/4 px-3 md:mb-0">
          <label className="hidden" htmlFor="description">Description:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
          <div className="w-full md:w-1/4 px-3 md:mb-0">
          <label className="hidden" htmlFor="category">Category:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" name="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/4 px-3 md:mb-0">
          <label className="hidden" htmlFor="amount">Amount:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-gray-300 hover:bg-gray-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Add Transaction
        </button>
      </div>
    </form>
);
};

export default TransactionForm;
