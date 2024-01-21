
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt6LgamVpnPf1jJOJF_eOWiP3oHAJUA5c",
  authDomain: "expense-tracker-153e0.firebaseapp.com",
  projectId: "expense-tracker-153e0",
  storageBucket: "expense-tracker-153e0.appspot.com",
  messagingSenderId: "858966793879",
  appId: "1:858966793879:web:470ddf7afa182765f213d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 