import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: "ek-student-dfaa9.firebaseapp.com",
  projectId: "ek-student-dfaa9",
  storageBucket: "ek-student-dfaa9.appspot.com",
  messagingSenderId: "223785383157",
  appId: "1:223785383157:web:8e73b3b340660f9a7c01bc",
  databaseURL: "https://ek-student-dfaa9-default-rtdb.europe-west1.firebasedatabase.app/",
};

let app: any;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getDatabase(app);
const auth = firebase.auth();

export { db, auth };
