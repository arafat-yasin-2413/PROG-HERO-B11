// DONOT SHARE FIREBASE CONFIG ONLINE


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeIQT0RUAKGk1yN588_bSoNwnBAttoZVM",
  authDomain: "simple-firebase-auth2-88029.firebaseapp.com",
  projectId: "simple-firebase-auth2-88029",
  storageBucket: "simple-firebase-auth2-88029.firebasestorage.app",
  messagingSenderId: "612818604309",
  appId: "1:612818604309:web:c99e8c48874ecbbda1191c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)