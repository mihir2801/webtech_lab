import React from 'react';
import { formatCurrency } from '../utils';

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="cart-item-row">
      <div className="cell-item">
        <span className="item-name">{item.name}</span>
      </div>
      <div className="cell-price">{formatCurrency(item.price)}</div>
      <div className="cell-qty">
        <div className="qty-controls-dark">
          <button 
            className="btn-qty btn-dec"
            onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className="btn-qty btn-inc"
            onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
          >
            +
          </button>
        </div>
      </div>
      <div className="cell-subtotal">
        {formatCurrency(item.price * item.quantity)}
      </div>
      <div className="cell-action">
        <button 
          className="btn-remove" 
          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
          title="Remove Item"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;
