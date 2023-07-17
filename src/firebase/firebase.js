// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

//type your own config


    const firebaseConfig = {
        apiKey: "AIzaSyB9HbnPZlGN7QueLr843lW6BMwihEL44_o",
        authDomain: "whatsapp-clone-68ec6.firebaseapp.com",
        projectId: "whatsapp-clone-68ec6",
        storageBucket: "whatsapp-clone-68ec6.appspot.com",
        messagingSenderId: "833406183814",
        appId: "1:833406183814:web:6c6fcae6ace5d57a212407",
        measurementId: "G-1XH9DSVHDF"
      };


// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default db;

export { auth, storage, provider };