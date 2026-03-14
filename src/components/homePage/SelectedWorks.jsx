import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SelectedWorksBg from '../../assets/home/selected-works.png'
import development from '../../assets/home/development.png'
import digitaMarketing from '../../assets/home/digitaMarketing.png'
import media from '../../assets/home/media.png'
import uiux from '../../assets/home/uiux.png'
import graphicDesign from '../../assets/home/graphicDesign.png'

const WORKS = [
    {
        id: 1,
        title: 'Digital Marketing',
        img: digitaMarketing,
        tags: ['SEO & SEM', 'Social Strategy', 'Content Ads', 'Analytics']
    },
    {
        id: 2,
        title: 'Development',
        img: development,
        tags: ['React/Next.js', 'E-Commerce', 'Cloud Architecture', 'Custom API']
    },
    {
        id: 3,
        title: 'Media Service',
        img: media,
        tags: ['Video Production', 'Photography', 'Motion Graphics', 'Post-Production']
    },
    {
        id: 4,
        title: 'UI/UX Design',
        img: uiux,
        tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        id: 5,
        title: 'Graphic Design',
        img: graphicDesign,
        tags: ['Brand Identity', 'Typography', 'Print Media', 'Illustration']
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
        <section className="h-fit md:min-h-fit w-full bg-linear-to-b from-black via-zinc-800 to-black/80 relative overflow-hidden flex items-center pt-10">

            {/* background */}
            <div
                className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[30vh] lg:h-[30vh] bg-cover bg-top z-20 pointer-events-none"
                style={{ backgroundImage: `url(${SelectedWorksBg})` }}
            />

            {/* buttons */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-[45%] lg:translate-x-0 flex gap-8 font-bold text-sm text-zinc-500 z-40">
                <div className="flex ">

                    <button onClick={() => paginate(-1)} className="hover:text-white transition-colors">← PREV</button>
                    <button onClick={() => paginate(1)} className="hover:text-white transition-colors">NEXT →</button>
                </div>
                <div className="flex items-center z-30 pointer-events-none pr-2 pb-2 lg:pr-0 lg:pb-0">
                    <span className="text-3xl lg:text-4xl font-black text-white">20</span>
                    <span className="text-3xl lg:text-4xl font-black text-[#00C950]">26</span>
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
                <div className="relative h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] w-full flex items-center justify-center animate-float  order-1 lg:order-2">

                    <div className="relative w-full h-full overflow-hidden rounded-2xl">

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
                                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing "
                            >

                                <img
                                    src={WORKS[page].img}
                                    className="w-full h-full object-contain rounded-2xl"
                                    alt="work preview"
                                />

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>

            </div>


        </section>
    )
}