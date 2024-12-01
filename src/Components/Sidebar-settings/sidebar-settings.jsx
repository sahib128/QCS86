import React from 'react';
import './sidebar-settings.css';

const Sidebar_Settings = ({ setActivePage, activePage }) => {
  const handleLinkClick = (page) => {
    console.log(`Setting active page to: ${page}`);
    setActivePage(page);  // Update the active page
  };

  return (
    <aside className="user-settings-sidebar">
      <h2 className="settings-heading">User Panel</h2>
      <ul>
        <li>
          <button 
            onClick={() => handleLinkClick('profile')} 
            className={activePage === 'profile' ? 'active' : ''}>
            Profile
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleLinkClick('account')} 
            className={activePage === 'account' ? 'active' : ''}>
            Account
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleLinkClick('chat')} 
            className={activePage === 'chat' ? 'active' : ''}>
            Chat
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleLinkClick('voice-video')} 
            className={activePage === 'voice-video' ? 'active' : ''}>
            Voice & Video
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleLinkClick('appearance')} 
            className={activePage === 'appearance' ? 'active' : ''}>
            Appearance
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleLinkClick('notification')} 
            className={activePage === 'notification' ? 'active' : ''}>
            Notification
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar_Settings;
