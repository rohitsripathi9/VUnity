import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Sidebar Navigation */}
      <div className="sidebar">
        <div className="sidebar-header">SM Platform</div>
        <ul className="sidebar-menu">
          <li className="active">Home Feed</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>Lost & Found</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <h1>Welcome to SM Platform</h1>
        
        {/* Create Post Section - Instagram-like */}
        <div className="create-post-section">
          <button className="create-post-button">What's on your mind?</button>
        </div>
        
        <div className="feed-container">
          <div className="post">
            <div className="post-header">
              <div className="post-user">User Name</div>
              <div className="post-time">2 hours ago</div>
            </div>
            <div className="post-content">
             Hey connections! Todays is my first day to college 
            </div>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;