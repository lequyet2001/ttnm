// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGlXvZ9ro9qKOyW-arxh7FueLciC6yK9Q",
  authDomain: "myweb-60035.firebaseapp.com",
  projectId: "myweb-60035",
  storageBucket: "myweb-60035.appspot.com",
  messagingSenderId: "1007212373299",
  appId: "1:1007212373299:web:9f1abb69eedd218d328a46",
  measurementId: "G-5X6P03D2HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);