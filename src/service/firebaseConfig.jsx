// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBct84qFHvUIvB6l1mGSPwDhtn2GlxqvFE",
  authDomain: "ai-trip-planner-e4622.firebaseapp.com",
  projectId: "ai-trip-planner-e4622",
  storageBucket: "ai-trip-planner-e4622.firebasestorage.app",
  messagingSenderId: "42259869225",
  appId: "1:42259869225:web:2969956e402af6d29db638",
  measurementId: "G-ZN619C8846"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);

