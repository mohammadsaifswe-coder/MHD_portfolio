// HeroName.jsx
import React from 'react'

export default function HeroName() {
    return (

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-15">

            <div className='text-white flex flex-col md:flex-row items-baseline gap-0 md:gap-4 select-none '>
                {/* KBK - Scaled for mobile */}
                <span className='text-[18vw] md:text-[120px] lg:text-[150px] font-bold leading-none tracking-tighter'>
                    KBK
                </span>

                {/* Businesssolutions - Scaled for mobile */}
                <div className='flex flex-col relative'>
                    <span className='text-[8vw] md:text-[50px] lg:text-[70px] font-light leading-none opacity-90 '>
                        Businesssolutions
                    </span>
                    {/* The blue line from your image */}
                    <div className='h-px md:h-1 w-1/3 bg-green-500 mt-2 absolute -bottom-3 right-0' />
                </div>
            </div>

            <button className='border text-white rounded-md lg:px-4 px-3 lg:py-2 py-1 text-xs font-medium cursor-pointer hover:bg-white hover:text-black transition-colors'>
                START A PROJECT
            </button>
        </div>
    )
}