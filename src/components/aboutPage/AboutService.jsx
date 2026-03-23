import React from 'react'
import cardHover from '../../assets/about/card-hover.webp'
import first from '../../assets/about/first.webp'
import second from '../../assets/about/second.webp'
import third from '../../assets/about/third.webp'
import { SlEnergy } from "react-icons/sl";
import { NavLink } from 'react-router-dom'

const services = [
    {
        title: "Digital Marketing",
        icon: first,
        desc: "We design driven engagement, attract new customers, and boost social media."
    },
    {
        title: "Product Design",
        icon: second,
        desc: "We design driven engagement, attract new customers, and boost social media."
    },
    {
        title: "App Development",
        icon: third,
        desc: "We design driven engagement, attract new customers, and boost social media."
    }
];

export default function AboutService() {
    return (
        <section className="bg-black text-white py-20">

            <div className="container">

                {/* Header Section */}
                <div className="flex ">
                    <div className="container">
                        <p className="text-sm uppercase text-gray-400 mb-2">Our Services</p>

                        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">

                            <h2 className="text-2xl md:text-3xl tracking-wider bg-linear-to-r from-white to-[#555555] bg-clip-text text-transparent">
                                Boost Your Brand With Power
                            </h2>
                            <p className="text-white text-sm leading-relaxed max-w-sm">
                                Enhance your brand's visibility and growth using innovative, marketing solutions crafted expertly.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:border-green-500/30"
                        >
                            {/* Background Hover Image Effect */}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2  w-30 h-30 md:w-full md:h-40 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-10"
                                style={{
                                    backgroundImage: `url(${cardHover})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',

                                }}
                            />


                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-green-500/10 transition-colors ">
                                    <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain " />
                                </div>

                                <h3 className="text-2xl font-bold mb-10 group-hover:text-[#BFF747] transition-colors ">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-10 border-b border-white/10 pb-10">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all cursor-pointer">
                                    <span>→</span> View Details
                                </button>
                            </div>

                            {/* Bottom Glow Effect */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-all" />
                        </div>
                    ))}


                </div>

                {/* Know All Service */}

                <div className="group flex flex-col sm:flex-row items-center bg-[#b3b3b3] rounded-2xl sm:rounded-full p-2 pr-2 w-fit gap-3 transition-all duration-300 my-10 mx-auto">

                    {/* Icon Container with 180deg Vertical Rotation on Hover */}
                    <div className="flex items-center justify-center bg-black text-green-400 w-10 h-10 rounded-full transition-transform duration-700 group-hover:transform-[rotateY(180deg)]">
                        <SlEnergy/>
                    </div>

                    {/* Main Text */}
                    <p className="text-[10px] md:text-[14px] text-black text-center sm:text-left">
                        We Strive To Lead The way In The business
                    </p>

                    {/* NavLink Section */}
                    <NavLink
                        to="/services"
                        className="bg-[#d1d1d1] sm:bg-transparent px-3 py-1 rounded-full text-[10px] md:text-[14px] text-black hover:text-green-700 transition-colors whitespace-nowrap"
                    >
                        Know All Services
                    </NavLink>

                </div>

            </div>
        </section>
    )
}