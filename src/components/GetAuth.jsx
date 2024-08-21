import React, { useState, useEffect } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

const GetAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    console.log(user);

    // Cleanup subscription to avoid memory leaks
    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>User Data:</h1>
      
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>User ID: {user.uid}</p>
          {/* Add more user data as needed */}
        </div>
      ) : (
        <p>No user signed in</p>
      )}
    </div>
  );
};

export default GetAuth;
