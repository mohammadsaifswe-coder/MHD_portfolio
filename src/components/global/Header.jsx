import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Using lucide-react for icons
import logo from '/kbk-logo.webp'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/service" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Contact", to: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative w-full z-50">
            {/* Main Bar */}
            <div className="w-full bg-linear-to-b from-[#000000] to-[#111111] h-16 flex items-center justify-between px-6 md:justify-center text-white border-b border-white/5">

                {/* Desktop Links - Hidden on Mobile */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Brand Name for Mobile */}
                <div className="md:hidden flex items-center justify-start h-full">
                    <img
                        src={logo}
                        alt="KBK Logo"
                        className="h-18 w-auto object-contain max-w-37.5"
                    />
                </div>

                {/* Hamburger Button - Mobile Only */}
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`
                absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden flex flex-col items-center gap-6 py-10
                ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}
            `}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)} // Auto-close menu on link click
                        className={({ isActive }) =>
                            `text-xl tracking-widest ${isActive ? 'text-blue-400' : 'text-white'}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}