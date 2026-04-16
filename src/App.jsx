import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch users from API on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearFilter = () => {
    setSearchTerm('');
  };

  // Helper to generate initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">User Directory</h1>
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="clear-btn" onClick={handleClearFilter} disabled={!searchTerm}>
            Clear Filter
          </button>
        </div>
        
        <div className="status-text">
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <p>Showing {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'}</p>
          )}
        </div>
      </header>

      <main className="main-content">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : filteredUsers.length > 0 ? (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="card-header">
                  <div className="avatar">
                    {getInitials(user.name)}
                  </div>
                  <div className="user-info">
                    <h2 className="user-name">{user.name}</h2>
                  </div>
                </div>
                <div className="card-body">
                  <p className="user-detail">
                    <span className="icon" role="img" aria-label="email">✉️</span> {user.email}
                  </p>
                  <p className="user-detail">
                    <span className="icon" role="img" aria-label="company">🏢</span> {user.company.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No users found</h3>
            <p>We couldn't find any users matching "{searchTerm}"</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
