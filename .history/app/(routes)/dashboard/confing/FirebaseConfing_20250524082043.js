// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-436fb.firebaseapp.com",
  projectId: "meeting-436fb",
  storageBucket: "meeting-436fb.firebasestorage.app",
  messagingSenderId: "77535067095",
  appId: "1:77535067095:web:6dd3c4ceb875c6af17e992",
  measurementId: "G-8E9HBCLJ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);