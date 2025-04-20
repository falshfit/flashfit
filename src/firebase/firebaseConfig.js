// REPLACE the values below with your Firebase Project settings
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsqEJtE5YezEY-ZwTnA9autgLyxyWPXWo",
  authDomain: "flashfit-5da6a.firebaseapp.com",
  projectId: "flashfit-5da6a",
  storageBucket: "flashfit-5da6a.appspot.com",
  messagingSenderId: "939557869368",
  appId: "1:939557869368:web:4cd4d0db2162e64d0313cd",
  measurementId: "G-CZNPDZ4W57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };