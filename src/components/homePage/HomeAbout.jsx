import React from 'react';
import { MoveRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import bharatSirProf from '../../assets/home/Bharth-Sir-prof.webp';
import Background from '../../assets/home/Background.webp';

export default function HomeAbout() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-20 py-16 lg:py-0 flex items-center">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full">
        
        {/* Left Content Side */}
        <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-green-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">
            About KBK
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            KBK Business Solutions – <br className="hidden sm:block" />
            <span className="text-gray-300">Complete IT & Digital Growth Partner</span>
          </h2>

          <p className="text-green-500 font-semibold text-base sm:text-lg">
            Web Development | UI/UX Design | Digital Marketing | UI/UX Designer
          </p>

          <p className="text-gray-400 leading-relaxed max-w-xl text-sm sm:text-base">
            KBK Business Solutions helps businesses grow with smart IT services and
            result-driven digital marketing. We design and develop websites, mobile
            apps, user-friendly interfaces, and powerful online marketing strategies
            to improve brand visibility and business performance.
          </p>

          <button className="flex items-center gap-2 bg-gray-200 hover:bg-white text-black px-8 py-3 rounded-full font-bold transition-all duration-300 group">
            Learn More <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="pt-8 w-full">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 uppercase tracking-widest font-medium">Find me on</p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="p-3 bg-zinc-900/50 border border-white/10 rounded-full hover:bg-green-600 hover:border-green-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Side (Background contained here) */}
        <div className="relative flex  justify-center items-end order-1 lg:order-2 py-10 lg:py-0">
          
          {/* Square Background Image Wrapper */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              aspectRatio: '1 / 1', 
              width: '100%',
              maxWidth: '600px',
              margin: 'auto'
            }}
          />

          {/* Large Outline Text */}
          <h1 
            className="absolute bottom-6 sm:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-20 text-[8vw] sm:text-[9vw] md:text-[7vw]  lg:text-[5vw] font-black text-transparent select-none pointer-events-none z-99 whitespace-nowrap leading-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
          >
            Dr. Bharath Kumar
          </h1>

          {/* Portrait Image */}
          <img
            src={bharatSirProf}
            alt="Dr. Bharath Kumar portrait"
            className="relative z-20 w-[75%] sm:w-[65%] lg:w-full max-w-112.5 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </section>
  );
}