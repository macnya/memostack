import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxkFAw8NaFXNDk_9nRSZDn951n71qWfJY",
  authDomain: "memostack-c8826.firebaseapp.com",
  databaseURL: "https://memostack-c8826-default-rtdb.firebaseio.com",
  projectId: "memostack-c8826",
  storageBucket: "memostack-c8826.appspot.com", 
  messagingSenderId: "689724873846",
  appId: "1:689724873846:web:8fa2b5841c52527da01357",
  measurementId: "G-CD92P84XJX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, GoogleAuthProvider, signInWithPopup, db, storage };
