// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQaXkd628GVuGVQ3D-10aZbtkz-IS-OIw",
  authDomain: "grpchat-e7c15.firebaseapp.com",
  projectId: "grpchat-e7c15",
  storageBucket: "grpchat-e7c15.appspot.com",
  messagingSenderId: "199328258185",
  appId: "1:199328258185:web:23b200f7c799ebcba88e58",
  measurementId: "G-1MLL9JT6X1"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage();