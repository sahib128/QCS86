import React, { useEffect, useState } from 'react';
import './ProfileComp.css'; // ProfileComp-specific styles
import axios from 'axios';

const ProfileComp = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false); // Toggle edit mode

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/myapp/getuser', {
          withCredentials: true, // Include cookies in the request
        });
        console.log("response", response.data);
        setUser(response.data); // Set user data
      } catch (err) {
        console.error('Error fetching user:', err.message);
      }
    };

    fetchUser(); // Call the fetchUser function
  }, []);

  // Update user info
  const updateUser = async () => {
    if (!user) return;

    try {
      const response = await axios.put(
        'http://localhost:3000/myapp/updateuser',
        {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          phone_number: user.phone_number,
          isqcx86: user.isqcx86,
          isapproved: user.isapproved,
          about: user.about,
          picture: user.picture,
        },
        {
          withCredentials: true, // Include cookies in the request
        }
      );
      console.log('User updated successfully:', response.data);
      alert('User updated successfully!');
      setEditMode(false); // Exit edit mode
    } catch (err) {
      console.error('Error updating user:', err.message);
      alert('Failed to update user!');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); // Update user state dynamically
  };

  return (
    <div className="user-settings-container">
      <main className="user-profile-main">
        <div className="profile-header">
          <div className="profile-picture-container">
            <img
              src={user?.picture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="user-profile-photo"
            />
            <div className="profile-btn-group">
              <button className="profile-btn change-pic">Change picture</button>
              <button className="profile-btn delete-pic">Delete picture</button>
            </div>
          </div>
        </div>
        <div className="profile-details">
          {/* Display First and Last Name Side by Side */}
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={user?.first_name || ''}
            readOnly={!editMode}
            onChange={handleInputChange}
            className="name-input"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={user?.last_name || ''}
            readOnly={!editMode}
            onChange={handleInputChange}
            className="name-input"
          />

          <label>Phone number</label>
          <input
            type="text"
            name="phone_number"
            value={user?.phone_number || ''}
            readOnly={!editMode}
            onChange={handleInputChange}
          />

          <label>About me</label>
          <input
            type="text"
            name="about"
            value={user?.about || ''}
            readOnly={!editMode}
            onChange={handleInputChange}
            className="name-input"
          />
        </div>
        {editMode ? (
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={updateUser}
            >
              Save changes
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>

        ) : (
          <button
            className="save-button"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        )}
      </main>
    </div>
  );
};

export default ProfileComp;
