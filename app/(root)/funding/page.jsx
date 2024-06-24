'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const CampaignPage = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCreateCampaign = () => {
        router.push('/createcampaign');
    };

    return (
        <div className="min-h-screen bg-black p-4 flex flex-col items-center">
            <div className="w-full max-w-md flex sm:flex-row justify-center items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0 sm:mr-4 sm:flex-grow">
                    <input
                        type="text"
                        className="w-full sm:max-w-xs px-4 py-2 text-gray-700 bg-white rounded-full shadow-md focus:outline-none"
                        placeholder="Search..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button className="p-2">
                        <FiSearch className="text-gray-600" size={20} />
                    </button>
                </div>
                <button
                    onClick={handleCreateCampaign}
                    className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none mt-2 sm:mt-0"
                >
                    Create Campaign
                </button>
            </div>
        </div>
    );
};

export default CampaignPage;
