import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-balade.firebaseapp.com",
  projectId: "react-balade",
  storageBucket: "react-balade.appspot.com",
  messagingSenderId: "972449492334",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-ZW6DWXY0J3",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
