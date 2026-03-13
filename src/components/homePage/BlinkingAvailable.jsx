import React from 'react'

export default function BlinkingAvailable() {
    return (
        <div className='flex flex-row items-center gap-2 w-fit whitespace-nowrap border border-white/10 px-3 py-2 rounded-full bg-green-100/0'>
            {/* The Dot Container */}
            <div className="relative flex items-center justify-center h-3 w-3">
                {/* The main green dot */}
                <span className="relative z-10 inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                
                {/* The Ping effect (Blinking ripple) */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C950] animate-ping opacity-75"></span>
                
                {/* The Glow effect (Soft outer light) */}
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#00C950]/40 blur-sm"></span>
            </div>
            
            {/* The Text */}
            <p className='text-white text-xs font-semibold tracking-wider uppercase'>
                Available for work
            </p>
        </div>
    )
}