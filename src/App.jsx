import React, { useReducer } from 'react';
import Header from './components/Header';
import CartList from './components/CartList';
import CartSummary from './components/CartSummary';
import AddItemForm from './components/AddItemForm';
import { cartReducer, initialState } from './reducers/cartReducer';
import './App.css';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="dark-theme-wrapper">
      <div className="app-container">
        <Header 
          totalItems={totalItems} 
          onClear={() => dispatch({ type: 'CLEAR_CART' })} 
        />
        
        <main className="main-grid">
          <div className="left-panel">
            {/* Input field to add items dynamically */}
            <AddItemForm 
              onAdd={(item) => dispatch({ type: 'ADD_ITEM', payload: item })} 
            />
            {/* Main Cart Items Manager */}
            <CartList 
              cart={cart} 
              dispatch={dispatch} 
            />
          </div>
          
          <aside className="right-panel">
            <CartSummary subtotal={subtotal} />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
