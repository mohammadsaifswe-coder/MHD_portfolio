import React from 'react'
import heroBg from '../assets/banner-bg.webp'
import YearRings from '../components/homePage/YearRings'
import SkillCloud from '@/components/homePage/SkillCloud'

export default function HomePage() {
    return (
        /* 1. This outer div handles the full-screen image */
        <div
            className="min-h-screen w-full bg-zinc-950 bg-cover bg-center bg-no-repeat overflow-x-hidden"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* 2. This inner div centers your content and prevents it from touching screen edges */}
            <div className="container mx-auto px-4 py-10 h-full">

                {/* 3. Using items-center to keep everything vertically aligned */}
                <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
                    <YearRings />

            
                    <SkillCloud />

                    <YearRings />
                </div>
            </div>
        </div>
    )
}