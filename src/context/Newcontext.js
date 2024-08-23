import React, { createContext, useState } from "react";
// I use this context to share user connection
// Create the context
const UserContext = createContext();

// Create the context provider
export const UserProvider = ({ children }) => {
  const [user2, setUser2] = useState(null);

  const update_serv = (username) => {
    setUser2({ username });
  };

  return (
    <UserContext.Provider value={{ user2, update_serv }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
