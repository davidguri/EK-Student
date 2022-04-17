// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcEpAnkGi44t3XEC5TUyMfcEKEHgCKWwA",
  authDomain: "ek-student-dfaa9.firebaseapp.com",
  projectId: "ek-student-dfaa9",
  storageBucket: "ek-student-dfaa9.appspot.com",
  messagingSenderId: "223785383157",
  appId: "1:223785383157:web:8e73b3b340660f9a7c01bc",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
