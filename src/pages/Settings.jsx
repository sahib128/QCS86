import React, { useState, useEffect } from 'react';
import ProfileComp from '../Components/ProfileComp/ProfileComp'; // Profile component
import Sidebar_Settings from '../Components/Sidebar-settings/sidebar-settings'; // Sidebar component
import './Settings.css'; // Add styles to manage the layout
import GroupChat from '../Components/Group-Chat/gc'; // Group chat component
import UpdateCredentials from '../Components/Account/updateCredentials'; // Update credentials component
import axios from 'axios';

const SettingsPage = () => {
  // Check if there is a saved active page in sessionStorage or localStorage
  const savedActivePage = localStorage.getItem('activePage') || 'profile'; // Default to 'profile' if none is found

  const [activePage, setActivePage] = useState(savedActivePage); // Set the initial state based on the saved active page

  // Dummy user data for now
  const dummyUser = {
    photo: 'https://via.placeholder.com/150',  // Placeholder image
    name: 'John Doe',
    username: 'johndoe',
    phone: '+1234567890',
    about: 'This is a dummy profile for John Doe.',
  };

  // Log the activePage to see if it's updating correctly
  console.log(`Current activePage: ${activePage}`);

  // Store the activePage in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage); // Save activePage to localStorage
  }, [activePage]);

  // Function to render the appropriate content based on the active page
  const renderContent = () => {
    console.log(`Rendering content for: ${activePage}`);
    switch (activePage) {
      case 'profile':
        return <ProfileComp className="profile-page" />;
      case 'account':
        return <UpdateCredentials className="account-page" />;
      case 'chat':
        return <GroupChat className="chat-page" />;
      case 'voice-video':
        return <div>Voice & Video Settings</div>;
      case 'appearance':
        return <div>Appearance Settings</div>;
      case 'notification':
        return <div>Notification Settings</div>;
      default:
        return <ProfileComp className="profile-page" />;
    }
  };

  return (
    <div className="settings-page-container">
      <div className="settings-sidebar">
        <Sidebar_Settings setActivePage={setActivePage} activePage={activePage} />
      </div>
      <div className="settings-content">
        {renderContent()}  {/* Dynamically render the content based on activePage */}
      </div>
    </div>
  );
};

export default SettingsPage;
