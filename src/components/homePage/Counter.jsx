import React, { useEffect, useRef, useState } from 'react'
import counterBG from '../../assets/home/counterBG.webp'

export default function Counter() {
    const names = [
        {
            title: "Projects Delivered",
            value: 400,
            description: "Creative work that drive real results",
            suffix: "+"
        },
        {
            title: "Clients Satisfaction",
            value: 99,
            description: "Focused on exceeding expectations.",
            suffix: "%"
        },
        {
            title: "Years of Experience",
            value: 15,
            description: "Creative Industry Experience",
            suffix: "+"
        }
    ]

    const sectionRef = useRef(null);
    const [count, setCount] = useState(names.map(() => 0))
    const [start, setStart] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true)
                }
            }, { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!start) return;

        const duration = 4000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        let frame = 0;
        const interval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;

            setCount(names.map((item) => Math.round(item.value * progress)));

            if (frame === totalFrames) clearInterval(interval);
        }, frameRate);

        return () => clearInterval(interval)
    }, [start])

    return (
        <section
            ref={sectionRef}
            className='relative w-full py-10 md:py-40 px-6 overflow-hidden bg-black'
        >
            {/* Background Glow/Image Wrapper */}
            <div
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                    backgroundImage: `url(${counterBG})`,
                    backgroundSize: 'cover', // Cover looks better for section backgrounds
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <div className='container relative z-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8'>
                    {names.map((item, idx) => (
                        <div
                            key={idx}
                            className='flex flex-col items-center text-center space-y-4 group'
                        >
                            {/* Header Label */}
                            <p className="text-white text-xs tracking-[0.2em]  flex items-center gap-2">
                                <span className='text-[#07C42C] font-bold'>//</span>
                                {item.title}
                            </p>

                            {/* Counter Number */}
                            <h1 className='text-6xl md:text-7xl  text-white tabular-nums'>
                                {count[idx]}
                                <span className='text-[#07C42C] ml-1'>{item.suffix}</span>
                            </h1>

                            {/* Description */}
                            <p className='text-white text-sm md:text-base max-w-62.5 leading-relaxed'>
                                {item.description}
                            </p>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}