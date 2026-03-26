import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import uiux from '../../assets/service/uiux.webp'
// import uiux from 'https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499228/uiux_b1ffnt.webp'
import media from '../../assets/service/media.webp'
import branding from '../../assets/service/branding.webp'
import webdev from '../../assets/service/webdev.webp'
import dm from '../../assets/service/dm.webp'
import bgover from '../../assets/service/bg-over.webp'

const services = [
    {
        id: 1,
        name: "UI/UX Design",
        title: "Innovative UI/UX Design for Modern Digital Platforms",
        desc: "Our UI/UX design services focus on creating intuitive and visually engaging digital experiences that prioritize user interaction.",
        list: ["User Experience Research", "Website Interface Design", "Wireframes & Interactive Prototypes", "Product Interface Design", "Mobile Application UI Design"],
        // img: uiux,
        img: 'https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499228/uiux_b1ffnt.webp',
        accentCode: "#E6517E"
    },
    {
        id: 2,
        name: "Web & Mobile Development",
        title: "Web & Mobile Development",
        desc: "We build high-performance websites and mobile applications designed to align with your business goals.",
        list: ["Business Website Development", "WordPress Development", "API Integration & Development", "Front-End Development", "JavaScript Development", "Mobile Application Development"],
        // img: webdev,
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499227/webdev_l3yx2q.webp",
        accentCode: "#3b82f6"
    },
    {
        id: 3,
        name: "Branding & Graphic Design",
        title: "Branding & Creative Design",
        desc: "Strong branding plays a vital role in building trust and helping businesses stand out in a competitive market.",
        list: ["Logo Design", "Brand Identity Development", "Marketing & Promotional Creatives", "Corporate Branding", "Visual Identity Systems", "Creative Graphic Designs"],
        // img: branding,
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499227/branding_rzdiwb.webp",
        accentCode: "#FDC700"
    },
    {
        id: 4,
        name: "Digital Marketing",
        title: "Digital Marketing",
        desc: "Our marketing strategies are focused on enhancing online visibility and generating quality leads.",
        list: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Google Ads & PPC Advertising", "Performance Marketing Campaigns", "Email Marketing Campaigns", "Lead Generation Strategies"],
        // img: dm,
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499227/dm_crf7ln.webp",
        accentCode: "#51A2FF"
    },
    {
        id: 5,
        name: "Media Production & Content Creation",
        title: "Media Production & Content Creation",
        desc: "As professional ad film makers in Hyderabad, we create high-quality media content that helps businesses present their stories.",
        list: ["Promotional & Advertising Videos", "Corporate Video Production", "Product Photography for Marketing"],
        // img: media,
        img: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774499227/media_achg2t.webp",
        accentCode: "#FF6900"
    }
];

// Animation Variants using 'custom' direction
const variants = {
    enter: (direction) => ({
        y: direction > 0 ? 100 : -100,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        y: direction > 0 ? -100 : 100,
        opacity: 0
    })
};

export default function MainServices() {
    // Track both index and direction in one state
    const [[index, direction], setIndex] = useState([0, 0]);

    const paginate = (newIndex) => {
        const dir = newIndex > index ? 1 : -1;
        setIndex([newIndex, dir]);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (index + 1) % services.length;
            paginate(nextIndex);
        }, 10000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <section className="relative w-full bg-black py-10 overflow-hidden">
            <div className="container flex items-center min-h-150 gap-10">
                {/* 1. Sidebar */}
                <div className="hidden lg:flex flex-col items-start w-32 pr-4 py-10">
                    <h2 className="text-white text-3xl font-semibold mb-16">Services</h2>
                    <div className="flex flex-col gap-5">
                        {services.map((service, i) => {
                            const isActive = i === index;
                            return (
                                <motion.div
                                    key={service.id}
                                    onClick={() => paginate(i)}
                                    animate={{
                                        scale: isActive ? 1.1 : 1.0,
                                        opacity: isActive ? 1 : 0.4,
                                        x: isActive ? 5 : 0
                                    }}
                                    whileHover={{ scale: 1.1, opacity: 1, x: 5 }}
                                    className="cursor-pointer origin-left"
                                >
                                    <h3 className={`text-white text-sm font-medium leading-tight max-w-30 ${isActive ? 'text-green-400' : 'text-gray-400'}`}>
                                        {service.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Content Area */}
                <div className="flex-1 relative h-full flex items-center justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col md:flex-row items-center gap-12 w-full"
                        >
                            {/* Image with Gradient Border */}
                            <div className="w-full md:w-[40%] flex justify-center">
                                <div
                                    className="relative p-[1.5px] rounded-[40px] transition-all duration-700 w-full max-w-md aspect-4/5 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(to bottom, #ffffff, ${services[index].accentCode})`,
                                        boxShadow: `0 20px 50px -12px ${services[index].accentCode}66`
                                    }}
                                >
                                    <div className="bg-black rounded-[39px] overflow-hidden h-full relative">

                                        {/* 1. Background Overlay - Stays at the back */}
                                        <img
                                            src={bgover}
                                            alt="bgover"
                                            className="absolute inset-0 z-0 w-full h-full object-cover opacity-100"
                                        />

                                        {/* 2. Main Service Image - Brought to the front */}
                                        <motion.img
                                            key={services[index].img} // Key ensures animation triggers on change
                                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            src={services[index].img}
                                            alt={services[index].title}
                                            className="relative z-10 w-full h-full object-contain"
                                        />

                                        {/* 3. Bottom Gradient Fade (Optional: Adds more depth) */}
                                        <div
                                            className="absolute inset-x-0 bottom-0 h-1/3 z-20 pointer-events-none"
                                            style={{
                                                background: `linear-gradient(to top, black, transparent)`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="w-full md:w-1/2 text-white">
                                <h3 className="text-2xl md:text-[34px] font-bold mb-6 leading-tight">
                                    {services[index].title}
                                </h3>
                                <p className="text-gray-400 text-md mb-8 max-w-lg">
                                    {services[index].desc}
                                </p>
                                <ul className="grid grid-cols-2 gap-4 mb-10">
                                    {services[index].list.map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300 text-sm">
                                            <span
                                                className="w-2 h-2 rounded-full mr-3"
                                                style={{ backgroundColor: services[index].accentCode }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="group relative w-24 h-24 rounded-full border border-gray-600 flex items-center justify-center text-[10px] uppercase tracking-tighter hover:border-white transition-all cursor-pointer">
                                    <span className="group-hover:scale-110 transition-transform">Get Free <br /> Quote ↗</span>
                                </button>





                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Navigation Dots */}


                <div className="absolute right-4 flex flex-col items-center gap-6">
                    {services.map((service, i) => {
                        const isActive = i === index;

                        return (
                            <button
                                key={service.id}
                                onClick={() => paginate(i)}
                                className="relative flex items-center justify-center w-2 h-2"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

                                {isActive && (
                                    <motion.div
                                        layoutId="liquid-pill"
                                        className="absolute w-2 rounded-full z-10"
                                        style={{
                                            backgroundColor: service.accentCode || '#3b82f6',
                                            boxShadow: `0 0 12px ${service.accentCode || '#3b82f6'}aa`
                                        }}
                                        initial={{ height: 8 }}
                                        animate={{ height: 32 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 40,
                                            mass: 6
                                        }}
                                    >
                                        <div className="absolute top-1 left-0.5 w-0.5 h-1 bg-white/30 rounded-full blur-[0.2px]" />
                                    </motion.div>
                                )}
                            </button>
                        );
                    })}
                </div>




            </div>
        </section>
    );
}