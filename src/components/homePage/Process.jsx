import React from 'react';
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
  return (
    <section className="bg-black text-white pt-20 pb-10 md:pb-30 px-6 md:px-10  flex flex-col justify-center overflow-hidden h-full ">

      <div className="  container overflow-visible!">

        <h3 className="text-4xl md:text-5xl font-medium mb-12 md:mb-16 ">The Process</h3>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">



          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`
                relative group w-full 
                max-w-full sm:max-w-sm md:max-w-md lg:max-w-[33%]
                
                min-h-50 sm:min-h-70 md:min-h-90 
                
                border border-white/20 
                p-4 sm:p-6 md:p-7 lg:p-8
                
                flex flex-col justify-between
                transition-all duration-500 ease-in-out cursor-pointer
                bg-[#0A0A0A] overflow-hidden
                
                z-10 hover:z-50
                md:transform-[translate(var(--tx),var(--ty))]
                hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105
            `}
              style={{
                '--tx': `${index * -20}px`,
                '--ty': `${index * 20}px`,
              }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-cover bg-center scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${step.bgImage})` }}
              />


              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">

                {/* Top */}
                <div className="mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
          rounded-full border border-white/30 
          flex items-center justify-center 
          overflow-hidden mb-4 sm:mb-5 md:mb-6 bg-black/20"
                  >
                    <img src={step.icon} alt="" className="w-full h-full object-contain" />
                  </div>

                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">
                    {step.subtitle}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-3 sm:pt-4 border-t border-white/20 flex items-end gap-2 sm:gap-3">

                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                    {step.id}
                  </span>

                  <p className="text-[8px] sm:text-[9px] md:text-[14px] leading-tight   tracking-wideest">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}