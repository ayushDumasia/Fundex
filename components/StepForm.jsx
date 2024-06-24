'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { userCollection } from '@/firebaseService/collections/userCollection/userCollection';
import Image from 'next/image';
import { theme } from '@/theme';

const steps = [
    {
        question: 'What is your name?',
        type: 'text',
        name: 'name',
    },
    {
        question: 'How do you feel about your finances today?',
        type: 'options',
        name: 'finance_feeling',
        options: [' 😊 Great', ' 🙂 Okay', ' 😕 Bad', ' 😢 Terrible'],
    },
    {
        question: 'Who do you spend money on?',
        type: 'multiple',
        name: 'spending_on',
        options: ['Family', 'Friends', 'Myself', 'Charity'],
    },
    {
        question: 'Tell about your home',
        type: 'options',
        name: 'home_status',
        options: ['I rent', 'I own', 'Other'],
    },
    {
        question: 'Do you have a mortgage?',
        type: 'yesno',
        name: 'mortgage',
    },
    {
        question: 'Do you have any debt?',
        type: 'multiple',
        name: 'debt',
        options: [
            'Student loans',
            'Credit card debt',
            'Car loan',
            'Personal loan',
            'None',
        ],
    },
    {
        question: 'How do you get around?',
        type: 'multiple',
        name: 'transport',
        options: ['Car', 'Bike', 'Public transport', 'Walking'],
    },
    {
        question: 'Which do you regularly spend money on?',
        type: 'multiple',
        name: 'regular_spending',
        options: ['Food', 'Rent', 'Entertainment', 'Utilities'],
    },
    {
        question: 'Which of these subscriptions do you have?',
        type: 'multiple',
        name: 'subscriptions',
        options: ['Netflix', 'Spotify', 'Amazon Prime', 'Other'],
    },
    {
        question: 'What are some expenses that always sneak up on you?',
        type: 'multiple',
        name: 'sneaky_expenses',
        options: ['Car repairs', 'Medical bills', 'Gifts', 'Others'],
    },
    {
        question: 'Are you saving, or planning to, for any of these?',
        type: 'multiple',
        name: 'savings_goals',
        options: [
            'Emergency fund',
            'Retirement',
            'Investment',
            'Baby expenses',
        ],
    },
    {
        question: 'What else do you want to include - without stress or guilt?',
        type: 'text',
        name: 'additional_notes',
    },
];

const StepForm = () => {
    const { email } = useSelector((state) => state.user);
    const findUser = query(userCollection, where('email', '==', email));
    const [userDocId, setUserDocId] = useState(null);

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

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleButtonClick = (name, value) => {
        setFormData({
            ...formData,
            [name]:
                formData[name] && Array.isArray(formData[name])
                    ? formData[name].includes(value)
                        ? formData[name].filter((v) => v !== value)
                        : [...formData[name], value]
                    : value,
        });
    };

    const isCurrentStepValid = () => {
        if (currentStep.type === 'text') {
            return formData[currentStep.name]?.trim().length > 0;
        }
        if (currentStep.type === 'options' || currentStep.type === 'yesno') {
            return formData[currentStep.name] !== undefined;
        }
        if (currentStep.type === 'multiple') {
            return formData[currentStep.name]?.length > 0;
        }
        return true;
    };

    const handleNext = async () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            try {
                if (userDocId) {
                    await updateDoc(doc(userCollection, userDocId), formData);
                }
                console.log('Form submitted:', formData);
                const searchParams = new URLSearchParams(formData).toString();
                router.push(`/manage?${searchParams}`);
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const currentStep = steps[step];

    return (
        <div className="p-8 rounded-2xl shadow-md max-w-[75%] mx-auto mt-10 bg-[#1c1c24] min-h-[70%] text-white flex flex-col">
            <div className="flex flex-1 items-center">
                {step <= 3 && (
                    <div className="w-1/2 flex justify-center">
                        <Image
                            // src="/public/image.svg"
                            src="https://app.ynabassets.com/24.41/images/category-set-wizard/mug.svg"
                            width={550}
                            height={550}
                            alt="Example image"
                            className="rounded-2xl  bg-[#8d6dfe] h-[35rem]"
                        />
                    </div>
                )}
                <div className="flex-1 flex flex-col justify-center items-center text-start">
                    <div className="w-full max-w-md">
                        {currentStep.type === 'text' && (
                            <div className="flex flex-col ">
                                <h2 className="text-2xl font-normal mb-8  text-gray-300">
                                    What should we call you?
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Your first name"
                                    name={currentStep.name}
                                    value={formData[currentStep.name] || ''}
                                    onChange={(e) =>
                                        handleButtonClick(
                                            currentStep.name,
                                            e.target.value
                                        )
                                    }
                                    className="w-full p-4  font-normal rounded-lg bg-[#384152] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6dfe]"
                                />
                            </div>
                        )}
                        {currentStep.type === 'options' && (
                            <div>
                                <h2 className="text-2xl font-normal mb-4 text-gray-300">
                                    {currentStep.question}
                                </h2>
                                {currentStep.options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() =>
                                            handleButtonClick(
                                                currentStep.name,
                                                option
                                            )
                                        }
                                        className={`p-4 border rounded-lg font-normal w-full text-left mb-2 ${
                                            formData[currentStep.name] ===
                                            option
                                                ? 'bg-[#8d6dfe] text-white'
                                                : 'bg-[#384152] text-white'
                                        } hover:bg-[#8d6dfe]/80 hover:text-white transition duration-200`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                        {currentStep.type === 'multiple' && (
                            <div>
                                <h2 className="text-2xl font-normal mb-8 text-gray-300">
                                    {currentStep.question}
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {currentStep.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() =>
                                                handleButtonClick(
                                                    currentStep.name,
                                                    option
                                                )
                                            }
                                            className={`p-4 border rounded-lg w-full font-normal text-left mb-2 ${
                                                formData[
                                                    currentStep.name
                                                ]?.includes(option)
                                                    ? 'bg-[#8d6dfe] text-white'
                                                    : 'bg-[#384152] text-white'
                                            } hover:bg-[#8d6dfe]/80 hover:text-white transition duration-200`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentStep.type === 'yesno' && (
                            <div className="mb-4">
                                <h2 className="text-2xl font-normal mb-10 text-gray-300">
                                    {currentStep.question}
                                </h2>
                                <div className="flex flex-col space-y-4">
                                    <button
                                        onClick={() =>
                                            handleButtonClick(
                                                currentStep.name,
                                                'Yes'
                                            )
                                        }
                                        className={`p-4 border rounded-lg w-full mb-2 ${
                                            formData[currentStep.name] === 'Yes'
                                                ? 'bg-[#8d6dfe] text-white'
                                                : 'bg-[#384152] text-white'
                                        } hover:bg-[#8d6dfe]/80 hover:text-white transition duration-200`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleButtonClick(
                                                currentStep.name,
                                                'No'
                                            )
                                        }
                                        className={`p-4 border rounded-lg w-full mb-2 ${
                                            formData[currentStep.name] === 'No'
                                                ? 'bg-[#8d6dfe] text-white'
                                                : 'bg-[#384152] text-white'
                                        } hover:bg-[#8d6dfe]/80 hover:text-white transition duration-200`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="flex font-normal justify-between mt-16 w-full">
                            {step > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="bg-purple-600 text-white p-4 rounded-lg w-[48%] transition duration-200 hover:bg-purple-500"
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={!isCurrentStepValid()}
                                className={`p-4 rounded-lg w-[48%] transition duration-200 ${
                                    isCurrentStepValid()
                                        ? 'bg-[#8d6dfe] text-white hover:bg-[#8d6dfe]/80'
                                        : 'bg-gray-500 text-gray-400 cursor-not-allowed'
                                }`}
                            >
                                {step < steps.length - 1
                                    ? 'Continue'
                                    : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepForm;
