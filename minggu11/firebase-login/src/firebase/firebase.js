import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // Your config values
    apiKey: "AIzaSyAwah53fXUAUQ7VQCgcqPWbzbGPvG9-3Mc",
    authDomain: "react-firebaselogin-bb4fb.firebaseapp.com",
    projectId: "react-firebaselogin-bb4fb",
    storageBucket: "react-firebaselogin-bb4fb.appspot.com",
    messagingSenderId: "854925905198",
    appId: "1:854925905198:web:522867cf7f6717253fbebf",
    measurementId: "G-CEB1TTXS4R"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;