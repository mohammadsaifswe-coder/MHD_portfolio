import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {   

        id: 1,
        name:"UI/UX Design",
        title: "Innovative UI/UX Design for Modern Digital Platforms",
        desc: "Our UI/UX design services focus on creating intuitive and visually engaging digital experiences that prioritize user interaction. As one of the trusted UI UX design companies in Hyderabad, we design modern interfaces that are easy to navigate, visually appealing, and optimized to enhance user engagement across websites and mobile applications. ",
        list: ["User Experience Research", "Website Interface Design", "Wireframes & Interactive Prototypes", "Product Interface Design", "Mobile Application UI Design"],
        img: "/path-to-img1.png",
        accent: "text-green-500"
    },
    {
        id: 2,
        name:"Web & Mobile Development",
        title: "Web & Mobile Development",
        desc: "We develop scalable, robust, and custom-made applications tailored to business needs.",
        list: ["Custom Development", "API Integration", "NodeJS / React", "WordPress", "Backend", "App Dev"],
        img: "/path-to-img2.png",
        accent: "text-blue-500"
    },
    {
        id: 3,
        title: "Digital Marketing",
        desc: "We build powerful brand identities and creative visual solutions for modern businesses.",
        list: ["Logo Design", "Marketing", "Visual Identity", "Social Identity", "Branding", "Creative"],
        img: "/path-to-img3.png",
        accent: "text-purple-500"
    },
    {
        id: 4,
        title: "Branding & Graphic Design",
        desc: "We build powerful brand identities and creative visual solutions for modern businesses.",
        list: ["Logo Design", "Marketing", "Visual Identity", "Social Identity", "Branding", "Creative"],
        img: "/path-to-img3.png",
        accent: "text-purple-500"
    },
    {
        id: 5,
        title: "Media Production & Content Creation",
        desc: "We build powerful brand identities and creative visual solutions for modern businesses.",
        list: ["Logo Design", "Marketing", "Visual Identity", "Social Identity", "Branding", "Creative"],
        img: "/path-to-img3.png",
        accent: "text-purple-500"
    }
];

export default function MainServices() {
    const [index, setIndex] = useState(0);

    // Optional: Auto-play the carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full bg-black flex items-center overflow-hidden px-6 md:px-20">

            {/* 1. Static Sidebar Label */}
            <div className="hidden lg:flex flex-col items-start w-32 h-full border-r border-zinc-800/50 pr-4 py-10">
                {/* Static Section Header */}
                <h2 className="text-white text-3xl font-bold uppercase tracking-tighter mb-16">
                    Services
                </h2>

                {/* Scrollable/Interactive Menu List */}
                <div className="flex flex-col gap-10">
                    {services.map((service, i) => {
                        const isActive = i === index;

                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => setIndex(i)} // Allows clicking to change the carousel
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.1 : 1.0,
                                    opacity: isActive ? 1 : 0.4,
                                    x: isActive ? 5 : 0 // Subtle shift for the active one
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="cursor-pointer origin-left"
                            >
                                <h3
                                    className={`text-white text-sm md:text-base font-medium uppercase leading-tight max-w-30 transition-colors ${isActive ? 'text-green-400' : 'text-gray-400'
                                        }`}
                                    style={{
                                        // wordWrap is handled by Tailwind's max-w and leading-tight
                                        wordBreak: 'break-word'
                                    }}
                                >
                                    {service.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 2. Content Area */}
            <div className="flex-1 relative h-150 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={services[index].id}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="flex flex-col md:flex-row items-center gap-12 w-full"
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative p-1 rounded-[40px] bg-linear-to-b from-zinc-700 to-transparent">
                                <img
                                    src={services[index].img}
                                    alt="service"
                                    className="w-full max-w-md h-auto rounded-[38px] shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className="w-full md:w-1/2 text-white">
                            <motion.h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {services[index].title}
                            </motion.h3>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg">
                                {services[index].desc}
                            </p>

                            <ul className="grid grid-cols-2 gap-4 mb-10">
                                {services[index].list.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-sm">
                                        <span className={`w-2 h-2 rounded-full mr-3 ${services[index].accent} bg-current`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="group relative w-24 h-24 rounded-full border border-gray-600 flex items-center justify-center text-[10px] uppercase tracking-tighter text-center hover:border-white transition-all">
                                <span className="group-hover:scale-110 transition-transform">Get Free <br /> Quote ↗</span>
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Navigation Dots (Right Side) */}
            <div className="absolute right-10 flex flex-col gap-4">
                {services.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white h-8' : 'bg-gray-600'}`}
                    />
                ))}
            </div>

        </section>
    );
}