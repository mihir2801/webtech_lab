import React from 'react';
import { formatCurrency } from '../utils';

const CartSummary = ({ subtotal }) => {
  // Free shipping over ₹1000, otherwise ₹50
  const shipping = subtotal > 0 ? (subtotal >= 1000 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-summary-card">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping Fee</span>
        <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
      </div>
      <hr className="divider" />
      <div className="summary-row total-row">
        <span>Total Amount</span>
        <span className="total-val">{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
