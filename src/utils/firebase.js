import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACZQ6RIdgi1jNEXPNG0LdD0y_DbL3GDXU",
  authDomain: "spoti5.firebaseapp.com",
  projectId: "spoti5",
  storageBucket: "spoti5.appspot.com",
  messagingSenderId: "946623724779",
  appId: "1:946623724779:web:e3bbfcfc32d45bf5f192ae",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword, updateProfile };
