import React, { useState } from 'react';
import counterBG from '../../assets/home/counterBG.webp';
import { handleUniversalSubmit } from '@/lib/formHandlers';
import toast from 'react-hot-toast';

export default function HomeContact() {
    const initialState = {
        name: '',
        email: '',
        service: 'Web Development',
        budget: 'Select range',
        details: ''
    };

    const [formData, setFormData] = useState(initialState);
    // 1. Added Missing State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

const [isServiceOpen, setIsServiceOpen] = useState(false);


    const budgetRanges = {
        "Web Development": [
            "₹40k - ₹60k",
            "₹60k - ₹80k",
            "₹80k - ₹1lakh",
            "₹1lakh+"
        ],

        "UI/UX Design": [
            "₹10k - ₹20k",
            "₹20k - ₹40k",
            "₹40k - ₹60k",
            "₹60k+"
        ],

        "App Development": [
            "₹3lakh - ₹6lakh",
            "₹6lakh - ₹8lakh",
            "₹8lakh+"
        ],

        "Digital Marketing": [
            "₹30k - ₹40k / month",
            "₹40k - ₹50k / month",
            "₹50k+ / month"
        ],

        "Media Service": [
            "₹25k - ₹35k",
            "₹35k - ₹45k",
            "₹45k+"
        ]
    };

    const currentBudgetRanges = budgetRanges[formData.service] || [];


    const handleChange = (e) => {
        const { name, value } = e.target;
        const blockedChars = /[<>!#?*]/g;
        const sanitizedValue = value.replace(blockedChars, "");

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        if (value !== sanitizedValue) {
            toast.error("Special characters are not allowed for security.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 2. Pass the state and handlers to the universal function
        handleUniversalSubmit({
            e,
            formData,
            setFormData,
            setIsSubmitting, // Now defined
            initialState,
            formName: "Home Page Contact Form",
            onSuccess: () => {
                console.log("Form successfully submitted from Home Page");
            }
        });
    };

    return (
        <section className="contianer relative bg-black text-white flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <img
                    src={counterBG}
                    alt="Background Decor"
                    className="w-full max-w-4xl h-auto object-cover rotate-180 opacity-80 scale-100"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        Let’s start <br /> creating together
                    </h2>
                </div>

                <form className="w-full space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="name-input" className="text-xs uppercase tracking-widest">Name <span className='text-green-500'>*</span></label>
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

                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="email-input" className="text-xs uppercase tracking-widest text-white">Email <span className='text-green-500'>*</span></label>
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

                        <div className="flex flex-col gap-2 group relative">
                            <label htmlFor="service" className="text-xs uppercase tracking-widest text-white">You are interested in</label>

                            {/* Custom Dropdown Button */}
                            <button
                                type="button"
                                id="service"
                                onClick={() => setIsServiceOpen((prev) => !prev)}
                                className="w-full bg-transparent border-b border-white/20 py-2 pr-4 text-left focus:border-[#07C42C] outline-none cursor-pointer text-lg text-white flex items-center justify-between"
                            >
                                <span className={formData.service ? "text-white" : "text-gray-400"}>
                                    {formData.service || "Select service"}
                                </span>
                                <span className={`text-xs opacity-50 transition-transform duration-200 ${isServiceOpen ? "rotate-180" : ""}`}>
                                    ▼
                                </span>
                            </button>

                            {/* Dropdown Options */}
                            {isServiceOpen && (
                                <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-black border border-white/20 rounded-md overflow-hidden shadow-xl cursor-pointer">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                service: "",
                                                budget: ''
                                            }));
                                            setIsServiceOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        Select service
                                    </button>

                                    {[
                                        "Website Development",
                                        "UI/UX Design",
                                        "App Development",
                                        "Digital Marketing",
                                        "Media Service"
                                    ].map((serviceItem) => (
                                        <button
                                            type="button"
                                            key={serviceItem}
                                            onClick={() => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    service: serviceItem,
                                                    budget: ''
                                                }));
                                                setIsServiceOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${formData.service === serviceItem
                                                    ? "bg-[#07C42C]/10 text-[#07C42C]"
                                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {serviceItem}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

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
                                <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-black border border-white/20 rounded-md overflow-hidden shadow-xl cursor-pointer">

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
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${formData.budget === range
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

                    <div className="flex flex-col gap-2 group pt-4">
                        <label htmlFor="details-input" className="text-xs uppercase tracking-widest text-white">Project details</label>
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
                            disabled={isSubmitting} // 3. Use isSubmitting to disable button
                            type="submit"
                            aria-label="Submit your message"
                            className="border border-white px-8 py-3 rounded-lg text-xs font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Message'}
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