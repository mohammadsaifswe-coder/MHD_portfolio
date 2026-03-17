import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(1); // Set 1 to have the second item open by default like the image

    const faqs = [
        {
            number: "01",
            question: "What makes a company the best digital marketing agency in Hyderabad?",
            answer: "A top agency combines local market expertise with global trends, focusing on measurable ROI, transparent reporting, and a multi-channel approach tailored to specific business goals."
        },
        {
            number: "02",
            question: "What types of digital marketing services are available in Hyderabad?",
            answer: "Digital marketing services in Hyderabad include SEO, social media marketing, PPC advertising, content marketing, and website development. These services help businesses improve online visibility and attract potential customers."
        },
        {
            number: "03",
            question: "How does a ROI digital marketing agency benefit businesses?",
            answer: "By focusing on conversion rates and customer acquisition costs, an ROI-driven agency ensures that every rupee spent on marketing contributes directly to your bottom line."
        },
        {
            number: "04",
            question: "Can a digital marketing agency online manage campaigns remotely?",
            answer: "Absolutely. With modern collaboration tools and real-time data dashboards, campaigns can be managed, optimized, and reported on from anywhere in the world."
        },
        {
            number: "05",
            question: "Why should businesses invest in digital marketing services in Hyderabad?",
            answer: "Hyderabad is a rapidly growing tech hub. Investing in digital services here allows businesses to tap into a massive, tech-savvy audience and stay ahead of local competitors."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-20 min-h-screen flex flex-col items-center ">

            <div className="container">


                {/* Header */}
                <div className="text-center mb-16 ">
                    <h2 className="text-5xl md:text-5xl font-normal tracking-tight leading-tight">
                        Frequently <br />
                        asked questions
                    </h2>
                </div>

                {/* FAQ List Container */}
                <div className="w-full border-t border-zinc-800">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-800 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-8 flex items-start gap-8 md:gap-16 text-left group"
                            >
                                {/* Numbering */}
                                <span className="text-sm font-medium pt-1 text-zinc-400 group-hover:text-white transition-colors">
                                    {faq.number}
                                </span>

                                {/* Question */}
                                <span className="flex-1 text-lg md:text-xl font-medium ">
                                    {faq.question}
                                </span>

                                {/* Icon */}
                                <div className="pt-1 text-zinc-500 cursor-pointer">
                                    {openIndex === index ? (
                                        <ChevronUp size={24} strokeWidth={1.5} />
                                    ) : (
                                        <ChevronDown size={24} strokeWidth={1.5} />
                                    )}
                                </div>
                            </button>

                            {/* Answer (Accordion Content) */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pl-20 md:pl-32 pr-12">
                                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}