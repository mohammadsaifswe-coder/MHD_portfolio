import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/kbk-logo.webp';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/service" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Contact", to: "/contact" },
    ];

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <>
            <motion.nav 
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="fixed top-0 left-0 w-full z-50"
            >
                <div className="w-full bg-black/80 backdrop-blur-lg h-16 flex items-center justify-between px-6 border-b border-white/5">
                    
                    {/* Logo - Visible on all screens */}
                    <div className="sm:hidden flex  items-center">
                        <img src={logo} alt="KBK Logo" className="h-10 w-auto object-contain" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-10 mx-auto">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm tracking-widest transition-colors duration-300 hover:text-blue-400 ${isActive ? 'text-blue-400 font-bold' : 'text-gray-300'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 1. Dark Backdrop Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 md:hidden"
                        />

                        {/* 2. Side Drawer (Right to Left) */}
                        <motion.div 
                            initial={{ x: "100%" }} // Start off-screen to the right
                            animate={{ x: 0 }}      // Slide in
                            exit={{ x: "100%" }}     // Slide out
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-70 md:hidden p-8 flex flex-col"
                        >
                            {/* Close Button Inside Drawer */}
                            <div className="flex justify-end mb-8">
                                <button onClick={() => setIsOpen(false)} className="text-white p-2">
                                    <X size={30} />
                                </button>
                            </div>

                            {/* Navigation Links with Staggered Fade */}
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <NavLink
                                            to={link.to}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `text-2xl font-light tracking-[0.2em] transition-all ${isActive ? 'text-blue-400 pl-4 border-l-2 border-blue-400' : 'text-gray-400'}`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Optional: Mobile Footer Info */}
                            {/* <div className="mt-auto pt-10 border-t border-white/5">
                                <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                                    Developed with love by Nayan
                                </p>
                            </div> */}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}