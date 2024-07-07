// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6261a.firebaseapp.com",
  projectId: "mern-auth-6261a",
  storageBucket: "mern-auth-6261a.appspot.com",
  messagingSenderId: "337457971294",
  appId: "1:337457971294:web:c044d817e4c754ee58b4cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);