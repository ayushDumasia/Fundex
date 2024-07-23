// components/AdditionalInfoForm.jsx
import { useState } from 'react';

const AdditionalInfoForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        window.location.href = '/stepform';
    };

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl mb-4">Additional Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Gender
                    </label>
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Date of Birth (dd/mm/yyyy)
                    </label>
                    <input
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Country
                    </label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Continue to Form
                </button>
            </form>
        </div>
    );
};

export default AdditionalInfoForm;
