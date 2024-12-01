import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateCredentials.css';

const UpdateCredentials = () => {
  const [user, setUser] = useState(null); // Holds user data
  const [editMode, setEditMode] = useState(false); // Toggles edit mode
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/myapp/getcompleteuser', {
          withCredentials: true,
        });
        setUser(response.data);
        setEmail(response.data?.email || ''); // Initialize email
      } catch (err) {
        console.error('Error fetching user:', err.message);
        alert('Failed to load user data. Please try again.');
      }
    };

    fetchUser();
  }, []);

  // Update user credentials
  const updateCredentials = async () => {
    if (!email.trim() && !password.trim()) {
      alert('Please provide at least one field (email or password).');
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:3000/myapp/updateusercreds',
        {
          id: user.id,
          email: email || user.email,
          password: password, // Update password only if provided
        },
        {
          withCredentials: true,
        }
      );
      alert('Credentials updated successfully!');
      setUser((prevUser) => ({
        ...prevUser,
        email: email || prevUser.email, // Update user object locally
      }));
      setPassword(''); // Clear password field after update
      setEditMode(false); // Exit edit mode
    } catch (err) {
      console.error('Error updating credentials:', err.message);
      alert('Failed to update credentials. Please try again.');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Render loading state if user data is not yet available
  if (!user) {
    return <div className="loading">Loading user data...</div>;
  }

  return (
    <div className="update-credentials-container">
      <h2>Update Email and Password</h2>
      <div className="credentials-form">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          readOnly={!editMode}
          onChange={handleInputChange}
          className={`input-field ${editMode ? 'editable' : 'readonly'}`}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          readOnly={!editMode}
          onChange={handleInputChange}
          className={`input-field ${editMode ? 'editable' : 'readonly'}`}
          placeholder="Leave blank to keep unchanged"
        />
        <div className="button-group">
          {editMode ? (
            <>
              <button className="save-button" onClick={updateCredentials}>
                Save Changes
              </button>
              <button
                className="cancel-button"
                onClick={() => {
                  setEditMode(false);
                  setEmail(user.email); // Reset email to original
                  setPassword(''); // Clear password
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setEditMode(true)}>
              Edit Credentials
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateCredentials;