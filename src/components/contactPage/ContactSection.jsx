import React from 'react'

export default function ContactSection() {
    return (
        <section className="bg-black text-white py-16 px-6 md:py-24">
            <div className="container">
                {/* Small Label */}
                <span className="text-[10px] uppercase tracking-[0.2em] mb-8 block">
                    Contact
                </span>
                {/* 1. Added 'flex' (fixed typo), 'w-full' and 'text-center' to help children align */}
                <div className="flex flex-col justify-center items-center w-full min-h-[50vh]">

                    <div className="w-full sm:w-[60%] flex flex-col items-center ">

                        {/* 2. Changed max-w-1/2 to a more standard md:max-w-2xl and added text-center */}
                        <h2 className="text-4xl sm:5xl md:text-7xl font-light mb-16 md:mb-24 text-start">
                            Let’s drop us a line and get the project started.
                        </h2>

                        {/* 3. Grid container needs to be centered within the flex parent */}
                        {/* <div className="flex justify-between gap-8 sm:gap-3 sm:flex-row flex-col w-full">

                            <div className="md:col-start-2 md:col-span-4 flex md:justify-start">
                                <ul className="space-y-4 text-sm md:text-base font-light ">
                                    <li className="flex items-center gap-2">
                                        <span>+</span> Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>+</span> Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>+</span> Digital marketing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>+</span> Media Team
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-6">
                                <p className="text-sm md:text-lg leading-relaxed max-w-md">
                                    We take a comprehensive approach to the creation and development of brands. We help local companies and services enter the market, and well-known brands expand an audience.
                                </p>
                            </div>

                        </div> */}
                    </div>
                </div>

            </div>
        </section>
    )
}