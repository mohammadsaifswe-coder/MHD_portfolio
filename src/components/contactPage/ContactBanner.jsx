import React from 'react'
import StaticImg from '../../assets/about/static.webp'
import Background from '../../assets/about/Background.webp'
import nbg from '../../assets/service/nbg.webp'
import rocket from '../../assets/about/rocket.webp'
import astronaut from '../../assets/contact/astronaut.webp'

export default function ContactBanner() {
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
                src={rocket}
                alt="rocket"
                className="sm:block hidden absolute top-2/3 sm:top-10 sm:right-[4%] right-0 w-40 md:w-28 z-10 animate-float"
            />

           

            <div className="container relative z-20 text-white w-full ">
                <div className="relative w-fit my-24"  >

                    <h3 className="  text-5xl md:text-7xl font-black tracking-wider uppercase">
                        Contact
                    </h3>
                    <img src={astronaut} alt="nbg" className='absolute -top-22 -right-14 z-99 w-30 ' />
                    <img src={nbg} alt="nbg" className='absolute top-0 right-1/2 -z-99 w-12' />
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