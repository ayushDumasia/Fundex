// utils/firebaseAuth.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByimD_W-ez0-WmgFb4n7NU65CIkGL922A",
    authDomain: "fundex-f151c.firebaseapp.com",
    projectId: "fundex-f151c",
    storageBucket: "fundex-f151c.appspot.com",
    messagingSenderId: "701012967820",
    appId: "1:701012967820:web:60b954277183047270d6a9",
    measurementId: "G-NSL4EEBXJM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, googleProvider };

