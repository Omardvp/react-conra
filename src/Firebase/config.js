// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDUpPFvkMXZyENLtKBDXNncZTaH_ymvU",
  authDomain: "ecommerce-reactjs2023.firebaseapp.com",
  projectId: "ecommerce-reactjs2023",
  storageBucket: "ecommerce-reactjs2023.appspot.com",
  messagingSenderId: "176998051766",
  appId: "1:176998051766:web:f6b231ef8a27d7bc615b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

