import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgoFSYOZq7KKx2tOKdjJYln1cBl1oq6U8",
    authDomain: "apotek-47824.firebaseapp.com",
    databaseURL: "https://apotek-47824-default-rtdb.firebaseio.com",
    projectId: "apotek-47824",
    storageBucket: "apotek-47824.appspot.com",
    messagingSenderId: "1006490935509",
    appId: "1:1006490935509:web:5478fe88c9419db3ca025c",
    measurementId: "G-5ZJ862E4PQ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export default firebaseConfig;
//export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();