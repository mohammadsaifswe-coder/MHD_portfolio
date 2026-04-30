import React, { useState, useRef, useEffect } from 'react';
import AEC from '../../assets/about/AEC.webp'
import BBL from '../../assets/about/BBL.webp'
import HHK from '../../assets/about/HHK.webp'
import RSG from '../../assets/about/RSG.webp'
import BK from '../../assets/about/BK.webp'
import UCG from '../../assets/about/UCG.webp'
import counterBG from '../../assets/home/counterBG.webp'
import { useFormPopup } from '@/context/FormContext';

const projects = [
    { id: 1, img: BBL, title: "Beauty Bay Lounge", link: "https://beautybaylounge.com/" },
    { id: 2, img: BK, title: "Bhavys Kitchen", link: "https://bhavyskitchen.com/" },
    { id: 3, img: AEC, title: "Austin Events Center", link: "https://austineventcenters.com/" },
    { id: 4, img: HHK, title: "Hari Hara Kshethram", link: "https://hariharakshethram.com/" },
    { id: 5, img: RSG, title: "Rainiersoft Global Consultancy", link: "https://rainiersoftglobal.com/" },
    { id: 6, img: UCG, title: " Ur’s Choice Gifts", link: "https://urschoicegifts.com/" },
    // { id: 7, img: RW5, title: "LAKHOTIA COLLEGE OF DESIGN", link: "https://www.lakhotiaedu.com/" },
    // { id: 8, img: RW5, title: "Dr. Mohammed Asif", link: "https://drasifcardio.com/" },
];

export default function RecentWorks() {
    const { openForm } = useFormPopup();

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 4;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 1024) return 3;
        return 4;
    };

    const totalDots = projects.length - (getVisibleCount() - 1);

    const scrollTo = (index) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = (container.scrollWidth / projects.length) * index;
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    // --- Auto Scroll Logic (4 Seconds) ---
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex >= totalDots - 1 ? 0 : prevIndex + 1;
                scrollTo(nextIndex);
                return nextIndex;
            });
        }, 4000); // 4 seconds delay

        return () => clearInterval(interval);
    }, [totalDots]);

    return (
        <section className="bg-black pb-10">
            <div className="container mx-auto ">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-green-500 uppercase tracking-widest text-[10px] font-bold">Recent Works</span>
                    <h2 className="text-2xl md:text-3xl tracking-wider bg-linear-to-r from-white to-[#555555] bg-clip-text text-transparent w-full text-center mt-4">
                        Projects That Turned Ideas Into Powerful Results
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.33%-14px)] lg:min-w-[calc(25%-15px)] snap-start"
                            >
                                {/* Use aspect-[4/5] (with brackets) to lock height and prevent lagging */}
                                <div className="relative aspect-4/5 w-full overflow-hidden rounded-[40px] border border-white/10 group/card bg-zinc-900 shadow-2xl">

                                    {/* 1. Dark Overlay: Always present but darkens on hover to help text legibility */}
                                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors duration-500 z-10" />

                                    {/* 2. Gradient Overlay: Makes the bottom glass box look integrated */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />

                                    {/* Image */}
                                    <img
                                        src={item.img}
                                        alt={item.title || "Project Image"}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-top transition-transform duration-1000 will-change-transform group-hover/card:scale-110"
                                    />

                                    <a href={item?.link} target='_blank' className="absolute opacity-0 group-hover/card:opacity-100 top-3 right-1/3 bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-full font-extrabold text-[10px] uppercase shrink-0 transition-transform active:scale-95 z-99 cursor-pointer ">
                                        Live Demo ↗
                                    </a>

                                    {/* 3. Glass Overlay: Contains Title and Button */}
                                    <div
                                        className="
                                        absolute inset-x-4 bottom-4 h-14 rounded-full z-20
                                        bg-white/10 backdrop-blur-xl border border-white/20
                                        flex items-center justify-between px-6
                                        
                                        opacity-0 translate-y-4
                                        transition-all duration-500 ease-out
                                        will-change-transform
                                        
                                        group-hover/card:opacity-100
                                        group-hover/card:translate-y-0
                                        "
                                    >
                                        <div className="text-white font-bold text-sm truncate pr-2">
                                            {item.title || "Project Name"}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalDots }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollTo(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? "w-8 bg-green-500" : "w-2 bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>
                </div>



                {/* Bottom CTA with Glow */}
                <div className="relative h-80 w-full flex items-center justify-center overflow-hidden">
                    {/* 1. Background Image with Masking */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-40"
                        style={{
                            backgroundImage: `url(${counterBG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                        }}
                    />

                    {/* 2. Background Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

                    {/* 3. CTA Content Container */}
                    <div className="relative z-10 flex flex-col items-center gap-6 px-4">
                        <div className="flex flex-wrap items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-full shadow-2xl">
                            {/* Star Icon */}
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                <span className="text-lg">★</span>
                            </div>

                            {/* Text and Link */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                <p className="text-gray-300 text-sm md:text-base font-medium">
                                    Let's make something great work together.
                                </p>
                                <div className="hidden sm:block w-px h-4 bg-white/20" />
                                <button
                                    onClick={openForm}
                                    aria-label="Get Free Quote"
                                    className="text-green-500 font-bold hover:text-green-400 transition-colors tracking-tight text-sm md:text-base cursor-pointer"
                                >
                                    Get Free Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}