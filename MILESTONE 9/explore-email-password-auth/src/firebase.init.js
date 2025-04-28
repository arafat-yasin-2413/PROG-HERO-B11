// DO NOT SHARE THIS CONFIG ONLINE



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0KAo-hUYmlIj2PKQW9zCLrNVXL2syUJU",
  authDomain: "explore-email-password-a-24d33.firebaseapp.com",
  projectId: "explore-email-password-a-24d33",
  storageBucket: "explore-email-password-a-24d33.firebasestorage.app",
  messagingSenderId: "970444585740",
  appId: "1:970444585740:web:5a99d0f723685ba1996729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);