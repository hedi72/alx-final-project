// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqSOuQRxSw9ugUgLXWOG1fsahqpjIguNU",
  authDomain: "animazoneauthen.firebaseapp.com",
  projectId: "animazoneauthen",
  storageBucket: "animazoneauthen.appspot.com",
  messagingSenderId: "641880889237",
  appId: "1:641880889237:web:174023970fb5f931cb089c",
  measurementId: "G-EGSWCEC0CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
export const auth = getAuth(app);
