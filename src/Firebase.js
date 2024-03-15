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
  apiKey: "AIzaSyCD-4uIQFOBPZloMOcEeQY9T9PT7usWrag",
  authDomain: "chat-fc929.firebaseapp.com",
  projectId: "chat-fc929",
  storageBucket: "chat-fc929.appspot.com",
  messagingSenderId: "231442396020",
  appId: "1:231442396020:web:7a8125dc67aa7dbc84f221",
  measurementId: "G-4DC9FLXY15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage();
