// App.js
import React from "react";
import { UserProvider } from "./context/Newcontext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Mon Application</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
