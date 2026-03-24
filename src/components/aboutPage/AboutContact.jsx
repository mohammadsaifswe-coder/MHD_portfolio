import React, { useState } from 'react';
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

        const blockedChars = /[<>!#?*]/g;

        const sanitizedValue = value.replace(blockedChars, "");

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        if (value !== sanitizedValue) {
            console.warn("Special characters < and > are not allowed for security.");
        }

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Final Form Submission:", formData);
    };


    return (
        <section className="contianer relative  bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">



            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">

                <form className="w-full space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                        <div className="flex flex-col gap-2 group">
                            <label className="text-xs uppercase tracking-widest">Name <span className='text-green-500'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        <div className="flex flex-col gap-2 group">
                            <label className="text-xs uppercase tracking-widest text-white">Email <span className='text-green-500'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
                            />
                        </div>

                        <div className="flex flex-col gap-2 group relative">
                            <label className="text-xs uppercase tracking-widest text-white">You are interested in</label>
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

                        <div className="flex flex-col gap-2 group relative">
                            <label className="text-xs uppercase tracking-widest text-white">Budget in INR</label>
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

                    <div className="flex flex-col gap-2 group pt-4">
                        <label className="text-xs uppercase tracking-widest text-white">Project details</label>
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