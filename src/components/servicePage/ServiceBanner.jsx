import React from 'react'
import Rocket from '../../assets/about/rocket.webp'
import StaticImg from '../../assets/about/static.webp'
import Aeroplane from '../../assets/about/airplane.webp'
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
                src={Rocket}
                alt="rocket"
                className="absolute top-2/3 sm:top-20 sm:right-[30%] right-0 w-40 md:w-32 animate-float z-10"
            />

            <div className="absolute bottom-[10%] right-1/3 z-10 sm:block hidden">
                <img src={Aeroplane} alt="airplane" className="w-50 md:w-50 " />
            </div>

            <div className="container relative z-20 text-white w-full ">
                <div className="relative w-fit"  >

                    <h3 className="  text-6xl md:text-7xl font-black tracking-wider ">
                        Digital Solution
                    </h3>
                    <img src={nbg} alt="nbg" className='absolute top-0 -right-5 -z-99 w-12' />
                </div>
                <div className="w-2/3 flex justify-end items-start gap-5">
                    <div className="border-b w-14 mt-2 border-gray-400" />
                    <p className="text-gray-300 text-lg md:text-base md:max-w-2/3 max-w-full font-light leading-relaxed text-left w-1/2">
                        We're designing digital experiences that enrich
                        human lives and it helps to grow your business
                        globally trends.
                    </p>
                </div>
            </div>

        </section>
    )
}