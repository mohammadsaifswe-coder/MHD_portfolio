import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { handleUniversalSubmit } from '@/lib/formHandlers';

export default function AboutContact() {
    const initialState = {
        name: '',
        email: '',
        service: 'Web Development',
        budget: 'Select range',
        details: ''
    };

    const [formData, setFormData] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;

        const blockedChars = /[<>!#?*]/g;
        const sanitizedValue = value.replace(blockedChars, "");

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        if (value !== sanitizedValue) {
            toast.error("Special characters are blocked for security", { id: 'blocked-char' });
        }
    };




    const budgetRanges = {
        "Web Development": [
            "₹15k - ₹30k",
            "₹30k - ₹60k",
            "₹60k+"
        ],

        "UI/UX Design": [
            "₹10k - ₹20k",
            "₹20k - ₹40k",
            "₹40k+"
        ],

        "App Development": [
            "₹5k - ₹10k",
            "₹10k - ₹25k",
            "₹25k+"
        ],

        "Digital Marketing": [
            "₹10k - ₹25k / month",
            "₹25k - ₹50k / month",
            "₹50k+ / month"
        ],

        "Media Service": [
            "₹15k - ₹30k",
            "₹30k - ₹60k",
            "₹60k+"
        ]
    };

    const currentBudgetRanges = budgetRanges[formData.service] || [];

    const handleSubmit = (e) => {
        e.preventDefault();

        handleUniversalSubmit({
            e,
            formData,
            setFormData,
            setIsSubmitting,
            initialState,
            formName: "About Page Contact Form",
            onSuccess: () => {
                // console.log("Form submitted from About Page");
            }
        });
    };

    return (
        <section className="relative bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden py-16">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#111',
                        color: '#fff',
                        border: '1px solid #333',
                        fontSize: '14px'
                    },
                    success: { iconTheme: { primary: '#07C42C', secondary: '#fff' } },
                    error: { iconTheme: { primary: '#ff4b4b', secondary: '#fff' } }
                }}
            />

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                <form className="w-full space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                        {/* Name */}
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="name-input" className="text-xs uppercase tracking-widest text-gray-400">
                                Name <span className='text-green-500'>*</span>
                            </label>
                            <input
                                required
                                id="name-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="email-input" className="text-xs uppercase tracking-widest text-gray-400">
                                Email <span className='text-green-500'>*</span>
                            </label>
                            <input
                                required
                                id="email-input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        {/* Service (Formerly Interest) */}
                        <div className="flex flex-col gap-2 group relative">
                            <label htmlFor="service-input" className="text-xs uppercase tracking-widest text-gray-400">You are interested in</label>
                            <select
                                id="service-input"
                                name="service"
                                value={formData.service}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    setFormData(prev => ({
                                        ...prev,
                                        service: value,
                                        budget: ''
                                    }));
                                }}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] outline-none appearance-none cursor-pointer text-lg pr-8 text-white"
                            >
                                <option className="bg-black" value="Web Development">Website Development</option>
                                <option className="bg-black" value="UI/UX Design">UI/UX Design</option>
                                <option className="bg-black" value="App Development">App Development</option>
                                <option className="bg-black" value="Digital Marketing">Digital Marketing</option>
                                <option className="bg-black" value="Media Service">Media Service</option>
                            </select>
                            <span className="absolute right-0 bottom-4 pointer-events-none opacity-50 text-xs">▼</span>
                        </div>

                        {/* Budget */}
                        {/* <div className="flex flex-col gap-2 group relative">
                            <label htmlFor="budget-input" className="text-xs uppercase tracking-widest text-gray-400">Budget in INR</label>
                            <select
                                id="budget-input"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] outline-none appearance-none cursor-pointer text-lg text-white"
                            >
                                <option className="bg-black pl-2" value="Select range">Select range</option>
                                {currentBudgetRanges.map((range) => (
                                    <option
                                        key={range}
                                        className="bg-black"
                                        value={range}
                                    >
                                        {range}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute right-0 bottom-4 pointer-events-none opacity-50 text-xs">▼</span>
                        </div> */}

                        <div className="flex flex-col gap-2 group relative">
                            <label
                                htmlFor="budget-input"
                                className="text-xs uppercase tracking-widest text-gray-400"
                            >
                                Budget in INR
                            </label>

                            {/* Dropdown Button */}
                            <button
                                type="button"
                                id="budget-input"
                                onClick={() => setIsBudgetOpen((prev) => !prev)}
                                className="w-full bg-transparent border-b border-white/20 py-2 text-left focus:border-[#07C42C] outline-none cursor-pointer text-lg text-white flex items-center justify-between"
                            >
                                <span
                                    className={
                                        formData.budget
                                            ? "text-white"
                                            : "text-gray-400"
                                    }
                                >
                                    {formData.budget || "Select budget range"}
                                </span>

                                <span
                                    className={`text-xs opacity-50 transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    ▼
                                </span>
                            </button>

                            {/* Dropdown Options */}
                            {isBudgetOpen && (
                                <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-black border border-white/20 rounded-md overflow-hidden shadow-xl">

                                    {/* Default option */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                budget: ""
                                            }));
                                            setIsBudgetOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        Select budget range
                                    </button>

                                    {/* Dynamic options */}
                                    {currentBudgetRanges.map((range) => (
                                        <button
                                            type="button"
                                            key={range}
                                            onClick={() => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    budget: range
                                                }));
                                                setIsBudgetOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm cursor-pointer transition-colors ${formData.budget === range
                                                    ? "bg-[#07C42C]/10 text-[#07C42C]"
                                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2 group pt-4">
                        <label htmlFor="details-input" className="text-xs uppercase tracking-widest text-gray-400">Project details</label>
                        <textarea
                            required
                            id="details-input"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            rows="1"
                            className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg resize-none overflow-hidden text-white"
                            onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10">
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            aria-label="Submit your message"
                            className="border border-white px-8 py-3 rounded-lg text-xs font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Submit Message"}
                        </button>

                        <div className="text-sm font-light text-white">
                            say hello — <a href="mailto:sales@kbkbusinesssolutions.com" className="text-[#07C42C] hover:underline transition-all">sales@kbkbusinesssolutions.com</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}