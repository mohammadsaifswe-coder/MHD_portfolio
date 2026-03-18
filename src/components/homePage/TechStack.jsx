import React, { useState, useEffect } from 'react';

// Adobe & Creative Tools
import adobe_after_effects_icon from '../../assets/techstack/adobe-after-effects-icon.svg';
import coreldraw_icon from '../../assets/techstack/coreldraw-icon.svg';
import adobe_illustrator_icon from '../../assets/techstack/adobe-illustrator-icon.svg';
import adobe_photoshop from '../../assets/techstack/adobe-photoshop.svg';
import maya_icon from '../../assets/techstack/maya-icon.svg';
import adobe_premiere_pro_icon from '../../assets/techstack/adobe-premiere-pro-icon.svg';
import figma from '../../assets/techstack/figma.svg';
import canva_icon from '../../assets/techstack/canva-icon.svg';
import blender_icon from '../../assets/techstack/blender-icon.svg';
import adobe_express from '../../assets/techstack/Adobe-express.svg';
import DaVinci_Resolve from '../../assets/techstack/DaVinci_Resolve.svg';

// Development & Frameworks
import react from '../../assets/techstack/react.svg';
import nodedotjs from '../../assets/techstack/nodedotjs.svg';
import express from '../../assets/techstack/express.svg';
import tailwindcss from '../../assets/techstack/tailwindcss.svg';
import github from '../../assets/techstack/github.svg';

// Infrastructure & Hosting
import aws from '../../assets/techstack/aws-svgrepo-com.svg';
import digitalocean from '../../assets/techstack/digitalocean.svg';
import netlify from '../../assets/techstack/netlify.svg';
import railway from '../../assets/techstack/railway.svg';

// Marketing & Analytics
import googleads from '../../assets/techstack/googleads.svg';
import googleanalytics from '../../assets/techstack/googleanalytics.svg';
import googletagmanager from '../../assets/techstack/googletagmanager.svg';
import ahrefs from '../../assets/techstack/ahrefs-wordmark-dark.svg';
import semrush from '../../assets/techstack/semrush.svg';
import hubspot from '../../assets/techstack/hubspot.svg';
import mailchimp from '../../assets/techstack/mailchimp.svg';
import meta from '../../assets/techstack/meta.svg';
import brevo from '../../assets/techstack/brevo.svg';

// Payments & E-commerce
import razorpay from '../../assets/techstack/razorpay.svg';
import shopify from '../../assets/techstack/shopify.svg';

const TECH_DATA = {
    Dev: [
        { name: 'React', logo: react },
        { name: 'Node.js', logo: nodedotjs },
        { name: 'Express', logo: express },
        { name: 'Tailwind CSS', logo: tailwindcss },
        { name: 'GitHub', logo: github },
        { name: 'Figma', logo: figma },
        { name: 'AWS', logo: aws },
        { name: 'DigitalOcean', logo: digitalocean },
        { name: 'Netlify', logo: netlify },
        { name: 'Railway', logo: railway },
    ],
    Dm: [
        { name: 'Google Ads', logo: googleads },
        { name: 'Google Analytics', logo: googleanalytics },
        { name: 'Tag Manager', logo: googletagmanager },
        { name: 'Meta', logo: meta },
        { name: 'HubSpot', logo: hubspot },
        { name: 'Ahrefs', logo: ahrefs },
        { name: 'Semrush', logo: semrush },
        { name: 'Mailchimp', logo: mailchimp },
        { name: 'Brevo', logo: brevo },
        { name: 'Razorpay', logo: razorpay },
        { name: 'Shopify', logo: shopify },
    ],
    Media: [
        { name: 'After Effects', logo: adobe_after_effects_icon },
        { name: 'Illustrator', logo: adobe_illustrator_icon },
        { name: 'Photoshop', logo: adobe_photoshop },
        { name: 'Premiere Pro', logo: adobe_premiere_pro_icon },
        { name: 'CorelDraw', logo: coreldraw_icon },
        { name: 'Canva', logo: canva_icon },
        { name: 'Blender', logo: blender_icon },
        { name: 'Maya', logo: maya_icon },
        { name: 'Adobe Express', logo: adobe_express },
        { name: 'DaVinci Resolve', logo: DaVinci_Resolve },
    ]
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState('Dev');
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    // 🔥 Smooth continuous loop (NO LAG)
    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedIndex(prev => {
                const length = TECH_DATA[activeTab].length;

                let next;
                do {
                    next = Math.floor(Math.random() * length);
                } while (next === prev && length > 1); // avoid same repeat

                return next;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [activeTab]);
    return (
        <div className="min-h-screen bg-black text-white py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
                    Our Tech Stack
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {Object.keys(TECH_DATA).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 sm:px-10 py-2 rounded-full border transition-all duration-300 font-medium
                                ${activeTab === tab
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white border-gray-600 hover:border-white cursor-pointer'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-gray-800">
                    {TECH_DATA[activeTab].map((item, index) => {
                        const isActive = highlightedIndex === index;

                        return (
                            <div
                                key={index}
                                className="relative aspect-square flex items-center justify-center 
    p-6 sm:p-8 border-r border-b border-gray-800 overflow-hidden"
                            >
                                {/* 🔥 Overlay Layer */}
                                <div
                                    className={`
        absolute inset-0 bg-white
        transition-opacity duration-500 ease-in-out
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `}
                                />

                                {/* Logo */}
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className={`
        relative z-10 max-h-10 sm:max-h-12 w-auto object-contain
        transition-all duration-500
        ${isActive ? 'brightness-0 invert-0' : 'brightness-0 invert'}
      `}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}