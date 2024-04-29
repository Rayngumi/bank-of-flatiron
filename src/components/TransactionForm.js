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
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label>Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <input type="text" id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <input type="text" id="category" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <input type="number" id="amount" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div className="center-button">
          <button type="submit">Add Transaction</button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
