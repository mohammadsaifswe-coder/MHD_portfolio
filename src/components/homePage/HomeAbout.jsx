import React from 'react';
import { Mail, MoveRight, X } from 'lucide-react';
import bharatSirProf from '../../assets/home/Bharth-Sir-prof.webp';
import Background from '../../assets/home/Background.webp';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function HomeAbout() {
    return (
        <section className="relative  w-full bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-14 py-16 lg:py-10 flex items-center">
            <span className="text-green-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block lg:hidden absolute left-[5vw] top-5 z-99 ">
                About KBK
            </span>


            {/* 12-column grid to control precise widths */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-center relative z-10 w-full">

                {/* Left Content Side - Takes 70% (8/12 columns) */}
                <div className="lg:col-span-8 space-y-6 order-2 lg:order-1 lg:text-left flex flex-col items-center lg:items-start z-30 relative text-start">
                    <span className="text-green-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase hidden lg:block">
                        About KBK
                    </span>

                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-tight mt-5">
                        KBK Business Solutions <br className="hidden sm:block" />
                        <span className="text-gray-300">Complete IT & Digital Growth Partner</span>
                    </h2>

                    <p className="text-green-500 font-semibold text-base sm:text-lg lg:text-xl">
                        Web Development | UI/UX Design | Digital Marketing | Graphic Designer
                    </p>

                    <p className="text-gray-400 leading-relaxed max-w-2xl text-sm sm:text-base lg:text-lg">
                        KBK Business Solutions helps businesses grow with smart IT services and
                        result-driven digital marketing. We design and develop websites, mobile
                        apps, user-friendly interfaces, and powerful online marketing strategies
                        to improve brand visibility and business performance.
                    </p>

                    <NavLink to="/about" className="flex items-center gap-2 bg-gray-200 hover:bg-white text-black px-8 py-3 rounded-full font-bold transition-all duration-300 group cursor-pointer" aria-label="Learn more about my development experience">
                        Learn More
                        <span className="sr-only">about my professional background</span>
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </NavLink>

                    <div className="pt-8 w-full">
                        <p className="text-gray-400 text-xs sm:text-sm mb-4 uppercase tracking-widest font-medium">Find me on</p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            {[
                                { Icon: FaInstagram, link: "https://www.instagram.com/bharathkakkireniofficial/", label: "Follow on Instagram" },
                                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/bharathkumarkakkireni", label: "Connect on LinkedIn" },
                                { Icon: X, link: "https://x.com/KakkireniB?s=20", label: "Follow on X (Twitter)" },
                                { Icon: Mail, link: "mailto:info@kbkbusinesssolutions.com", label: "Send an Email" }
                            ].map(({ Icon, link, label }, idx) => (
                                <a
                                    key={idx}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label} // <--- THIS FIXES THE LIGHTHOUSE ERROR
                                    className="p-3 bg-zinc-900/50 border border-white/10 rounded-full hover:bg-green-600/30 hover:border-green-600 transition-all duration-300 group"
                                >
                                    <Icon size={18} className="transition-colors group-hover:text-green-500" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Image Side - Takes 50% relative width but stays in 4/12 grid, overlapping left */}
                <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-end order-1 lg:order-2  lg:-ml-20 xl:-ml-32">

                    {/* Square Background Image Wrapper */}

                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none 
             after:content-[''] after:absolute after:inset-x-0 after:top-0 
             after:h-1/3 after:bg-linear-to-b after:from-black after:to-transparent after:z-0 
             
             before:content-[''] before:absolute before:inset-y-0 before:right-0 
             before:w-1/3 before:bg-linear-to-l before:from-black before:to-transparent before:z-0"
                        style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat',
                            aspectRatio: '1 / 1',
                            width: '140%',
                            maxWidth: '700px',
                            margin: 'auto'
                        }}
                    />
                    {/* Large Outline Text */}
                    <h1
                        className="absolute bottom-0 lg:bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 text-[9vw] sm:text-[9vw] md:text-[8vw]   lg:text-[4vw] font-black text-transparent select-none pointer-events-none z-99 whitespace-nowrap leading-none"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}
                    >
                        Dr. Bharath Kumar
                    </h1>

                    {/* Portrait Image - Pushed to bottom */}



                    <div className="relative z-20 w-[85%] sm:w-[70%] lg:w-[90%] mt-auto 
                  after:content-[''] after:absolute after:inset-x-0 after:bottom-0 
                  after:h-1/3 after:bg-linear-to-t after:from-black after:to-transparent after:z-30 ">
                        <img
                            src={bharatSirProf}
                            alt="Dr. Bharath Kumar portrait"
                            className="w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}