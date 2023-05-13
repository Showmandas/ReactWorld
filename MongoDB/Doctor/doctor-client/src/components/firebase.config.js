// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkMaocFZjz5WZ8BmMSw6V-x41kWKaDigs",
  authDomain: "doctor-appointment-2a7b4.firebaseapp.com",
  projectId: "doctor-appointment-2a7b4",
  storageBucket: "doctor-appointment-2a7b4.appspot.com",
  messagingSenderId: "995087209943",
  appId: "1:995087209943:web:4c932dea91d65a70082792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;