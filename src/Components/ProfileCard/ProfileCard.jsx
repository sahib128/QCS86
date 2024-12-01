import React from 'react';
import './ProfileCard.css'; // Import the CSS file

const ProfileCard = () => {
  const user = {
    photo: 'https://via.placeholder.com/150', // Replace with the user's photo URL
    name: 'John Doe',
    email: 'johndoe@example.com',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'
  };

  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img src={user.photo} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <div className="profile-about">
          <h4>About Me</h4>
          <p>{user.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
