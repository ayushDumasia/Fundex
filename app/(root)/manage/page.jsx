'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { userCollection } from '@/firebaseService/collections/userCollection/userCollection';

const Manage = () => {
    const router = useRouter();
    const { email } = useSelector((state) => state.user);
    const findUser = query(userCollection, where('email', '==', email));
    const [formData, setFormData] = useState({});
    const [amounts, setAmounts] = useState({});
    const [userDocId, setUserDocId] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const data = {};
        for (let [key, value] of searchParams.entries()) {
            data[key] = value;
        }
        setFormData(data);
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const querySnapshot = await getDocs(findUser);
                querySnapshot.forEach((doc) => {
                    setUserDocId(doc.id);
                });
            } catch (error) {
                console.error('Error finding user:', error);
            }
        };
        fetchUser();
    }, [email]);

    const handleAmountChange = (option, type, value) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [option]: {
                ...prevAmounts[option],
                [type]: value,
            },
        }));
    };

    const handleSubmit = async () => {
        try {
            if (userDocId) {
                await updateDoc(doc(userCollection, userDocId), { amounts });
                console.log('Amounts saved:', amounts);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl mb-4">Manage Your Finances</h2>
            <div className="mb-4">
                <h3 className="text-xl mb-2">Your Responses:</h3>
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(formData, null, 2)}
                </pre>
            </div>
            {Object.keys(formData).map((key) => (
                <div key={key} className="mb-4">
                    <h4 className="text-lg mb-2">{key}</h4>
                    <div className="mb-2">
                        <label className="block mb-1">
                            Total Amount for {key}:
                        </label>
                        <input
                            type="number"
                            value={amounts[key]?.totalAmount || ''}
                            onChange={(e) =>
                                handleAmountChange(
                                    key,
                                    'totalAmount',
                                    e.target.value
                                )
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">
                            Monthly Payment for {key}:
                        </label>
                        <input
                            type="number"
                            value={amounts[key]?.monthlyPayment || ''}
                            onChange={(e) =>
                                handleAmountChange(
                                    key,
                                    'monthlyPayment',
                                    e.target.value
                                )
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded w-full"
            >
                Submit
            </button>
        </div>
    );
};

export default Manage;
