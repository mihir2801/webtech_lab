import React, { useState, useEffect } from 'react';
import { 
  LogOut, 
  LayoutDashboard, 
  CalendarDays, 
  Clock, 
  User, 
  Activity, 
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  KeyRound
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ username, onLogout }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <LayoutDashboard className="nav-logo" />
          <h1 className="nav-title">Nexus Dash</h1>
        </div>
        <div className="nav-right">
          <span className="nav-time">{formattedDate} | {formattedTime}</span>
          <button onClick={onLogout} className="nav-logout-btn">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2 className="welcome-heading">Welcome back, {username || 'Guest'} 👋</h2>
          <p className="welcome-subtext">You're successfully logged in to your account.</p>
        </section>

        {/* Info Cards */}
        <section className="info-cards-container">
          <div className="info-card">
            <div className="card-icon-wrapper blue">
              <CalendarDays size={24} />
            </div>
            <div>
              <div className="card-label">Today's Date</div>
              <div className="card-value">{currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-icon-wrapper purple">
              <Clock size={24} />
            </div>
            <div>
              <div className="card-label">Current Time</div>
              <div className="card-value">{formattedTime}</div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon-wrapper indigo">
              <User size={24} />
            </div>
            <div>
              <div className="card-label">Logged-in User</div>
              <div className="card-value" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{username || 'Guest'}</div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon-wrapper emerald">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="card-label">System Status</div>
              <div className="card-value">All systems operational</div>
            </div>
          </div>
        </section>

        {/* Activity Section */}
        <section className="activity-section">
          <h3 className="activity-title">
            <Activity size={20} className="activity-title-icon" style={{ color: '#6366f1' }}/>
            Recent Activity
          </h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot-wrapper">
                <div className="activity-dot"><KeyRound size={18} /></div>
              </div>
              <div className="activity-content">
                <p className="activity-text">Successful login</p>
                <p className="activity-time">Just now</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot-wrapper">
                <div className="activity-dot"><CheckCircle2 size={18} /></div>
              </div>
              <div className="activity-content">
                <p className="activity-text">Profile setup completed</p>
                <p className="activity-time">2 days ago</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot-wrapper">
                <div className="activity-dot"><Smartphone size={18} /></div>
              </div>
              <div className="activity-content">
                <p className="activity-text">Logged in from new device</p>
                <p className="activity-time">1 week ago</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
