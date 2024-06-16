import AuthComponent from '@/components/AuthComponent';

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <AuthComponent />
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Sign In / Sign Up</h1>
                <button
                    onClick={() => handleSignIn(googleProvider)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded m-2"
                >
                    Sign in with Google
                </button>
                <button
                    onClick={() => handleSignIn(githubProvider)}
                    className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded m-2"
                >
                    Sign in with GitHub
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
