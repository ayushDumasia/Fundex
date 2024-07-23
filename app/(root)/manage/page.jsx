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
        <div className="bg-[#1c1c24] p-8 rounded-2xl shadow-md max-w-[75%] mx-auto mt-10 text-white flex flex-col">
            <h2 className="text-4xl font-bold mb-8 text-[#8d6dfe]">
                Manage Your Finances
            </h2>
            <div className="mb-8">
                <h3 className="text-2xl font-normal mb-4 text-gray-300">
                    Your Responses:
                </h3>
                <pre className="bg-[#384152] p-4 rounded-lg font-normal text-white">
                    {JSON.stringify(formData, null, 2)}
                </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-8">
                        <h4 className="text-2xl font-normal mb-4 text-gray-300">
                            {key}
                        </h4>
                        <div className="mb-4">
                            <label className="block mb-2 text-xl font-normal text-gray-300">
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
                                className="w-full p-4 font-normal rounded-lg bg-[#384152] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6dfe]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-xl font-normal text-gray-300">
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
                                className="w-full p-4 font-normal rounded-lg bg-[#384152] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6dfe]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className="bg-[#8d6dfe] text-black p-4 rounded-lg w-full font-normal transition duration-200 hover:bg-[#8d6dfe]/80 mt-8"
            >
                Submit
            </button>
        </div>
    );
};

export default Manage;
