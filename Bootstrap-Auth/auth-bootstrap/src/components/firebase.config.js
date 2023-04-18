// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1CI9K8iAz3UIvMGYTGb-2IvI8X4EtvpY",
  authDomain: "bootstrap-authentication.firebaseapp.com",
  projectId: "bootstrap-authentication",
  storageBucket: "bootstrap-authentication.appspot.com",
  messagingSenderId: "860974377857",
  appId: "1:860974377857:web:e518d2d1263e6a0811d680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;