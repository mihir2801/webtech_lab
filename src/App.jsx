import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [colorClass, setColorClass] = useState('text-default');

  const increment = () => {
    setCount((prev) => prev + 1);
    triggerAnimation('text-increase');
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      triggerAnimation('text-decrease');
    }
  };

  const reset = () => {
    setCount(0);
    triggerAnimation('text-default');
  };

  const triggerAnimation = (colorModifier) => {
    setColorClass(colorModifier);
    
    // Quick trick to reset animation
    setAnimationClass('');
    setTimeout(() => setAnimationClass('pop-animation'), 10);
    
    // Clear the animation class after it finishes so it can trigger again
    setTimeout(() => setAnimationClass(''), 400);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>
        <div className="counter-display">
          <span className={`counter-number ${animationClass} ${colorClass}`}>
            {count}
          </span>
        </div>
        <div className="button-group">
          {/* We use vanilla CSS for the buttons as mentioned in the requirements */}
          <button className="btn" onClick={increment}>Increment</button>
          <button className="btn" onClick={reset}>Reset</button>
          <button className="btn" onClick={decrement} disabled={count === 0}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
