import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBST5xFYpcN0Z3RQj4NtZGlXZR4umWnED0",
    authDomain: "tubes-2b0ba.firebaseapp.com",
    projectId: "tubes-2b0ba",
    storageBucket: "tubes-2b0ba.firebasestorage.app",
    messagingSenderId: "674777260944",
    appId: "1:674777260944:web:384dccc2206d3219874915",
    measurementId: "G-8GXE0B8DEZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let analytics;
isSupported().then((supported) =>
    supported ? (analytics = getAnalytics(app)) : null
);

export { app, db, auth, analytics };
