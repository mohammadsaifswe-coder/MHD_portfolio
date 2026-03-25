import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import uiux from '../../assets/service/uiux.webp'
import media from '../../assets/service/media.webp'
import branding from '../../assets/service/branding.webp'
import webdev from '../../assets/service/webdev.webp'
import dm from '../../assets/service/dm.webp'

const services = [
    {

        id: 1,
        name: "UI/UX Design",
        title: "Innovative UI/UX Design for Modern Digital Platforms",
        desc: "Our UI/UX design services focus on creating intuitive and visually engaging digital experiences that prioritize user interaction. As one of the trusted UI UX design companies in Hyderabad, we design modern interfaces that are easy to navigate, visually appealing, and optimized to enhance user engagement across websites and mobile applications. ",
        list: ["User Experience Research", "Website Interface Design", "Wireframes & Interactive Prototypes", "Product Interface Design", "Mobile Application UI Design"],
        img: uiux,
        accentCode: "#E6517E"
    },
    {
        id: 2,
        name: "Web & Mobile Development",
        title: "Web & Mobile Development",
        desc: "We build high-performance websites and mobile applications designed to align with your business goals and digital growth. As a trusted app development company in Hyderabad, we focus on creating scalable, secure, and seamless solutions that perform efficiently across all modern devices and platforms.",
        list: ["Business Website Development", "WordPress Development", "API Integration & Development", "Front-End Development", "JavaScript Development", "Mobile Application Development"],
        img: webdev,
        accentCode: "#3b82f6"
    },
    {
        id: 3,
        name: "Branding & Graphic Design",
        title: "Branding & Creative Design",
        desc: "Strong branding plays a vital role in building trust and helping businesses stand out in a competitive market. Our creative team develops distinctive brand identities and impactful visual designs, while collaborating with professional corporate film makers in Hyderabad to create compelling visual content that communicates your brand values and leaves a lasting impression. ",
        list: ["Logo Design", "Brand Identity Development", "Marketing & Promotional Creatives", "Corporate Branding", "Visual Identity Systems", "Creative Graphic Designs"],
        img: branding,
        accentCode: "#FDC700"
    },
    {
        id: 4,
        name: "Digital Marketing",
        title: "Digital Marketing",
        desc: "Our marketing strategies are focused on enhancing online visibility, reaching the right audience, and generating quality leads for businesses. Through our professional digital marketing services in Hyderabad, we implement data-driven campaigns that deliver measurable results and support long-term business growth.",
        list: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Google Ads & PPC Advertising", "Performance Marketing Campaigns", "Email Marketing Campaigns", "Lead Generation Strategies"],
        img: dm,
        accentCode: "#51A2FF"
    },
    {
        id: 5,
        name: "Media Production & Content Creation",
        title: "Media Production & Content Creation",
        desc: "Engaging visual content plays a vital role in modern marketing and brand communication. As professional ad film makers in Hyderabad, we create high-quality media content that helps businesses present their stories through powerful and compelling visuals that capture audience attention.",
        list: ["Promotional & Advertising Videos", "Corporate Video Production", "Product Photography for Marketing"],
        img: media,
        accentCode: "#FF6900"
    }
];

export default function MainServices() {
    const [index, setIndex] = useState(0);

    // Optional: Auto-play the carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % services.length);
        }, 50000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="  relative  w-full bg-black py-10">
            <div className="container flex items-center overflow-hidden">

                {/* 1. Static Sidebar Label */}
                <div className="hidden lg:flex flex-col items-start w-32 h-full border-r border-zinc-800/50 pr-4 py-10">
                    <h2 className="text-white text-3xl font-semibold mb-16">
                        Services
                    </h2>

                    <div className="flex flex-col gap-5">
                        {services.map((service, i) => {
                            const isActive = i === index;

                            return (
                                <motion.div
                                    key={service.id}
                                    onClick={() => setIndex(i)}
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1.1 : 1.0,
                                        opacity: isActive ? 1 : 0.4,
                                        x: isActive ? 5 : 0
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        opacity: 1,
                                        x: 5,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="cursor-pointer origin-left"
                                >
                                    <h3
                                        className={`text-white text-sm font-medium leading-tight max-w-30 transition-colors ${isActive ? 'text-green-400' : 'text-gray-400'
                                            }`}
                                        style={{
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        {service.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Content Area */}
                <div className="flex-1 relative h-fit flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={services[index].id}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col md:flex-row items-center gap-12 w-full"
                        >
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div
                                    className="relative p-[1.5px] rounded-[40px] transition-all duration-700 ease-in-out"
                                    style={{
                                        background: `linear-gradient(to bottom, #ffffff, ${services[index].accentCode || '#3b82f6'})`,
                                        boxShadow: `0 20px 50px -12px ${services[index].accentCode || '#3b82f6'}66`
                                    }}
                                >
                                    <div className="bg-black rounded-[39px] overflow-hidden">
                                        <img
                                            src={services[index].img}
                                            alt={services[index].title}
                                            className="w-full max-w-md h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-white">
                                <motion.h3 className="text-2xl md:text-[34px] font-bold mb-6 leading-tight">
                                    {services[index].title}
                                </motion.h3>
                                <p className="text-gray-400 text-md mb-8 max-w-lg">
                                    {services[index].desc}
                                </p>

                                <ul className="grid grid-cols-2 gap-4 mb-10">
                                    {services[index].list.map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300 text-sm">
                                            <span
                                                className="w-2 h-2 rounded-full mr-3"
                                                style={{ backgroundColor: services[index].accentCode || '#3b82f6' }}
                                            />
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
                <div className="absolute right-0 flex flex-col gap-4">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white h-8' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}