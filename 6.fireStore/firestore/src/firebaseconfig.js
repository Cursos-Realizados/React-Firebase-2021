// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, addDoc, collection, getDocs, deleteDoc, updateDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIZwYRj_5hnqUH1K8DXOtB4te4QGMfIAE",
  authDomain: "reactfirebase-58095.firebaseapp.com",
  projectId: "reactfirebase-58095",
  storageBucket: "reactfirebase-58095.appspot.com",
  messagingSenderId: "398261473715",
  appId: "1:398261473715:web:ba375af738f8515f123bc6",
  measurementId: "G-Z7Y4GQDZFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

export {store, doc, addDoc, collection, getDocs, deleteDoc, updateDoc};