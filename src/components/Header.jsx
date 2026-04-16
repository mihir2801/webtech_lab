import React from 'react';

const Header = ({ totalItems, onClear }) => {
  return (
    <header className="cart-header">
      <div className="header-titles">
        <h1>Web Tech Lab - Exp 10</h1>
      </div>
      <div className="header-actions">
        <div className="total-items-badge">
          🛒 Total Items: <span>{totalItems}</span>
        </div>
        <button 
          className="btn btn-empty-cart" 
          onClick={onClear}
          disabled={totalItems === 0}
        >
          Empty Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
