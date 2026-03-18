import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(1); // Set 1 to have the second item open by default like the image

    const faqs = [
        {
            number: "01",
            question: "What makes a company the best digital marketing agency in Hyderabad?",
            answer: "The best digital marketing agency in Hyderabad combines industry experience with innovative marketing strategies. They focus on SEO, social media, and paid ads to deliver measurable business growth."
        },
        {
            number: "02",
            question: "What types of digital marketing services are available in Hyderabad?",
            answer: "Digital marketing services in Hyderabad include SEO, social media marketing, PPC advertising, content marketing, and website development. These services help businesses improve online visibility and attract potential customers."
        },
        {
            number: "03",
            question: "How does a ROI digital marketing agency benefit businesses?",
            answer: "A ROI digital marketing agency focuses on strategies that generate measurable results and higher returns. They optimize campaigns using data and analytics to improve conversions and revenue."
        },
        {
            number: "04",
            question: "Can a digital marketing agency online manage campaigns remotely?",
            answer: "Yes, a digital marketing agency online can manage campaigns from anywhere using digital tools and analytics platforms. This allows businesses to run effective marketing campaigns regardless of location"
        },
        {
            number: "05",
            question: "Why should businesses invest in digital marketing services in Hyderabad?",
            answer: "Digital marketing services in Hyderabad help businesses increase brand visibility and reach their target audience online. They also provide cost-effective strategies to generate leads and boost sales.."
        },
        {
            number: "06",
            question: "How do online digital marketing agencies help small businesses grow?",
            answer: "Online digital marketing agencies use SEO, social media, and targeted advertising to attract new customers. These strategies help small businesses increase website traffic and strengthen their online presence"
        },
        {
            number: "07",
            question: "What factors should be considered before hiring a digital marketing agency in Hyderabad?",
            answer: "Businesses should review the agency’s experience, client reviews, and portfolio before hiring. A reliable agency will offer clear strategies, transparent communication, and measurable results"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-20  flex flex-col items-center ">

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