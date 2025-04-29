// DONOT SHARE CONFIG ONLINE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuSU5sPvveqkRd49VLammUN71bjVist6Y",
  authDomain: "auth-integration-70291.firebaseapp.com",
  projectId: "auth-integration-70291",
  storageBucket: "auth-integration-70291.firebasestorage.app",
  messagingSenderId: "243480813763",
  appId: "1:243480813763:web:33d10e603088c5fd32c276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);