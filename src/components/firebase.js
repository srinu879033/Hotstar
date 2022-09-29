import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAd7Gbi94dLFFOlsnr2wmueoWJ8jI4a8M8",
  authDomain: "hotstar-442d0.firebaseapp.com",
  projectId: "hotstar-442d0",
  storageBucket: "hotstar-442d0.appspot.com",
  messagingSenderId: "510648817938",
  appId: "1:510648817938:web:12f8b9c31aa848b0143bcb",
  measurementId: "G-5R2KSNG2KB",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

export default db;
