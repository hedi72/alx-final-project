// UserProfile.js
import React, { useContext } from "react";
import UserContext2 from "../context/Newcontext";

const UserProfile = () => {
  const { user2, update_serv } = useContext(UserContext2);
  console.log(user2);

  return (
    <div>
      <div>
        <p>Veuillez vous connecter.</p>
        <button onClick={() => update_serv("utilisateur123")}>
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
