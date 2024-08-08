// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMfl6d9OoZG9byLxmcYI4-xZRoOOpgf-w",
    authDomain: "snap-project-e4b5e.firebaseapp.com",
    projectId: "snap-project-e4b5e",
    storageBucket: "snap-project-e4b5e.appspot.com",
    messagingSenderId: "446425379038",
    appId: "1:446425379038:web:994c2b038fc8611e80d24f",
    measurementId: "G-1KDC5Q2H05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
