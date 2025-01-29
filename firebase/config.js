// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL3-Xn4uUbYDiML6OWdjFG13hS8PQBW0g",
  authDomain: "proyecto-nextjs-coderhouse.firebaseapp.com",
  projectId: "proyecto-nextjs-coderhouse",
  storageBucket: "proyecto-nextjs-coderhouse.firebasestorage.app",
  messagingSenderId: "316085168451",
  appId: "1:316085168451:web:025cf97393e974a8c6a7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);