// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPJw2YAwS_F8HK4kbm3gFEAz0dOMNeKfs",
  authDomain: "digital-staff-management-app.firebaseapp.com",
  projectId: "digital-staff-management-app",
  storageBucket: "digital-staff-management-app.appspot.com",
  messagingSenderId: "943589449369",
  appId: "1:943589449369:web:809ba3f05e9525b8cf2208",
  measurementId: "G-LPBTSFNMM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app };