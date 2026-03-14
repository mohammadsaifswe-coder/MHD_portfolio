import React from 'react'
import heroBg from '../assets/banner-bg.webp'
import YearRings from '../components/homePage/YearRings'
import SkillCloud from '@/components/homePage/SkillCloud'
import BlinkingAvailable from '@/components/homePage/BlinkingAvailable'
import HeroName from '@/components/homePage/HeroName'
import SelectedWorks from '@/components/homePage/SelectedWorks'

export default function HomePage() {
    return (
        <>
            <div
                className="md:min-h-screen w-full bg-zinc-950 bg-cover bg-center bg-no-repeat overflow-x-hidden pt-5"
                style={{ backgroundImage: `url(${heroBg})` }}
            >

                <div className="container  h-full ">

                    <div className="flex flex-col md:flex-row justify-between items-start h-full ">
                        <div className=" flex justify-between items-center w-full md:w-fit">

                            <YearRings />
                            <div className="block md:hidden">
                                <BlinkingAvailable />
                            </div>
                        </div>


                        <SkillCloud />


                        <div className="hidden md:block">
                            <BlinkingAvailable />
                        </div>
                    </div>
                    <div className="md:-mt-25 ">

                        <HeroName />
                    </div>

                    {/* <div className="h-50"></div> */}
                </div>
            </div>

            <SelectedWorks />
            <div className="h-50 bg-black"></div>

        </>
    )
}