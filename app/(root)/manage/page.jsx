'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Manage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [amounts, setAmounts] = useState({});

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const data = {};
        for (let [key, value] of searchParams.entries()) {
            data[key] = value;
        }
        setFormData(data);
    }, []);

    const handleAmountChange = (option, type, value) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [option]: {
                ...prevAmounts[option],
                [type]: value,
            },
        }));
    };

    const handleSubmit = () => {
        console.log('Amounts:', amounts);
    };

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl mb-4">Manage Your Finances</h2>
            <div className="mb-4">
                <h3 className="text-xl mb-2">Your Responses:</h3>
                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
            </div>
            {Object.keys(formData).map((key) => (
                <div key={key} className="mb-4">
                    <h4 className="text-lg mb-2">{key}</h4>
                    <div className="mb-2">
                        <label className="block mb-1">Total Amount for {key}:</label>
                        <input
                            type="number"
                            value={amounts[key]?.totalAmount || ''}
                            onChange={(e) => handleAmountChange(key, 'totalAmount', e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Monthly Payment for {key}:</label>
                        <input
                            type="number"
                            value={amounts[key]?.monthlyPayment || ''}
                            onChange={(e) => handleAmountChange(key, 'monthlyPayment', e.target.value)}
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
