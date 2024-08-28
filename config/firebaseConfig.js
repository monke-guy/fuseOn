// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fuseon-62617.firebaseapp.com",
  projectId: "fuseon-62617",
  storageBucket: "fuseon-62617.appspot.com",
  messagingSenderId: "864355167403",
  appId: "1:864355167403:web:708e27862d7813af769bee",
  measurementId: "G-2NEXBTCLHZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
