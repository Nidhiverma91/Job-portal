// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjipOiPzvz6uQpR2OdiiwyeZhDgipZ9cQ",
  authDomain: "job-portal-86252.firebaseapp.com",
  projectId: "job-portal-86252",
  storageBucket: "job-portal-86252.appspot.com",
  messagingSenderId: "832392986447",
  appId: "1:832392986447:web:7f5215e49e4ec86dc2cf3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export {db};