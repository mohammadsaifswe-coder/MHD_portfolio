import React, { useEffect, useState } from 'react';

export default function BlinkingAvailable() {
    const [city, setCity] = useState("");

    useEffect(() => {
        // Fetching from ipapi.co (Free, no-auth, reliable for basic city data)
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data.city) {
                    setCity(`in ${data.city}`);
                }
            })
            .catch(() => console.log("Location fetch failed, using default status."));
    }, []);

    return (
        <div className='flex flex-row items-center gap-3 w-fit whitespace-nowrap border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm shadow-xl'>
            {/* The Dot Container */}
            <div className="relative flex items-center justify-center h-3 w-3">
                {/* Main green dot */}
                <span className="relative z-10 inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                
                {/* Ping effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C950] animate-ping opacity-75"></span>
                
                {/* Glow effect */}
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#00C950]/30 blur-md"></span>
            </div>
            
            {/* The Dynamic Text */}
            <p className='text-white text-[10px] md:text-xs font-bold tracking-widest uppercase'>
                Available for work 
                <br />
                <span className="text-[#00C950] ml-1">{city}</span>
            </p>
        </div>
    );
}