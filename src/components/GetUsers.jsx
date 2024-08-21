import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [userData, setUserData] = useState([]);
  console.log(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer la référence de la collection "users"
        const usersCollectionRef = collection(db, 'users');
        
        // Récupérer tous les documents de la collection "users"
        const snapshot = await getDocs(usersCollectionRef);

        // Créer un tableau pour stocker les données des utilisateurs
        const userDataArray = [];
        snapshot.forEach(doc => {
          // Ajouter les données de chaque document à notre tableau
          userDataArray.push(doc.data());
        });

        // Mettre à jour l'état avec les données récupérées
        setUserData(userDataArray);
      } catch (error) {
        console.error('Erreur lors de la récupération des données Firestore:', error);
      }
    };

    

    fetchData(); // Appeler la fonction pour récupérer les données Firestore lors du montage du composant
  }, []);

  return (
    <div>
     
    </div>
  );
}

export default App;
