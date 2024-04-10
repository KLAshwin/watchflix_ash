// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwkzJZWa7bz10ET43PU4fEqbHO-9rt5lw",
  authDomain: "watchflix-a0440.firebaseapp.com",
  projectId: "watchflix-a0440",
  storageBucket: "watchflix-a0440.appspot.com",
  messagingSenderId: "79434653907",
  appId: "1:79434653907:web:c846d66c6283bbec15f426",
  measurementId: "G-SFHJB90QMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);