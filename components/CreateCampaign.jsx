'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GiReceiveMoney } from 'react-icons/gi';

const CreateCampaign = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/createCampaign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                router.push('/success');
            } else {
                console.error('Failed to create campaign');
            }
        } catch (error) {
            console.error('Error creating campaign:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <div className="bg-[#1c1c24] font-normal flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 w-full sm:w-[90%] mx-auto">
            {isLoading && (
                <div className="absolute inset-0 bg-opacity-50 bg-gray-800 flex items-center justify-center">
                    <Loader />
                </div>
            )}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] mb-[30px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
                    Start a Campaign
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-full">
                <div className="flex flex-row gap-[40px] mb-[30px]">
                    <div className="w-full sm:w-1/2 mb-4">
                        <label className="text-white block mb-[8px]">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none sm:w-[70%]"
                            required
                        />
                    </div>
                    <div className="w-full sm:w-1/2 mb-4">
                        <label className="text-white block mb-[8px]">
                            Campaign Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleInputChange}
                            placeholder="Write a title"
                            className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none sm:w-[70%]"
                            required
                        />
                    </div>
                </div>

                <div className="mb-[30px]">
                    <label className="text-white block mb-[8px]">Story *</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleInputChange}
                        placeholder="Write your story"
                        className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none"
                        required
                    />
                </div>

                <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] mb-[30px]">
                    <GiReceiveMoney color="white" size={30} />
                    <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                        You will get 100% of the raised amount
                    </h4>
                </div>

                <div className="flex flex-row gap-[40px] mb-[30px]">
                    <div className="w-full sm:w-1/2 mb-4">
                        <label className="text-white block mb-[8px]">
                            Goal *
                        </label>
                        <input
                            type="text"
                            name="target"
                            value={form.target}
                            onChange={handleInputChange}
                            placeholder="ETH 0.50"
                            className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none sm:w-[70%]"
                            required
                        />
                    </div>
                    <div className="w-full sm:w-1/2 mb-4">
                        <label className="text-white block mb-[8px]">
                            End Date *
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            value={form.deadline}
                            onChange={handleInputChange}
                            placeholder="End Date"
                            className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none sm:w-[70%]"
                            required
                        />
                    </div>
                </div>

                <div className="mb-[30px]">
                    <label className="text-white block mb-[8px]">
                        Campaign Im age *
                    </label>
                    <input
                        type="url"
                        name="image"
                        value={form.image}
                        onChange={handleInputChange}
                        placeholder="Place image URL of your campaign"
                        className="bg-gray-700 rounded-md px-3 py-2 text-white w-full focus:outline-none"
                        required
                    />
                </div>

                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="bg-[#1dc071] hover:bg-[#10a25c] text-white py-2 px-6 rounded-md focus:outline-none"
                    >
                        {isLoading ? 'Submitting...' : 'Submit New Campaign'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCampaign;
