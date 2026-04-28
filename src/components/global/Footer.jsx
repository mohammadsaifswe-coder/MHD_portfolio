import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/kbk-logo.webp'

const sitemapLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Projects', url: '/project' },
  { name: 'Contact', url: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white  py-16">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">

          {/* Working Globally Indicator */}
          <div className="lg:col-span-2">
              <img src={logo} alt="logo" width="150" height="50" className="h-auto w-32" />
            <div className="flex items-center gap-2 ">

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07C42C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#07C42C]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
                Working Globally
              </span>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="flex gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
              Sitemap
            </p>
            <ul className="flex flex-col gap-4 text-lg">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.url}
                    aria-label="footer link"
                    end={link.url === '/'}
                    className={({ isActive }) => `
            transition-colors duration-300 
            ${isActive ? 'text-[#07C42C] font-bold' : 'text-white hover:text-[#07C42C]'}
          `}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="flex  gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Socials</span>
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href="#" className="hover:text-[#07C42C] transition-colors duration-300">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-[#07C42C] transition-colors duration-300">Dribbble</a></li>
              <li><a href="#" className="hover:text-[#07C42C] transition-colors duration-300">LinkedIn</a></li>
            </ul>
          </div>

          {/* Copyright/Logo Area (Right Aligned on Desktop) */}
          {/* <div className="lg:col-span-2 flex flex-col md:items-end justify-between gap-8 md:gap-0">
             <div className="text-2xl font-bold tracking-tighter">
                KBK<span className="text-[#07C42C]">.</span>
             </div>
             <p className="text-[10px] uppercase tracking-widest text-gray-500">
               © {currentYear} All Rights Reserved
             </p>
          </div> */}

        </div>
      </div>
    </footer>
  );
}