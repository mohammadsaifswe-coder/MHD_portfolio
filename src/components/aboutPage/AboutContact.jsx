import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import counterBG from '../../assets/home/counterBG.webp';

export default function AboutContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Web Development',
        budget: 'Select range',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Strict blocking: prevents user from even typing these characters
        const blockedChars = /[<>!#?*]/g;
        const sanitizedValue = value.replace(blockedChars, "");

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        // Optional: show a small warning in console or a toast if they try to use blocked chars
        if (value !== sanitizedValue) {
            toast.error("Special characters are blocked for security", { id: 'blocked-char' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Validation Logic
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            return toast.error("Please enter your name");
        }
        if (!emailPattern.test(formData.email)) {
            return toast.error("Please enter a valid email address");
        }
        if (formData.budget === 'Select range') {
            return toast.error("Please select a budget range");
        }

        // 2. Success Logic
        console.log("Final Form Submission:", formData);
        toast.success("Message sent! We'll get back to you soon.");
        
        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            interest: 'Web Development',
            budget: 'Select range',
            details: ''
        });
    };

    return (
        <section className=" relative bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden py-20">
            {/* TOAST PROVIDER - Styled for Dark UI */}
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
                            <label className="text-xs uppercase tracking-widest text-gray-400">Name <span className='text-green-500'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Email <span className='text-green-500'>*</span></label>
                            <input
                                type="text" // Using text to handle custom email validation via regex on submit
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        {/* Interest */}
                        <div className="flex flex-col gap-2 group relative">
                            <label className="text-xs uppercase tracking-widest text-gray-400">You are interested in</label>
                            <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] outline-none appearance-none cursor-pointer text-lg pr-8 text-white"
                            >
                                <option className="bg-black" value="Web Development">Web Development</option>
                                <option className="bg-black" value="Brand Identity">Brand Identity</option>
                                <option className="bg-black" value="UI/UX Design">UI/UX Design</option>
                            </select>
                            <span className="absolute right-0 bottom-4 pointer-events-none opacity-50 text-xs">▼</span>
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-2 group relative">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Budget in INR</label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] outline-none appearance-none cursor-pointer text-lg pr-8 text-white"
                            >
                                <option className="bg-black" value="Select range">Select range</option>
                                <option className="bg-black" value="₹5k - ₹10k">₹5k - ₹10k</option>
                                <option className="bg-black" value="₹10k - ₹25k">₹10k - ₹25k</option>
                                <option className="bg-black" value="₹25k+">₹25k+</option>
                            </select>
                            <span className="absolute right-0 bottom-4 pointer-events-none opacity-50 text-xs">▼</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2 group pt-4">
                        <label className="text-xs uppercase tracking-widest text-gray-400">Project details</label>
                        <textarea
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
                            type="submit"
                            className="border border-white px-8 py-3 rounded-lg text-xs font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 text-white cursor-pointer"
                        >
                            Submit Message
                        </button>

                        <div className="text-sm font-light text-white">
                            say hello — <a href="mailto:hello@kbkbusinesssolutions.com" className="text-[#07C42C] hover:underline transition-all">hello@kbkbusinesssolutions.com</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}