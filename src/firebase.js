import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWX8uxo8sQ3ndcqY9tdTJoKlqIOE7ud9U",
  authDomain: "react-balade.firebaseapp.com",
  projectId: "react-balade",
  storageBucket: "react-balade.appspot.com",
  messagingSenderId: "972449492334",
  appId: "1:972449492334:web:e49846e39abf6d0b7b657f",
  measurementId: "G-ZW6DWXY0J3",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
