import React from 'react'
import Rocket from '../../assets/about/rocket.webp'
import StaticImg from '../../assets/about/static.webp'
import Aeroplane from '../../assets/about/airplane.webp'
import Background from '../../assets/about/Background.webp'

export default function AboutBanner() {
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
        className="absolute top-1/2 sm:top-20 right-[30%] w-40 md:w-32 animate-float z-10"
      />

      <div className="absolute bottom-[20%] left-[30%] z-10 sm:block hidden">
        <img src={Aeroplane} alt="airplane" className="w-50 md:w-50 " />
      </div>

      <div className="container relative z-20 text-white">
        <h1 className="text-6xl md:text-8xl font-black uppercase ">
          ABOUT <span className="text-3xl md:text-5xl ">us</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-md font-light leading-relaxed">
          We are a creative agency that specializes in providing high-quality design 
          and branding solutions to businesses.
        </p>
      </div>

    </section>
  )
}