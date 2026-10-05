import React, { useRef, useState, useEffect } from 'react';

const experts = [
    // {
    //     id: 1,
    //     name: 'Dr. Bharath Kumar Kakkireni',
    //     role: 'Chairman & CEO',
    //     img: 'https://kbk.group/img/sir-bio.png'
    // },
    {
        id: 2,
        name: 'Mrs. Jaya Vyshnavi',
        role: '   HR Director',
        company: 'KBK Group of Companies',
        img: 'https://kbk.group/assets/images/our-team/Jaya%20vishnavi.jpg'
    },
    {
        id: 3,
        name: 'Mr. Srikanth Reddy',
        role: 'General Manager',
        company: 'KBK Group of Companies',
        img: 'https://kbk.group/assets/images/our-team/Srikanth%20sir.jpg'
    },
    {
        id: 4,
        name: 'Mr. Shiva Shankar',
        role: 'Director',
        company: 'KBK Broadcasting Pvt. Ltd',
        img: 'https://kbk.group/assets/images/our-team/Shanker%20sir.jpg'
    },
    {
        id: 5,
        name: 'Mr. Arun Kumar',
        role: 'HR & Immigration Manager',
        company: 'KBK Group of Companies',
        img: 'https://kbk.group/assets/images/our-team/Arun%20sir.jpg'
    },
    {
        id: 6,
        name: 'Saif Mohammad',
        role: 'Professional Services Manager',
        company: 'KBK Business Solutions Pvt Ltd',
        img: 'https://res.cloudinary.com/dt9lwlxfb/image/upload/v1791195387/Mohammed_Saif_nv8n5i.jpg'
    },
    {
        id: 7,
        name: 'G.Nikeelu',
        role: 'Marketing Chief',
        company: 'KBK Group',
        img: 'https://kbk.group/assets/images/our-team/Nikeelu%20Gunda.jpg'
    },
];

export default function OurExperts() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isPaused) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                const scrollAmount = 344;

                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="bg-black py-12 overflow-hidden">
            <div className="container">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-14">
                    <div className="max-w-xl">
                        <span className="text-green-500 uppercase tracking-widest text-xs font-bold block mb-4">
                            Our Experts
                        </span>
                        <h2 className="text-2xl md:text-3xl tracking-wider bg-linear-to-r from-white to-[#555555] bg-clip-text text-transparent w-full  mt-4">
                            Meet the creative minds behind
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs lg:text-right">
                        Our pricing ensures every business gets quality digital without overspending or compromise.
                    </p>
                </div>

                {/* Layout Container */}
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Static Card */}
                    <div className="w-full md:w-80 shrink-0 h-80 rounded-[40px] bg-[#111111] border border-white/5 p-10 flex flex-col justify-center relative overflow-hidden group">

                        {/* --- RIPPLE SHAPE (Top Right) --- */}
                        <div className="absolute -top-56 -right-56 w-96 h-96 pointer-events-none z-0">
                            {/* Layer 7 (Largest/Farthest) */}
                            <div className="absolute inset-0 rounded-full border-25 border-white/2 scale-[2.0] transition-transform duration-700" />

                            {/* Layer 6 */}
                            <div className="absolute inset-0 rounded-full border-28 border-white/4 scale-[1.75]" />

                            {/* Layer 5 */}
                            <div className="absolute inset-0 rounded-full border-32 border-white/6 scale-[1.5]" />

                            {/* Layer 4 */}
                            <div className="absolute inset-0 rounded-full border-39 border-white/8 scale-[1.25]" />

                            {/* Layer 3 */}
                            <div className="absolute inset-0 rounded-full border-48 border-white/12 scale-[1.0]" />

                            {/* Layer 2 */}
                            <div className="absolute inset-0 rounded-full border-64 border-white/16 scale-[0.75]" />

                            {/* Layer 1 (Smallest/Brightest) */}
                            <div className="absolute inset-0 rounded-full border-70 border-white/20 scale-[0.5]" />

                            {/* Ambient Core Glow */}
                            <div className="absolute inset-0 rounded-full bg-white/3 blur-[80px]" />
                        </div>

                        {/* Texture Layer */}
                        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3Y")`
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                            <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold block mb-4">
                                Join Our Team
                            </span>
                            <h3 className="text-white text-2xl font-semibold mb-8 leading-snug">
                                Start a Career With excellent benefits
                            </h3>

                            <button className="flex items-center gap-3 bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs transition-transform active:scale-95">
                                All Team Members
                                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-0.5 scale-75">
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Bottom Glow */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full z-0" />
                    </div>

                    {/* Carousel with Hover Detection */}
                    <div
                        ref={scrollRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 select-none"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="w-full sm:w-72 md:w-90 shrink-0 snap-start group"
                            >
                                <div className="relative h-80 w-full rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900">
                                    <img
                                        src={expert.img}
                                        alt={expert.name}
                                        className="w-full h-full object-cover object-top-right transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-x-4 bottom-4 h-18 rounded-[30px] bg-black/60 backdrop-blur-xl border border-white/10 flex flex-col justify-center items-center text-center px-4 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <h4 className="text-white font-semibold text-md leading-tight">
                                            {expert.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-medium">
                                            {expert.role}
                                        </p>
                                        <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-medium">
                                            {expert?.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}