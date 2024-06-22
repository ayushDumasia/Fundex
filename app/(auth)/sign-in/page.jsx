'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    app,
    auth,
    firestore,
    googleProvider,
} from '@/firebaseService/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const SignInPage = () => {
    let auth = getAuth(app);
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    const signInWithGoogle = async () => {
        try {
            const result = await auth.signInWithPopup(auth, googleProvider);
            const { user } = result;

            const userDoc = await firestore
                .collection('User')
                .doc(user.uid)
                .get();

            if (!userDoc.exists) {
                await firestore.collection('users').doc(user.uid).set({
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                });
            }

            router.push('/additionalinfo');
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    useEffect(() => {
        if (user) {
            router.push('/stepform');
        }
    }, [user, router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
                <h2 className="text-2xl mb-4">Sign In</h2>
                {error && <p className="text-red-500 mb-4">{error.message}</p>}
                <button
                    onClick={signInWithGoogle}
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
