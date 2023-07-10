// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALO46DLYAAzlyb4sSaMpGxym6Qyaqgrw4",
  authDomain: "englishboost-ebb40.firebaseapp.com",
  projectId: "englishboost-ebb40",
  storageBucket: "englishboost-ebb40.appspot.com",
  messagingSenderId: "37685497723",
  appId: "1:37685497723:web:7477913e0b22240d2b37de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();