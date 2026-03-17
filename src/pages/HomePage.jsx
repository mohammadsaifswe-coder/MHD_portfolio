import React from 'react'
import heroBg from '../assets/banner-bg.webp'
import YearRings from '../components/homePage/YearRings'
import SkillCloud from '@/components/homePage/SkillCloud'
import BlinkingAvailable from '@/components/homePage/BlinkingAvailable'
import HeroName from '@/components/homePage/HeroName'
import SelectedWorks from '@/components/homePage/SelectedWorks'
import HomeService from '@/components/homePage/HomeService'
import Process from '@/components/homePage/Process'
import HomeAbout from '@/components/homePage/HomeAbout'
import ChooseUs from '@/components/homePage/ChooseUs'
import Counter from '@/components/homePage/Counter'
import FAQ from '@/components/homePage/FAQ'
import HomeContact from '@/components/homePage/HomeContact'

export default function HomePage() {
    return (
        <>

            {/* hero section */}
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

            {/* selected works section */}

            <SelectedWorks />

            {/* Services section */}

            <HomeService/>

            <Process/>

            <HomeAbout/>

            <ChooseUs/>

            <Counter/>

            <FAQ/>

            <HomeContact/>

            <div className="h-50 bg-gray-300/20"></div>

        </>
    )
}