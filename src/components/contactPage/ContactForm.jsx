import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { handleUniversalSubmit } from '@/lib/formHandlers'; 

export default function ContactForm() {
  const initialState = {
    name: '',
    email: '',
    service: 'Web Development',
    budget: 'Select range',
    details: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Real-time blocking for security/cleanliness
    let sanitizedValue = value;
    if (name === 'name') {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'email') {
      sanitizedValue = value.replace(/[\s<>()\\,;:"[\]]/g, '');
    } else if (name === 'details') {
      sanitizedValue = value.replace(/[<>{}[\]]/g, '');
    }

    if (sanitizedValue !== value) {
        toast.error("Invalid character removed", { id: 'char-error' });
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUniversalSubmit({
      e,
      formData,
      setFormData,
      setIsSubmitting,
      initialState,
      formName: "Main Contact Page",
      onSuccess: () => {
        console.log("Main Contact Form Data:", formData);
      }
    });
  };

  return (
    <section className="relative bg-black text-white px-6 overflow-hidden pb-32">
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1a3d2c_0%,transparent_50%)] opacity-80 pointer-events-none" />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '12px'
          },
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 pt-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Let’s start <br /> creating together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <h3 className="text-xl font-medium mb-8">Contact Us</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <a href="mailto:sales@kbkbusinesssolutions.com">
                  <span className="text-sm text-gray-400">sales@kbkbusinesssolutions.com</span>
                </a>
              </div>

              <div className="bg-white/10 h-px w-2/5"></div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <Phone size={20} className="text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">+91 81215 96699</span>
              </div>

              <div className="bg-white/10 h-px w-2/5"></div>

              <div className="flex items-start gap-4 group">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-60">
                  H-No:2-1-8/4/1/NR, Suite 2A, Saraswathi Colony, Uppal, Hyderabad, Telangana, India - 500039.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="relative">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm text-white"
                />
              </div>

              <div className="relative">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm text-white"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors text-gray-400 text-sm pl-2 appearance-none cursor-pointer"
                >
                  <option className="bg-black" value="Web Development">Website Development</option>
                  <option className="bg-black" value="UI/UX Design">UI/UX Design</option>
                  <option className="bg-black" value="Brand Identity">Graphic design</option>
                  <option className="bg-black" value="Digital Marketing">Digital Marketing</option>
                  <option className="bg-black" value="Media Service">Media Service</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-gray-600">▼</div>
              </div>

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors text-gray-400 text-sm appearance-none cursor-pointer pl-2"
                >
                  <option className="bg-black" value="Select range">Select range</option>
                  <option className="bg-black" value="₹5k - ₹10k">₹5k - ₹10k</option>
                  <option className="bg-black" value="₹10k - ₹25k">₹10k - ₹25k</option>
                  <option className="bg-black" value="₹25k+">₹25k+</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-gray-600">▼</div>
              </div>

              <div className="md:col-span-2">
                <textarea
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Project details *"
                  rows="1"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm resize-none text-white"
                  onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-white/30 rounded-lg text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>

                <p className="text-[12px] text-gray-500 tracking-wide">
                  say hello -
                  <a href="mailto:sales@kbkbusinesssolutions.com">
                    <span className="text-green-500 hover:underline cursor-pointer ml-1">sales@kbkbusinesssolutions.com</span>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}