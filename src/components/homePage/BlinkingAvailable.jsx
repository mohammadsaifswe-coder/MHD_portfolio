import React, { useEffect, useState } from 'react';

export default function BlinkingAvailable() {
    const [city, setCity] = useState("");

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();

                // ipapi.co does not use 'status'. It returns 'city' directly.
                if (data && data.city) {
                    setCity(`in ${data.city}`);
                }
            } catch (error) {
                console.error("Location fetch failed:", error);
            }
        };

        fetchLocation();
    }, []);
    return (
        <div className='flex flex-row items-center gap-3 w-fit whitespace-nowrap border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm shadow-xl'>
            <div className="relative flex items-center justify-center h-3 w-3">
                <span className="relative z-10 inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C950] animate-ping opacity-75"></span>
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#00C950]/30 blur-md"></span>
            </div>

            <p className='text-white text-[10px] md:text-xs font-bold tracking-widest uppercase leading-tight'>
                Available for work
                {city && (
                    <>
                        <br />
                        <span className="text-[#00C950]">{city}</span>
                    </>
                )}
            </p>
        </div>
    );
}