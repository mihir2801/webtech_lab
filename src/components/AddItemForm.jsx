import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    
    onAdd({
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: 1
    });
    
    setName('');
    setPrice('');
  };

  return (
    <div className="form-container">
      <h3>Add New Item</h3>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Item Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          className="dark-input"
        />
        <input 
          type="number" 
          placeholder="Price (₹)" 
          value={price} 
          onChange={e => setPrice(e.target.value)} 
          required 
          min="1" 
          step="0.5" 
          className="dark-input"
        />
        <button type="submit" className="btn btn-add">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddItemForm;
