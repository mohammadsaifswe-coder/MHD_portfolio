import React from 'react'

export default function HeroName() {
    return (
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">

            <div className='text-white flex items-baseline gap-4 select-none'>
                <span className='text-[18vw] md:text-[120px] lg:text-[150px] font-bold leading-none tracking-tighter'>
                    KBK
                </span>

                <div className='flex flex-col relative'>
                    <span className='text-[6vw] md:text-[50px] lg:text-[70px] font-light leading-none opacity-90 wrap-break-word md:whitespace-nowrap'>
                        Businesssolutions
                    </span>

                    <div
                        className='
              h-1 md:h-1.5 
              w-[50%] 
              absolute -bottom-2 md:-bottom-4 
              right-0 rounded-full
            '
                        style={{
                            backgroundImage: `linear-gradient(to right, transparent 0%, #00FF41 100%)`,
                            filter: 'drop-shadow(0px 1px 2px rgba(0,255,65,0.4))'
                        }}
                    />
                </div>
            </div>


            <button
                className="
        border text-white rounded-md
        px-4 py-2
        text-sm md:text-base
        font-medium
        whitespace-nowrap
        hover:bg-white hover:text-black
        transition-colors
        basis-full md:basis-auto
      "
            >
                START A PROJECT
            </button>

        </div>
    )
}