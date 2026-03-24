import React from 'react';

const achievements = [
    { company: 'KITEA', award: 'KITEA Awards', location: 'India', year: '2022' },
    { company: 'Dr. APJ Abdul Kalam Foundation', award: 'Dr. APJ Abdul Kalam Seva Puraskar – Business Category', location: 'India', year: '2022' },
    { company: 'Elevate Expo', award: 'Technology & Business Excellence', location: 'India', year: '2023' },
    { company: 'Business Leadership Forum', award: 'Top 10 Most Dynamic Entrepreneurs of the Year', location: 'India', year: '2023' },
    { company: 'Bharath Bhushan Foundation', award: 'Bharath Bhushan National Award', location: 'India', year: '2024' },
    { company: 'Business Eminence Council', award: 'Visionary Leader Award – Business Eminence Category', location: 'India', year: '2024' },
    { company: 'Rashtriya Gaurav Awards', award: 'Multi-sector Leadership Excellence', location: 'India', year: '2024' },
    { company: 'Times Business Awards', award: 'Fast-Growing MarkTech Company – KBK Business Solutions Pvt. Ltd.', location: 'India', year: '2024-25' },
];

export default function OurAchivements() {
    return (
        <section className="bg-black py-20 px-4 md:px-10">
            <div className="container bg-[#111111] rounded-[40px] p-8 md:p-16 border border-white/5">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
                    <div className="max-w-xl">
                        <span className="text-green-500 uppercase tracking-widest text-xs font-bold block mb-4">
                            Our Achievements
                        </span>
                        <h2 className="text-2xl md:text-3xl tracking-wider bg-linear-to-r from-white to-[#555555] bg-clip-text text-transparent w-full  mt-4">
                            Budget-Friendly Plans Built For Every Business
                        </h2>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <p className="text-gray-400 text-sm max-w-xs lg:text-right">
                            Our pricing ensures every business gets quality digital services without overspending or compromise.
                        </p>

                        {/* CTA Button with Custom Icon */}
                        <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm transition-transform active:scale-95">
                            Let's Get Started
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-0.5 scale-75">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-white/3 hover:bg-white/[0.07] border border-white/5 px-6 py-4 md:py-6 rounded-2xl transition-all duration-300"
                        >
                            {/* Company - Flex basis 1/4 */}
                            <div className="flex-1 min-w-30 text-gray-500 font-medium text-sm md:text-base">
                                {item.company}
                            </div>

                            {/* Award Title - Takes more space on desktop */}
                            <div className="flex-2 min-w-50 text-white font-semibold text-sm md:text-lg">
                                {item.award}
                            </div>

                            {/* Location - Centered flex item */}
                            <div className="flex-1 min-w-25 text-right md:text-center text-gray-500 text-sm md:text-base">
                                {item.location}
                            </div>

                            {/* Year - Right aligned flex item */}
                            <div className="flex-1 min-w-15 text-right text-gray-500 text-sm md:text-base font-mono">
                                {item.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}