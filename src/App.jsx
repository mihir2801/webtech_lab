import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

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

  if (isLoggedIn) {
    return <Dashboard username={username} onLogout={handleLogout} />;
  }

  return (
    <div className="app-main-container">
      <div className="theme-card">
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
      </div>
    </div>
  );
}

export default App;
