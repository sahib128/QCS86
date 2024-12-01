import React, { Fragment, useState, useEffect } from 'react';
import ProfileComp from '../Components/ProfileComp/ProfileComp'; // Import the Profile component

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch user data
    const fetchedUser = {
      photo: 'https://via.placeholder.com/150', // Replace with the user's photo URL
      name: 'John Doe',
      email: 'johndoe@example.com',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'
    };

    setUser(fetchedUser);
  }, []);

  return (
    <Fragment>
      {user ? <ProfileComp user={user} /> : <p>Unable to load user data.</p>}
    </Fragment>
  );
};

export default ProfilePage;
