import React, { useState } from 'react';
import bgImage from '../../assets/home/process/bg-green.webp';
import Image1 from '../../assets/home/process/Image1.webp';
import Image2 from '../../assets/home/process/Image2.webp';
import Image3 from '../../assets/home/process/Image3.webp';

const processSteps = [
  {
    id: 'S1',
    title: 'Mission',
    subtitle: 'Supporting Business Success with Digital Excellence',
    description: 'KBK Business Solutions is committed to helping businesses succeed through creative marketing strategies, advanced technology, and effective digital solutions tailored to their needs.',
    bgImage: bgImage,
    icon: Image1
  },
  {
    id: 'S2',
    title: 'Vision',
    subtitle: 'Building Strong Digital Foundations for Businesses',
    description: 'Our vision is to empower brands with innovative digital tools and strategies that improve visibility, strengthen brand identity, and drive long-term growth.',
    bgImage: bgImage,
    icon: Image2
  },
  {
    id: 'S3',
    title: 'Goals',
    subtitle: 'Delivering High-Performance Digital Experiences',
    description: 'We design and develop websites and digital solutions that focus on speed, user experience, and scalability, ensuring your business stays competitive in the digital marketplace.',
    bgImage: bgImage,
    icon: Image3
  },
];

export default function Process() {

  const [activeStep, setActiveStep] = useState(null);
  return (
    <section className="bg-black text-white pt-20 pb-10 md:pb-30 px-6 md:px-10  flex flex-col justify-center overflow-hidden h-full ">

      <div className="  container overflow-visible!">

        <h3 className="text-4xl md:text-5xl font-medium mb-12 md:mb-16 ">The Process</h3>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">



        {processSteps.map((step, index) => {
        // Boolean check for this specific card
        const isActive = activeStep === step.id;

        return (
          <div
            key={step.id}
            // Toggle active state on click
            onClick={() => setActiveStep(isActive ? null : step.id)}
            // Optional: Mouse users still get hover feel
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
            
            className={`
              relative w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-[33%]
              min-h-50 sm:min-h-70 md:min-h-90 
              border p-4 sm:p-6 md:p-7 lg:p-8
              flex flex-col justify-between
              transition-all duration-500 ease-in-out cursor-pointer
              bg-[#0A0A0A] overflow-hidden
              
              /* Logic-based classes */
              ${isActive 
                ? 'z-50 border-white/60 -translate-y-2 md:-translate-y-4 scale-[1.02] md:scale-105' 
                : 'z-10 border-white/20'
              }
              
              md:transform-[translate(var(--tx),var(--ty))]
            `}
            style={{
              '--tx': `${index * -20}px`,
              '--ty': `${index * 20}px`,
            }}
          >
            {/* Background - Controlled by isActive */}
            <div
              className={`absolute inset-0 transition-all duration-700 bg-cover bg-center 
                ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              style={{ backgroundImage: `url(${step.bgImage})` }}
            />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
              
              {/* Top Section */}
              <div className="mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                  rounded-full border flex items-center justify-center transition-colors
                  overflow-hidden mb-4 sm:mb-5 md:mb-6 bg-black/20
                  ${isActive ? 'border-white/60' : 'border-white/30'}`}
                >
                  <img src={step.icon} alt="" className="w-full h-full object-contain" />
                </div>

                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-snug text-white">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug text-gray-300">
                  {step.subtitle}
                </p>
              </div>

              {/* Bottom Section */}
              <div className={`mt-auto pt-3 sm:pt-4 border-t flex items-end gap-2 sm:gap-3 transition-colors duration-500
                ${isActive ? 'border-white/50 text-white' : 'border-white/20 text-gray-400'}`}>

                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                  {step.id}
                </span>

                <p className="text-[8px] sm:text-[9px] md:text-[14px] leading-tight tracking-widest">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
        </div>
      </div>

    </section>
  );
}