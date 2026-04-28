import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "Mrs. Jaya Vyshnavi", role: "HR Director", company: "KBK Group" },
    { name: "Mr. Sandeep Reddy", role: "Director", company: "KBK Group" },
    { name: "Mr. Srikanth Reddy", role: "General Manager", company: "KBK Group" },
    { name: "Mr. G.Nikeelu", role: "Marketing Chief", company: "KBK Group" },
    { name: "Mr. Upender", role: "Operations Manager", company: "KBK Group" },
    { name: "Mr. Arun Kumar", role: "HR & Immigration Manager", company: "KBK Group" },
    { name: "Mr. Shiva Shankar", role: "Director", company: "KBK Broadcasting Pvt. Ltd" },
    { name: "Mr. Saif Mohammad", role: "Business Development Manager / CRM", company: "KBK Business Solutions Pvt Ltd" },
    { name: "Mr. Gaddam Harish", role: "HR Manager", company: "KBK Group" },
    { name: "Mr. Jaffer", role: "Manager", company: "Equinox IT Solutions" },
];

export default function OurTeam() {
    const [highlightedIndex, setHighlightedIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * teamMembers.length);
            setHighlightedIndex(randomIndex);
        }, 1000); // Change highlight every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="container">
                {/* Section Title */}
                <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-widest uppercase mb-16">
                    OUR TEAM
                </h2>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-t border-white/20">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={false}
                            animate={{
                                backgroundColor: highlightedIndex === index ? "#e5e7eb" : "#000000",
                                // We use a conditional for the main name, but standard gray for subtext
                                color: highlightedIndex === index ? "#000000" : "#ffffff",
                            }}
                            transition={{ duration: 0.4 }}
                            className="relative p-8 flex flex-col items-center justify-center text-center border-r border-b border-white/20 min-h-45"
                        >
                            <h3 className="text-lg md:text-lg font-medium mb-2 leading-tight">
                                {member.name}
                            </h3>

                            {/* FIX 1: Change text-gray-500 to text-gray-400 (Passes 4.5:1 on Black) */}
                            <p className={`text-xs uppercase tracking-wider mb-1 font-semibold transition-colors duration-400 ${highlightedIndex === index ? "text-zinc-800" : "text-gray-400"
                                }`}>
                                {member.role}
                            </p>

                            {/* FIX 2: Change text-gray-600 to text-gray-400 for better visibility at 10px */}
                            <p className={`text-[10px] uppercase tracking-widest transition-colors duration-400 ${highlightedIndex === index ? "text-black" : "text-gray-400"
                                }`}>
                                {member.company}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}