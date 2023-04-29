import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmr49l8ooKQUC-__8OHrWsc_Uk4JgfuFw",
  authDomain: "blog-spot-31ec5.firebaseapp.com",
  projectId: "blog-spot-31ec5",
  storageBucket: "blog-spot-31ec5.appspot.com",
  messagingSenderId: "999484503788",
  appId: "1:999484503788:web:ed6d5390a2c312289617c9",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
