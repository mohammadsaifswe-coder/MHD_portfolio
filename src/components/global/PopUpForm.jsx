import React, { useState } from 'react';
import { X, User, Mail, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';
import { useFormPopup } from '../../context/FormContext';
import emailjs from '@emailjs/browser';
import { handleUniversalSubmit } from '@/lib/formHandlers';

export default function PopUpForm() {
  const { isOpen, closeForm } = useFormPopup();
  const initialState = {
    name: '',
    email: '',
    service: 'Select Project Type',
    details: '',
    
  }
  // 1. Form State
  const [formData, setFormData] = useState(initialState);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Real-time Blocking Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const cleanName = value.replace(/[^a-zA-Z\s]/g, '');
      if (cleanName !== value) return;
    }
    if (name === 'email') {
      const cleanEmail = value.replace(/[\s<>()\\,;:"[\]]/g, '');
      if (cleanEmail !== value) return;
    }
    if (name === 'details') {
      const cleanDetails = value.replace(/[<>{}[\]]/g, '');
      if (cleanDetails !== value) return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Global Submit Function (Reusable for other forms)
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("asdfas", formData)
    handleUniversalSubmit({
      e,
      formData,
      setFormData,
      setIsSubmitting,
      initialState,
      formName: "Popup Form",
      onSuccess: closeForm
    });
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-950">
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-8888 transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeForm}
      >
        <div className={`fixed left-0 right-0 -top-10 sm:top-0 flex justify-center p-4 z-9999 transition-all duration-700 ease-out transform ${isOpen ? 'translate-y-12 opacity-100' : '-translate-y-full opacity-0'
          }`}>

          <form
            onSubmit={(e) => onSubmit(e, formData, "Main Popup")}
            className="bg-[#0a1a1a] border border-emerald-900/30 w-full max-w-4xl p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeForm}
              className="absolute top-5 right-5 text-gray-500 hover:text-emerald-400 transition-colors bg-white/5 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Left Column */}
            <div className="md:w-1/2 pr-0 md:pr-10 mb-8 md:mb-0 flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold w-fit border border-emerald-500/20 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                <span>Premium Digital Agency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Let's Build <br /> <span className="text-emerald-500">Something Amazing</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed hidden sm:block">
                Transform your vision into reality with cutting-edge technology.
              </p>
            </div>

            {/* Right Column: Inputs */}
            <div className="md:w-1/2 space-y-4">
              <div className="group relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all"
                />
              </div>

              <div className="group relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all"
                />
              </div>

              <div className="group relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-gray-400 focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all appearance-none cursor-pointer"
                >
                  <option disabled>Select Project Type</option>
                  <option>Website Development</option>
                  <option>UI/UX Design</option>
                  <option>Graphic Design</option>
                  <option>Digital Marketing</option>
                  <option>Media Service</option>
                </select>
              </div>

              <div className="group relative">
                <MessageSquare className="absolute left-4 top-5 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors" size={18} />
                <textarea
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#112222]/50 border border-emerald-900/40 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/60 focus:bg-[#112222] transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black py-4 rounded-xl transition-all flex items-center justify-center space-x-3 group shadow-lg shadow-emerald-500/10 disabled:opacity-50"
              >
                <span className="uppercase tracking-widest text-sm">
                  {isSubmitting ? 'Sending...' : 'Get Started'}
                </span>
                {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}