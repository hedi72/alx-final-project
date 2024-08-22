import { useEffect } from 'react';
import { auth, db } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// add authentification user to firestore

function App() {

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Créer une requête pour rechercher l'utilisateur dans Firestore en fonction de son UID
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        
        
        // Exécuter la requête
        const querySnapshot = await getDocs(q);

        console.log("que", querySnapshot);

        // Vérifier si des documents ont été retournés
        if (querySnapshot.empty) {
          try {
            // Ajouter l'utilisateur à Firestore s'il n'existe pas déjà
            await addDoc(collection(db, 'users'), {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            });
            console.log('Utilisateur ajouté à Firestore avec succès');
          } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur à Firestore :', error);
          }
        } else {
          console.log('L\'utilisateur existe déjà dans Firestore');
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Votre contenu React */} 
    </div>
  );
}

export default App;
