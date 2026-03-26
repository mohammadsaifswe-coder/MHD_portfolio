import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="relative bg-black text-white px-6 overflow-hidden pb-32">
      {/* Background Glow Effect */}
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1a3d2c_0%,transparent_50%)] opacity-80 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Top Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Let’s start <br /> creating together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <h3 className="text-xl font-medium mb-8">Contact US</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-60">
                  H-No:2-1-8/4/1, NR.Suite 2A, Saraswathi Colony, Uppal, Hyderabad, Telangana 500039
                </p>
              </div>

              <div className="bg-white h-px w-2/5"> </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">@kbkgroup.com</span>
              </div>
            
              <div className="bg-white h-px w-2/5"> </div>


              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1 border border-white rounded-full group-hover:border-green-500 transition-colors">
                  <Phone size={20} className="text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">(505) 555-0125</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              
              {/* Name */}
              <div className="relative">
                <input type="text" placeholder="Name *" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm" />
              </div>

              {/* Email */}
              <div className="relative">
                <input type="email" placeholder="Email *" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm" />
              </div>

              {/* Interest Dropdown */}
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors text-gray-600 text-sm appearance-none">
                  <option>You are interested in</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-gray-600">▼</div>
              </div>

              {/* Budget Dropdown */}
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors text-gray-600 text-sm appearance-none">
                  <option>Budget in USD</option>
                  <option>$1000 - $5000</option>
                  <option>$5000+</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-gray-600">▼</div>
              </div>

              {/* Project Details */}
              <div className="md:col-span-2">
                <textarea placeholder="Project details" rows="1" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-600 text-sm resize-none" />
              </div>

              {/* Submit & Footer Info */}
              <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8 mt-4">
                <button className="px-8 py-3 border border-white/30 rounded-lg text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
                  Submit Message
                </button>
                
                <p className="text-[12px] text-gray-500 tracking-wide">
                  say hello - <span className="text-green-500 hover:underline cursor-pointer">hello@kbkbusinesssolutions.com</span>
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}