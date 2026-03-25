import React from 'react'
import saturn from '../../assets/about/saturn.webp'
import StaticImg from '../../assets/about/static.webp'
import obj4 from '../../assets/service/obj4.webp'
import Background from '../../assets/about/Background.webp'
import nbg from '../../assets/service/nbg.webp'

export default function ServiceBanner() {
    return (
        <section className="relative w-full h-120 sm:h-150 overflow-hidden bg-black flex items-start sm:items-center pt-10 sm:pt-0 ">

            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${Background})` }}
            />

            <img
                src={StaticImg}
                alt="abstract element"
                className="absolute bottom-0 left-0 w-32 md:w-48 animate-pulse z-10"
            />

            <img
                src={saturn}
                alt="rocket"
                className="sm:block hidden absolute top-2/3 sm:top-14 sm:right-[5%] right-0 w-40 md:w-32 animate-float z-10"
            />

            {/* Bottom Right Menu Section */}
            <div className="absolute bottom-10 right-10 md:right-20 z-20 flex flex-col items-center">

                <div className="relative w-full flex justify-center">
                    <img
                        src={obj4}
                        alt="arrow decoration"
                        className="w-12 h-auto mb-2 opacity-70 -translate-x-2.5"
                    />
                </div>

                <div className="flex items-center gap-2 sm:gap-8 md:gap-12 text-white text-sm md:text-base font-medium tracking-wide">
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Approach</span>
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Creativity</span>
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Experienced</span>
                </div>

            </div>

            <div className="container relative z-20 text-white w-full ">
                <div className="relative w-fit"  >

                    <h3 className="  text-5xl md:text-7xl font-black tracking-wider ">
                        Digital Solution
                    </h3>
                    <img src={nbg} alt="nbg" className='absolute top-0 -right-5 -z-99 w-12' />
                </div>
                <div className=" w-full sm:w-2/3 flex justify-end items-start gap-5">
                    <div className="border-b w-14 mt-2 border-gray-400 hidden sm:block" />
                    <p className="text-gray-300 text-lg md:text-base md:max-w-2/3 max-w-full font-light leading-relaxed text-left w-full sm:w-1/2">
                        We're designing digital experiences that enrich
                        human lives and it helps to grow your business
                        globally trends.
                    </p>
                </div>
            </div>

        </section>
    )
}