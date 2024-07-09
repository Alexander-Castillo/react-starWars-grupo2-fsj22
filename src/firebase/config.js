// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBO4DQys0Ko8GodqHbFRqtijq6lHKTeHNM",

    authDomain: "react-starwars-grupo2-fsj22.firebaseapp.com",

    projectId: "react-starwars-grupo2-fsj22",

    storageBucket: "react-starwars-grupo2-fsj22.appspot.com",

    messagingSenderId: "532293823698",

    appId: "1:532293823698:web:58fd9bce81dc5d3a52110b",

    measurementId: "G-7BLN5HLR6Y"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);