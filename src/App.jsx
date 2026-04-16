import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  // Helper renderer to swap content while keeping the container consistent
  const renderCardContent = () => {
    if (isLoggedIn) {
      return (
        <div className="card-inner welcome-layout">
          <div className="welcome-content">
            <h1 className="welcome-title">Web Technology Lab - Exp 8</h1>
            <h2 className="welcome-greeting">Hello there, {username}! <span role="img" aria-label="wave">👋</span></h2>
            <p className="welcome-subtext">You have successfully logged in.</p>
            <button className="theme-btn logout-btn" onClick={handleLogout}>Log Out</button>
          </div>
          {/* Maintained the layout consistency using the same split wrapper */}
          <div className="card-image-section welcome-image"></div>
        </div>
      );
    }

    return (
      <div className="card-inner split-layout">
        <div className="form-section">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-box">
              <label>Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
              />
            </div>
            
            <div className="input-box">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password"
              />
            </div>
            
            <button type="submit" className="theme-btn" style={{ marginTop: '20px' }}>Login</button>
          </form>
        </div>
        <div className="card-image-section"></div>
      </div>
    );
  };

  return (
    <div className="app-main-container">
      <div className="theme-card">
        {renderCardContent()}
      </div>
    </div>
  );
}

export default App;
