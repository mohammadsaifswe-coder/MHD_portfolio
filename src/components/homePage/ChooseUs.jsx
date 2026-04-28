import React from 'react'
import { MoveRight } from 'lucide-react'
const  Choose =  'https://res.cloudinary.com/dt9lwlxfb/image/upload/why_chose_home_rslibz.webp'
import animeted from '../../assets/home/span.each-object.webp'
import { NavLink } from 'react-router-dom'

export default function ChooseUs() {
    return (
        <section className="bg-black text-white py-16 flex items-center relative">

            {/* <div className="absolute z-990  left-[80vw] lg:left-0 bottom-[55%] lg:bottom-0 mt-30 animate-float">

                <img src={animeted} alt="animeted" className='md:h-34 h-fit' />
            </div> */}

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content Column */}
                <div className="lg:col-span-7 space-y-8">
                    <header className="space-y-4">
                        <span className="text-green-500 font-bold tracking-widest text-xs uppercase">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Turning Creativity into <br />
                            Digital Success
                        </h2>
                        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
                            By combining innovative thinking with digital expertise, we create powerful solutions
                            that help brands grow and stand out online.
                        </p>
                    </header>

                    {/* Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Point 1 */}
                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full border border-white flex items-center justify-center font-bold text-sm">
                                1
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg">Smart and Flexible Planning</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We start by understanding your goals and conducting research to build a strategic roadmap for success.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full border border-white flex items-center justify-center font-bold text-sm">
                                2
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg">Collaboration That Drives Innovation</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our designers, analysts, and developers work together to transform ideas into effective and engaging digital experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="space-y-4 pt-4">
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                           Collaborate across industries to deliver strategic solutions that drive business growth. Helping companies scale through innovative services, digital transformation, and result-driven execution.
                        </p>

                        <NavLink to="/contact" className="group w-fit relative flex items-center gap-3 bg-white hover:bg-green-500 text-black px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95 cursor-pointer "
                        aria-label="contact us"
                        >
                            <span className="relative z-10">Get Started Now</span>

                            {/* Arrow Container with sliding animation */}
                            <div className="relative flex items-center justify-center w-6 h-6 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:bg-white overflow-hidden">
                                <MoveRight
                                    size={14}
                                    className="text-white group-hover:text-black transition-all duration-300 ease-in-out transform "
                                />
                            </div>

                            {/* Subtle Shine Effect on Hover */}
                            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                        </NavLink>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl overflow-hidden ">
                        <img
                            src={Choose}
                            alt="Creative team collaborating"
                            className="w-full h-full object-cover min-h-100 lg:min-h-125"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}