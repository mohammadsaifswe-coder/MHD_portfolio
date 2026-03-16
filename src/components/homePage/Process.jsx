import React from 'react';
import bgImage from '../../assets/home/bg-green.webp';

const processSteps = [
  {
    id: 'S1',
    title: 'Mission',
    subtitle: 'Empowering Businesses Through Technology',
    description: 'I begin by clarifying your goals, audience, and the insights set a clear direction and define what success means for you.',
    bgImage: bgImage,
  },
  {
    id: 'S2',
    title: 'Vision',
    subtitle: 'Building a Future-Ready Digital World',
    description: 'I translate strategy into visual identity and structure. Every element serves a purpose: accessible, and ready for growth.',
    bgImage: bgImage,
  },
  {
    id: 'S3',
    title: 'Goals',
    subtitle: 'Driving Measurable Business Success',
    description: 'I build and launch your site in Framer or Webflow, then hand over an easy editor. You stay in control, with fast performance and room to scale.',
    bgImage: bgImage,
  },
];

export default function Process() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 min-h-screen flex flex-col justify-center overflow-hidden">
      <h3 className="text-4xl md:text-5xl font-medium mb-12 md:mb-16 md:ml-10">The Process</h3>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        
        {/* Dotted Line - Moved to Z-[-1] to ensure it stays behind cards */}
        <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-px border-t border-dashed border-blue-400 opacity-40 z-0 pointer-events-none" />

        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`
              relative group w-full md:max-w-95 aspect-square 
              border border-white/20 p-8 flex flex-col justify-between
              transition-all duration-500 ease-in-out cursor-pointer
              bg-black overflow-hidden
              /* Mobile: Standard stack | Desktop: Stepped stack */
              hover:scale-105 hover:-translate-y-4 hover:shadow-2xl
              /* Crucial: higher z-index on hover to bring card to top */
              z-10 hover:z-50
            `}
            style={{ 
              // Inline style for desktop offset only
              // We use a media query check via window or just keep it simple with a CSS variable if needed, 
              // but here is the standard approach using standard tailwind for responsiveness:
              transform: typeof window !== 'undefined' && window.innerWidth > 768 
                ? `translate(${index * -40}px, ${index * 40}px)` 
                : 'none'
            }}
          >
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center scale-110 group-hover:scale-100"
              style={{ backgroundImage: `url(${step.bgImage})` }}
            />
            
            {/* Gradient Overlay for better text readability on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-0 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center overflow-hidden mb-8 bg-black/20">
                   <div className="w-12 h-12 bg-linear-to-tr from-gray-500 to-transparent rounded-full animate-pulse" />
                </div>
                
                <h4 className="text-xl font-light tracking-widest uppercase mb-4">{step.title}</h4>
                <p className="text-lg font-medium leading-tight mb-6">{step.subtitle}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/20 flex items-end gap-4">
                <span className="text-5xl font-bold leading-none">{step.id}</span>
                <p className="text-[10px] leading-relaxed opacity-70 uppercase tracking-tighter">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}