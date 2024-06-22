// utils/firebaseAuth.js
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//     apiKey: 'AIzaSyByimD_W-ez0-WmgFb4n7NU65CIkGL922A',
//     authDomain: 'fundex-f151c.firebaseapp.com',
//     projectId: 'fundex-f151c',
//     storageBucket: 'fundex-f151c.appspot.com',
//     messagingSenderId: '701012967820',
//     appId: '1:701012967820:web:60b954277183047270d6a9',
//     measurementId: 'G-NSL4EEBXJM',
// }

const firebaseConfig = {
    apiKey: 'AIzaSyD-e5s_5QJEQj4qK61Icol3d5GvxT1tM3Q',
    authDomain: 'buildspace-10835.firebaseapp.com',
    projectId: 'buildspace-10835',
    storageBucket: 'buildspace-10835.appspot.com',
    messagingSenderId: '342738812356',
    appId: '1:342738812356:web:eb5bc3a2757893e125b891',
    measurementId: 'G-TCKSH9X72Y',
}

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// } else {
//     firebase.app()
// }
const app = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage, googleProvider }
