// HeroName.jsx
import React from 'react'

export default function HeroName() {
    return (
        <div className='text-white flex flex-col md:flex-row items-baseline gap-0 md:gap-4 select-none'>
            {/* KBK - Scaled for mobile */}
            <span className='text-[18vw] md:text-[120px] lg:text-[150px] font-bold leading-none tracking-tighter'> 
                KBK 
            </span>
            
            {/* Businesssolutions - Scaled for mobile */}
            <div className='flex flex-col'>
                <span className='text-[8vw] md:text-[50px] lg:text-[70px] font-light leading-none opacity-90'> 
                    Businesssolutions
                </span>
                {/* The blue line from your image */}
                <div className='h-1 w-full bg-blue-500 mt-2 hidden md:block' />
            </div>
        </div>
    )
}