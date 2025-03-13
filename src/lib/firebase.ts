import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKKnLvd-Ef7yVHuz6kTzOtXqblXi1sDJA",
  authDomain: "razin-c6787.firebaseapp.com",
  projectId: "razin-c6787",
  storageBucket: "razin-c6787.firebasestorage.app",
  messagingSenderId: "904678997106",
  appId: "1:904678997106:web:08db94698c568c3d2f56eb",
  measurementId: "G-6GJN456ETT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);