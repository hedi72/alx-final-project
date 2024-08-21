import { useEffect, useState } from "react";
import { auth, db } from '../firebase/firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Utilisateur connecté, récupérer les données d'utilisateur depuis Firestore
        const usersCollection = collection(db, 'users');
        const snapshot = await getDocs(usersCollection);
        const userData = snapshot.docs.map(doc => doc.data());
        setUsers(userData);
      } else {
        // Utilisateur non connecté
        setUsers([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.uid}>{user.email}</li>
          // Rendre d'autres propriétés de l'utilisateur si nécessaire
        ))}
      </ul>
    </div>
  );
}

export default App;
