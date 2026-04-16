import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="dark-app-container">
      <div className="glass-card">
        <h1 className="neon-title">Counter</h1>
        <div className="counter-display">
          <span className="neon-number">{count}</span>
        </div>
        <div className="button-group">
          <button className="neon-btn neon-btn-red" onClick={decrement} disabled={count === 0}>
            -
          </button>
          <button className="neon-btn neon-btn-blue" onClick={reset}>
            Reset
          </button>
          <button className="neon-btn neon-btn-green" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
