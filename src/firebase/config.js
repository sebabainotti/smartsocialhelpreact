// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6FMfi4RGzE0NjGF6_RLvE0R1a9HkFR3k",
    authDomain: "smartsocialhelp-24.firebaseapp.com",
    projectId: "smartsocialhelp-24",
    storageBucket: "smartsocialhelp-24.appspot.com",
    messagingSenderId: "537626906669",
    appId: "1:537626906669:web:471cd6657dd0a40280e8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);