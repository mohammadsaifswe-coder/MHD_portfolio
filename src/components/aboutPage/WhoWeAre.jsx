import React from 'react'
import {  LuFingerprint, LuPlus } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import headBtn from '../../assets/about/head-btn.webp'
import who from '../../assets/about/who.webp'

export default function WhoWeAre() {
    return (
        <section className="bg-black text-white pb-20 px-6 lg:px-20 overflow-hidden">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-6">
                <p className="text-xs uppercase tracking-[2px] text-white mb-6">Who We Are</p>
                <div className="flex flex-col items-start md:items-center text-start md:text-center w-full px-4">
                    <h2 className="text-2xl font-normal max-w-5xl leading-tight md:leading-[1.2]">
                        We combine strategy, creativity, and technology <br className="hidden md:block" />

                        <span className="flex flex-wrap items-center justify-start md:justify-center gap-3 md:gap-5 my-2">
                            <span> to transform ideas into</span>

                            <img
                                src={headBtn}
                                alt="badge"
                                className="h-8 md:h-8 w-auto object-contain inline-block rounded-full transform -rotate-12"
                            />

                            <span>powerful and scalable digital solutions </span>
                        </span>

                        <span className="block">that help businesses grow and succeed online.</span>
                    </h2>
                </div>



                <button className="mt-10 group flex items-center gap-3 border border-white/20 rounded-full px-6 py-3  hover:text-white! text-gray-600 transition-all duration-300 cursor-pointer">
                    <span className="text-sm font-medium ">Discover More</span>

                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-black transition-colors duration-300 shadow-sm">
                        <div className="relative w-4 h-4 flex items-center justify-center">

                            <div className="absolute top-0 left-1/2 translate-x-0.5 w-1 h-1 bg-black group-hover:bg-white rounded-full transition-colors duration-300" />

                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-0.5 group-hover:-translate-x-1.5 w-1 h-1 bg-black group-hover:bg-white rounded-full transition-all duration-500 ease-in-out" />

                            <div className="absolute bottom-0 left-1/2 translate-x-0.5 w-1 h-1 bg-black group-hover:bg-white rounded-full transition-colors duration-300" />

                        </div>
                    </div>
                </button>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Image with Custom Shape Clip */}
                <div className="lg:col-span-5 relative group">
                    <div className=" overflow-hidden aspect-4/5 relative">
                        <img
                            src={who}
                            alt="Team Collaboration"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100 scale-90 rounded-[40px]"
                        />
                        {/* Overlay Shape (Simulating the Figma Clip) */}
                        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                    </div>
                </div>

                {/* Center: Features */}
                <div className="lg:col-span-4 space-y-10">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Where Strategy Meets Creative Design</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We partner with forward thinking brands to build data-driven strategies, engaging campaigns, and impactful digital experiences that deliver measurable results.

                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 bg-[#111] rounded-xl flex items-center justify-center border border-white/5">
                                <IoDiamondOutline  className="text-gray-400" size={30}/>
                            </div>
                            <div>
                                <h4 className="font-medium">Design Solutions</h4>
                                <p className="text-gray-500 text-xs">Creating distinctive and visually compelling designs that reflect your brand identity.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 bg-[#111] rounded-xl flex items-center justify-center border border-white/5">
                                <LuFingerprint className="text-gray-400" size={30} />
                            </div>
                            <div>
                                <h4 className="font-medium">Collaborative Process</h4>
                                <p className="text-gray-500 text-xs">Working closely with clients to develop creative solutions that bring ideas to life.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Stats & Social Proof */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Stats Card */}
                    <div className="bg-[#0f0f0f] border border-white/5 rounded-[32px] p-8 text-center">
                        <div className="mb-8">
                            <h2 className="text-5xl font-bold">10+</h2>
                            <p className="text-gray-400 text-xs mt-2">Latest Projects Completed</p>
                        </div>
                        <div className="w-12 h-0.5 bg-red-600 mx-auto mb-8"></div>
                        <div>
                            <h2 className="text-5xl font-bold">98%</h2>
                            <p className="text-gray-400 text-xs mt-2">Clients Satisfied and Repeating</p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="bg-[#0f0f0f] border border-white/5 rounded-full py-3 px-6 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-black bg-yellow-400 flex items-center justify-center">
                                <LuPlus className="text-black text-xs" />
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 leading-tight">
                            Based on 204<br />Reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}