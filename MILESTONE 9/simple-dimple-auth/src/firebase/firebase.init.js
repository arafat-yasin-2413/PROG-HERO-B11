// DANGER: DO NOT SHARE CONFIG ONLINE


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFxJYm5ZzOdn4_sy2hvkaDujgU-0nbuhw",
  authDomain: "simple-dimple-auth-1af3b.firebaseapp.com",
  projectId: "simple-dimple-auth-1af3b",
  storageBucket: "simple-dimple-auth-1af3b.firebasestorage.app",
  messagingSenderId: "316898696314",
  appId: "1:316898696314:web:0309258cf343a9936eafc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);