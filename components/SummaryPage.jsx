'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SummaryPage = () => {
    const [formData, setFormData] = useState({});
    const [amounts, setAmounts] = useState({});
    const router = useRouter();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('formData'));
        if (data) {
            setFormData(data);
        } else {
            // Redirect back to the form if no data is found
            router.push('/');
        }
    }, []);

    const handleAmountChange = (e) => {
        const { name, value } = e.target;
        setAmounts({
            ...amounts,
            [name]: value
        });
    };

    const handleContinue = async () => {
        try {
            const response = await fetch('/api/submitData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ formData, amounts })
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Data saved:', result);
                // Redirect to another page or show success message
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl mb-4">Summary of Your Selections</h2>
            <div className="mb-4 flex flex-col space-y-2">
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                        <span className="font-bold">{key}:</span>
                        <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                        <input
                            type="number"
                            name={key}
                            placeholder={`Amount for ${key}`}
                            value={amounts[key] || ''}
                            onChange={handleAmountChange}
                            className="w-full p-2 border rounded mt-2"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={handleContinue}
                className="bg-blue-500 text-white p-2 rounded w-full mt-4"
            >
                Continue
            </button>
        </div>
    );
};

export default SummaryPage;
