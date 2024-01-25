// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC7x4Q587vMp4ErOCJlIWc6KGf9hI9mYg",
  authDomain: "my-ecomerce-b401e.firebaseapp.com",
  projectId: "my-ecomerce-b401e",
  storageBucket: "my-ecomerce-b401e.appspot.com",
  messagingSenderId: "397504209564",
  appId: "1:397504209564:web:e01275393e797ad0270359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);