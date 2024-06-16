// components/AuthComponent.jsx
import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    // Your Firebase config object from Firebase Console
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const AuthComponent = () => {
    useEffect(() => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const githubProvider = new firebase.auth.GithubAuthProvider();

        const handleSignIn = async (provider) => {
            try {
                await firebase.auth().signInWithPopup(provider);
                // Redirect or navigate to the next step after successful sign-in
                window.location.href = '/stepform';
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        return () => {
            firebase.auth().signOut();
        };
    }, []);

    return null;
};

export default AuthComponent;
