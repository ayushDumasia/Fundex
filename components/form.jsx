import { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/detailed-questions',
            query: { name },
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h1 className="text-2xl mb-4">Enter Your Name</h1>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">
                    Next
                </button>
            </form>
        </div>
    );
};

export default Form;
