// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdoJD2wDwlIkn94G_dA3UoH0mHj79fMWs",
  authDomain: "social-overlay-dc1a1.firebaseapp.com",
  projectId: "social-overlay-dc1a1",
  storageBucket: "social-overlay-dc1a1.appspot.com",
  messagingSenderId: "839331682141",
  appId: "1:839331682141:web:097b247924b93cac1a7ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db }; // Make sure to export both app and db
