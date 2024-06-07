// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTyg9g8_YYMU8iZYC1WD-8Vn6oBhcWAGw",
  authDomain: "web-class-47ae4.firebaseapp.com",
  projectId: "web-class-47ae4",
  storageBucket: "web-class-47ae4.appspot.com",
  messagingSenderId: "363993305830",
  appId: "1:363993305830:web:837906cf2ddb5d54cc6127",
  measurementId: "G-JKC1FZ2G4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();