import React, { useState } from 'react';
import counterBG from '../../assets/home/counterBG.webp';

export default function HomeContact() {


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
        <section className="contianer relative  bg-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <img
                    src={counterBG}
                    alt={counterBG}
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

    {/* NAME FIELD */}
    <div className="flex flex-col gap-2 group">
      <label htmlFor="name" className="text-xs uppercase tracking-widest">
        Name <span className='text-green-500'>*</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
      />
    </div>

    {/* EMAIL FIELD */}
    <div className="flex flex-col gap-2 group">
      <label htmlFor="email" className="text-xs uppercase tracking-widest text-white">
        Email <span className='text-green-500'>*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg text-white"
      />
    </div>

    {/* INTEREST SELECT */}
    <div className="flex flex-col gap-2 group relative">
      <label htmlFor="interest" className="text-xs uppercase tracking-widest text-white">
        You are interested in
      </label>
      <select
        id="interest"
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] outline-none appearance-none cursor-pointer text-lg pr-8 text-white"
      >
        <option className="bg-black" value="Web Development">Web Development</option>
        <option className="bg-black" value="Brand Identity">Brand Identity</option>
        <option className="bg-black" value="UI/UX Design">UI/UX Design</option>
      </select>
    </div>

    {/* BUDGET SELECT */}
    <div className="flex flex-col gap-2 group relative">
      <label htmlFor="budget" className="text-xs uppercase tracking-widest text-white">
        Budget in INR
      </label>
      <select
        id="budget"
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
    </div>
  </div>

  {/* TEXTAREA FIELD - Fixed Typo here */}
  <div className="flex flex-col gap-2 group pt-4">
    <label htmlFor="details" className="text-xs uppercase tracking-widest text-white">
      Project details
    </label>
    <textarea
      id="details"
      name="details"
      value={formData.details}
      onChange={handleChange}
      rows="1"
      className="bg-transparent border-b border-white/20 py-2 focus:border-[#07C42C] transition-colors outline-none text-lg resize-none overflow-hidden text-white"
      onInput={(e) => { 
        e.target.style.height = 'auto'; 
        e.target.style.height = e.target.scrollHeight + 'px'; 
      }}
    />
  </div>
  
  {/* Submit Button Section... */}
</form>

            </div>
        </section>
    );
}