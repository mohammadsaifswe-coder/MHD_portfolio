import React from 'react';
import bgcta from '../../assets/about/bgcta.webp';
import saturn from '../../assets/about/saturn.webp';

export default function CTAAbout() {
    return (
        <section className="relative w-full min-h-[70vh] py-24 px-4 bg-black overflow-hidden flex flex-col items-center justify-center">
            <div className="bg-linear-to-b from-black to-transparent z-99 h-20 w-full absolute top-0"></div>
            <div className="bg-linear-to-t from-black to-transparent z-99 h-20 w-full absolute bottom-0"></div>

            {/* 1. Background Image Layer with Top/Bottom Fade */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to bottom, 
              black 0%, 
              transparent 20%, 
              transparent 80%, 
              black 100%
            ), 
            url(${bgcta})
          `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />


            <div
                className="absolute top-10 sm:top-1/4 left-1/4 sm:left-0 z-0 pointer-events-none animate-float w-40 "
            ><img src={saturn} alt="saturn" />

            </div>



            {/* 3. High Intensity Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-50 md:h-50 bg-green-400/50 blur-[100px] rounded-full z-10" />

            {/* 4. Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <h4 className="text-white text-4xl md:text-6xl font-medium tracking-tight mb-2 opacity-90">
                    Have A
                </h4>

                <div className="relative inline-block">
                    <h2 className="text-white text-7xl md:text-9xl font-bold leading-none tracking-tighter  drop-shadow-2xl">
                        Project
                    </h2>
                </div>

                <h4 className="text-white text-4xl md:text-6xl font-medium tracking-tight mt-2 opacity-90">
                    In Mind?
                </h4>
            </div>




        </section>
    );
}