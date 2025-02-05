// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0g6Je_C1Tz29f5HmBsPbw4Jin_uy_JYw",
  authDomain: "knowhow-25.firebaseapp.com",
  projectId: "knowhow-25",
  storageBucket: "knowhow-25.firebasestorage.app",
  messagingSenderId: "806991478229",
  appId: "1:806991478229:web:8b2dd0bf38eaef88e9515c",
  measurementId: "G-PM2W0E9R8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);