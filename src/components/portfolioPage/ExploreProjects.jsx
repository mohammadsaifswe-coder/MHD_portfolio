import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  // ... (Your 8 projects from the previous array)
  { title: "Beauty Bay Lounge", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png", link: "https://beautybaylounge.com" },
  { title: "Austin Event Centers", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png", link: "https://austineventcenters.com" },
  { title: "Hari hara Kshethram", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774952634/4_m7fa5t.png", link: "https://hariharakshethram.com/index-new.php" },
  { title: "Rainiersoft Global", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/3_pow629.png", link: "https://rainiersoftglobal.com" },
  { title: "Urs Choice Gifts", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/4_ohfgle.png", link: "https://urschoicegifts.com" },
  { title: "Bhavy's Kitchen", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/5_hon4vr.png", link: "https://bhavyskitchen.com" },
  { title: "Lakhotia Education", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/6_wsfdsg.png", link: "https://www.lakhotiaedu.com" },
  { title: "Sri Balaji Tax Services", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/2_dlpfrg.png", link: "https://sribalajitaxservices.com" },
  // Adding mock Page 2 items for testing
  { title: "Project Nine", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png", link: "#" },
  { title: "Project Ten", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png", link: "#" },
  { title: "Project Nine", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png", link: "#" },
  { title: "Project Ten", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png", link: "#" },
  { title: "Project Nine", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png", link: "#" },
  { title: "Project Ten", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png", link: "#" },
  { title: "Project Nine", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png", link: "#" },
  { title: "Project Ten", imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png", link: "#" },
];

export default function ExploreProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const projectsPerPage = 8;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const paginate = (newPage) => {
    if (newPage === currentPage) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  return (
   <section className="bg-black py-20 px-6 sm:px-12 lg:px-24 min-h-screen overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-widest uppercase">
          EXPLORE
        </h2>
      </div>

      {/* PARENT CONTAINER: No hardcoded min-height anymore */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* 1. GHOST GRID (Invisible)
            This stays in the normal flow to push the container height 
            dynamically based on the device screen size. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 invisible pointer-events-none" aria-hidden="true">
          {currentProjects.map((_, i) => (
            <div key={`ghost-${i}`} className="aspect-[16/10]"></div>
          ))}
        </div>

        {/* 2. ANIMATED GRID (Absolute)
            This slides on top of the ghost grid space. */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-sm bg-zinc-900 aspect-[16/10]"
              >
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 object-top group-hover:scale-110"
                />
                
                {/* Bottom Title Gradient */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h3 className="text-white text-lg font-medium tracking-wide">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Reveal with Blur */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-xs">
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-green-500 text-sm uppercase tracking-widest border-b border-white/40 pb-1">
                    View Project
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination UI - Always stays below the grid now */}
      <div className="flex justify-center items-center mt-12 space-x-6 text-zinc-500 text-xs tracking-widest uppercase relative z-10">
        <button 
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          className={`hover:text-white transition-colors ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={currentPage === 1}
        >
          PREV
        </button>
        
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`transition-colors ${currentPage === i + 1 ? 'text-white font-bold underline underline-offset-8' : 'hover:text-zinc-300 cursor-pointer'}`}
          >
            {i + 1}
          </button>
        ))}

        <button 
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
          className={`hover:text-white transition-colors ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={currentPage === totalPages}
        >
          NEXT
        </button>
      </div>
    </section>
  );
}