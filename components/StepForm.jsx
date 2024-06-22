'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const steps = [
    {
        question: "What is your name?",
        type: "text",
        name: "name"
    },
    {
        question: "How do you feel about your finances today?",
        type: "options",
        name: "finance_feeling",
        options: ["Great", "Okay", "Bad", "Terrible"]
    },
    {
        question: "Who do you spend money on?",
        type: "multiple",
        name: "spending_on",
        options: ["Family", "Friends", "Myself", "Charity"]
    },
    {
        question: "Tell about your home",
        type: "options",
        name: "home_status",
        options: ["I rent", "I own", "Other"]
    },
    {
        question: "Do you have a mortgage?",
        type: "yesno",
        name: "mortgage"
    },
    {
        question: "Do you have any debt?",
        type: "multiple",
        name: "debt",
        options: ["Student loans", "Credit card debt", "Car loan", "Personal loan", "None"]
    },
    {
        question: "How do you get around?",
        type: "multiple",
        name: "transport",
        options: ["Car", "Bike", "Public transport", "Walking"]
    },
    {
        question: "Which do you regularly spend money on?",
        type: "multiple",
        name: "regular_spending",
        options: ["Food", "Rent", "Entertainment", "Utilities"]
    },
    {
        question: "Which of these subscriptions do you have?",
        type: "multiple",
        name: "subscriptions",
        options: ["Netflix", "Spotify", "Amazon Prime", "Other"]
    },
    {
        question: "What are some expenses that always sneak up on you?",
        type: "multiple",
        name: "sneaky_expenses",
        options: ["Car repairs", "Medical bills", "Gifts", "Others"]
    },
    {
        question: "Are you saving, or planning to, for any of these?",
        type: "multiple",
        name: "savings_goals",
        options: ["Emergency fund", "Retirement", "Investment", "Baby expenses"]
    },
    {
        question: "What else do you want to include - without stress or guilt?",
        type: "text",
        name: "additional_notes"
    }
];

const StepForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleButtonClick = (name, value) => {
        setFormData({
            ...formData,
            [name]: formData[name] && Array.isArray(formData[name])
                ? formData[name].includes(value)
                    ? formData[name].filter((v) => v !== value)
                    : [...formData[name], value]
                : value
        });
    };

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            const searchParams = new URLSearchParams(formData).toString();
            console.log("Form submitted:", formData);
            router.push(`/manage?${searchParams}`);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const currentStep = steps[step];

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl mb-4">{currentStep.question}</h2>
            <div className="mb-4 flex flex-col space-y-2">
                {currentStep.type === "text" && (
                    <input
                        type="text"
                        name={currentStep.name}
                        value={formData[currentStep.name] || ""}
                        onChange={(e) => handleButtonClick(currentStep.name, e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                )}
                {currentStep.type === "options" && (
                    currentStep.options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleButtonClick(currentStep.name, option)}
                            className={`p-2 border rounded w-full ${formData[currentStep.name] === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {option}
                        </button>
                    ))
                )}
                {currentStep.type === "multiple" && (
                    currentStep.options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleButtonClick(currentStep.name, option)}
                            className={`p-2 border rounded w-full ${formData[currentStep.name] && formData[currentStep.name].includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {option}
                        </button>
                    ))
                )}
                {currentStep.type === "yesno" && (
                    <div className="flex flex-col space-y-2">
                        <button
                            onClick={() => handleButtonClick(currentStep.name, "Yes")}
                            className={`p-2 border rounded w-full ${formData[currentStep.name] === "Yes" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => handleButtonClick(currentStep.name, "No")}
                            className={`p-2 border rounded w-full ${formData[currentStep.name] === "No" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            No
                        </button>
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-4">
                {step > 0 && (
                    <button
                        onClick={handlePrev}
                        className="bg-gray-200 text-gray-700 p-2 rounded w-full mr-2"
                    >
                        Previous
                    </button>
                )}
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    {step < steps.length - 1 ? "Continue" : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default StepForm;
