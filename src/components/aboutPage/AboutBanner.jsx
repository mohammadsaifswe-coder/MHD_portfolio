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
        className="absolute top-2/3 sm:top-20 sm:right-[30%] right-0 w-40 md:w-32 animate-float z-10"
      />

      <div className="absolute bottom-[10%] right-1/3 z-10 sm:block hidden">
        <img src={Aeroplane} alt="airplane" className="w-50 md:w-50 " />
      </div>

      <div className="container relative z-20 text-white">
        <h1 className="text-6xl md:text-8xl font-black uppercase ">
          ABOUT <span className="text-3xl md:text-5xl ">us</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg md:text-xl md:max-w-2/3 max-w-full font-light leading-relaxed">
          KBK Business Solutions is a forward-thinking agency dedicated to delivering effective marketing and digital solutions. We help brands build a strong online identity and connect with their target audience through smart strategies and creative ideas.
        </p>
      </div>

    </section>
  )
}