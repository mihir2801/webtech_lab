import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cart, dispatch }) => {
  if (cart.length === 0) {
    return (
      <div className="empty-cart-message">
        <h3>Your Cart is Empty</h3>
        <p>Start adding items to your cart</p>
      </div>
    );
  }

  return (
    <div className="cart-list-container">
      <div className="cart-header-grid">
        <div className="h-item">Product</div>
        <div className="h-price">Price</div>
        <div className="h-qty">Quantity</div>
        <div className="h-sub">Total</div>
        <div className="h-action">Action</div>
      </div>
      <div className="cart-items-wrapper">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
