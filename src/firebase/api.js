import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase.config";

const collectionName = "reservations";

export const savereservation = (newLink) =>
  addDoc(collection(db, collectionName), newLink);

export const updatereservation = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getreservations = () => getDocs(collection(db, collectionName));

export const deletereservation = (id) => deleteDoc(doc(db, collectionName, id));

export const getreservation = (id) => getDoc(doc(db, collectionName, id));
