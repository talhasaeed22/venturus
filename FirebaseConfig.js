
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyvv4vsiA7HA1O5fRZx8ADMVnPnSWin64",
  authDomain: "venturus-db95a.firebaseapp.com",
  projectId: "venturus-db95a",
  storageBucket: "venturus-db95a.appspot.com",
  messagingSenderId: "567460814189",
  appId: "1:567460814189:web:04b9aaf8f5877e805cce64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);