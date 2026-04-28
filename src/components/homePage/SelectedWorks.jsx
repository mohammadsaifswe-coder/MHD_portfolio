import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SelectedWorksBg from '../../assets/home/selected-works.webp'
// import development from '../../assets/home/development.webp'
// import digitaMarketing from '../../assets/home/digitaMarketing.webp'
// import media from '../../assets/home/media.webp'
// import uiux from '../../assets/home/uiux.webp'
// import graphicDesign from '../../assets/home/graphicDesign.webp'

const WORKS = [

    {
        id: 1,
        title: 'Development',
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/Image_3_siutpb.png",
        tags: ['React/Next.js', 'E-Commerce', 'Cloud Architecture', 'Custom API']
    },

    {
        id: 2,
        title: 'UI/UX Design',
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/uiux_mj5ce6.webp",
        tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        id: 3,
        title: 'Graphic Design',
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/graphic_ztm0gk.webp",
        tags: ['Brand Identity', 'Typography', 'Print Media', 'Illustration', 'Typography']
    },
    {
        id: 4,
        title: 'Digital Marketing',
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/digitaMarketing_tchrbn.webp",
        tags: ['SEO & SEM', 'Social Strategy', 'Content Ads', 'Analytics', 'SEO & SEM']
    },

    {
        id: 5,
        title: 'Media Service',
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/Group_54_1_ik2b7h.png",
        tags: ['Video Production', 'Photography', 'Motion Graphics', 'Post-Production']
    },


]

const slideVariants = {
    enter: (direction) => ({
        y: direction > 0 ? 500 : -500,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        y: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        y: direction < 0 ? 500 : -500,
        opacity: 0,
        scale: 0.95,
    }),
};

export default function SelectedWorks() {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        const nextIndex = page + newDirection;
        if (nextIndex >= 0 && nextIndex < WORKS.length) {
            setPage([nextIndex, newDirection]);
        }
    };

    return (
        <section className="min-h-150 md:min-h-175 w-full bg-linear-to-b from-black via-zinc-800 to-black/80 relative overflow-hidden flex items-center pt-10 sm:pt-10 pb-30 sm:pb-20">

            {/* background */}
            <div
                className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[30vh] lg:h-[45vh] bg-cover bg-top z-20 pointer-events-none"
                style={{ backgroundImage: `url(${SelectedWorksBg})` }}
            />


            {/* BOTTOM BAR - Positioned at the very bottom */}
            <div className="absolute bottom-6 left-0 w-full z-50">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

                        {/* 1. TAGS SECTION - Stays on the left, takes more space on desktop */}
                        <div className="w-full lg:w-2/5 hidden lg:flex justify-center lg:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={page}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-wrap justify-center lg:justify-start gap-2"
                                >
                                    {WORKS[page].tags.map((tag, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-md rounded-full whitespace-nowrap"
                                        >
                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                                {tag}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* 2. NAVIGATION SECTION - Centered on all screens */}
                        <div className="flex items-center justify-center gap-6 order-last lg:order-0">
                            <button
                                onClick={() => paginate(-1)}
                                className="p-2 text-zinc-500 hover:text-white transition-all hover:-translate-x-1 cursor-pointer"
                                aria-label="Toggle navigation left"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>

                            {/* -------------------   UI for BUTon   ------------------- */}







                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <svg className="absolute w-full h-full -rotate-90">
                                            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-zinc-800" />
                                            <motion.circle
                                                cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-[#00C950]"
                                                strokeDasharray="113"
                                                animate={{ strokeDashoffset: 113 - (113 * (page + 1)) / WORKS.length }}
                                                transition={{ type: "spring", stiffness: 50 }}
                                            />
                                        </svg>
                                        <span className="text-[11px] font-black text-white">0{page + 1}</span>
                                    </div>


                                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">

                                    </span>
                                </div>
                            </div>









                            {/* -------------------   UI for BUTon   ------------------- */}




                            <button
                                onClick={() => paginate(1)}
                                className="p-2 text-zinc-500 hover:text-white transition-all hover:translate-x-1 cursor-pointer"
                                aria-label="Toggle navigation right"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>

                        {/* 3. YEAR SECTION - Right aligned on desktop */}
                        <div className="w-full lg:w-2/5 items-center justify-center lg:justify-end hidden lg:flex">
                            <div className="flex items-baseline select-none">
                                <span className="text-4xl lg:text-5xl font-semi-bold text-white/90">20</span>
                                {/* <span className="text-4xl lg:text-5xl font-semi-bold text-[#00C950]">26</span> */}
                                <span className="text-4xl lg:text-5xl font-semi-bold text-[#00C950]">
                                    {String(new Date().getFullYear()).slice(-2)}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative h-auto min-h-[75vh] ">

                {/* year */}


                {/* titles */}
                <div className="flex flex-col gap-6 z-40 order-2 lg:order-1">

                    <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">
                        Selected Works
                    </span>

                    <div className="flex flex-col gap-2">

                        {WORKS.map((work, i) => (
                            <h2
                                key={work.id}
                                onClick={() => setPage([i, i > page ? 1 : -1])}
                                className={`
                                text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl 
                                font-black tracking-wider transition-all duration-500 cursor-pointer
                                ${page === i
                                        ? 'text-white'
                                        : 'text-outline opacity-30 hover:opacity-90'
                                    }
                                `}
                            >
                                {work.title}
                            </h2>
                        ))}

                    </div>

                </div>

                {/* image slider */}
                {/* 1. Main Wrapper: Remove fixed h-[50vh] and use flex-col */}
                <div className="relative w-full flex flex-col items-center justify-center order-1 lg:order-2">

                    {/* 2. Image Box: Give this a specific height or aspect ratio */}
                    <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] overflow-hidden rounded-2xl animate-float">
                        <AnimatePresence custom={direction} mode="popLayout">
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    y: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 }
                                }}
                                drag="y"
                                dragConstraints={{ top: 0, bottom: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = Math.abs(offset.y) * velocity.y;
                                    if (swipe < -10000) paginate(1);
                                    else if (swipe > 10000) paginate(-1);
                                }}
                                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                            >
                                <img
                                    src={WORKS[page].img}
                                    className="w-full h-full object-contain rounded-2xl"
                                    alt="work preview"
                                    loading="lazy"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 3. Tags: Now placed OUTSIDE the absolute image container, sitting naturally below it */}
                    <div className="flex lg:hidden w-full justify-center mt-6 z-50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-wrap justify-center gap-2 px-4"
                            >
                                {WORKS[page].tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 whitespace-nowrap">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>


        </section>
    )
}