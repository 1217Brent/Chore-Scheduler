// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyrqXpBjXX5r_qmqTWXS_Za-nw78K1Uvc",
  authDomain: "chore-scheduler-fda6a.firebaseapp.com",
  projectId: "chore-scheduler-fda6a",
  storageBucket: "chore-scheduler-fda6a.firebasestorage.app",
  messagingSenderId: "235537563742",
  appId: "1:235537563742:web:236d06bd32271db33eb4cf",
  measurementId: "G-L4N06G3J4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);