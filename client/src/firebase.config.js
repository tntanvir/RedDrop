// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEtoFdj2cgs4PMxew672DJa4Zj_x0nTmE",
    authDomain: "red-drop-4d803.firebaseapp.com",
    projectId: "red-drop-4d803",
    storageBucket: "red-drop-4d803.appspot.com",
    messagingSenderId: "882169809342",
    appId: "1:882169809342:web:ed0655e63cbd30c59051ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;