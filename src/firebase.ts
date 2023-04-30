// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2zFC295MGE0ONvzRvI66CBy_CDBye3cY",
  authDomain: "vjpchat-53073.firebaseapp.com",
  projectId: "vjpchat-53073",
  storageBucket: "vjpchat-53073.appspot.com",
  messagingSenderId: "748502308888",
  appId: "1:748502308888:web:5d66d268804dc0d003cb6d",
  measurementId: "G-S9PQ9MZC90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
