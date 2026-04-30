import React, { useState } from 'react';
import { X, User, Mail, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';
import { useFormPopup } from '../../context/FormContext';

export default function PopUpForm() {
  const {isOpen, closeForm ,openForm} =useFormPopup();

  // if (!isOpen) return null;

  // const toggleForm = () => setIsOpen(!isOpen);

  // // Function to handle clicking the backdrop
  // const handleBackdropClick = (e) => {
  //   // This ensures that if the user clicks the dark area, the form closes
  //   setIsOpen(false);
  // };

  return (
    <div className="relative flex items-center justify-center bg-gray-950">
      {/* Trigger Button */}
      {/* <button 
        onClick={openForm}
        className="px-8 py-4 bg-emerald-500 text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
      >
        Contact Our Agency
      </button> */}

     
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-8888 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeForm}
      >
        
       
        <div className={`fixed left-0 right-0 top-0 flex justify-center p-4 z-9999 transition-all duration-700 ease-out transform ${
          isOpen ? 'translate-y-12 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          
          <div 
            className="bg-[#0a1a1a] border border-emerald-900/30 w-full max-w-4xl p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()} // <--- Prevents closing when clicking inside
          >
            
            {/* Close Icon Button */}
            <button 
              onClick={closeForm}
              className="absolute top-5 right-5 text-gray-500 hover:text-emerald-400 transition-colors bg-white/5 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Left Column: Branding */}
            <div className="md:w-1/2 pr-0 md:pr-10 mb-8 md:mb-0 flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold w-fit border border-emerald-500/20 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                <span>Premium Digital Agency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Let's Build <br /> <span className="text-emerald-500">Something Amazing</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Transform your vision into reality with cutting-edge technology and premium design.
              </p>
              <div className="flex items-center space-x-6 text-[10px] text-emerald-400/70 font-black uppercase tracking-tighter">
                <span>● 24/7 Support</span>
                <span>● Fast Delivery</span>
              </div>
            </div>

            {/* Right Column: Inputs */}
            <div className="md:w-1/2 space-y-4">
              <div className="group relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <input type="text" placeholder="Your Name" className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all" />
              </div>

              <div className="group relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <input type="email" placeholder="Email Address" className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all" />
              </div>

              <div className="group relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <select className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-gray-400 focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all appearance-none cursor-pointer">
                  <option>Select Project Type</option>
                  <option>Website Development</option>
                  <option>Mobile App</option>
                  <option>Branding & Design</option>
                  <option>E-commerce</option>
                </select>
              </div>

              <div className="group relative">
                <MessageSquare className="absolute left-4 top-5 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <textarea rows="3" placeholder="Tell us about your project..." className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black py-4 rounded-xl transition-all flex items-center justify-center space-x-3 group shadow-lg shadow-emerald-500/10">
                <span className="uppercase tracking-widest text-sm">Get Started</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}