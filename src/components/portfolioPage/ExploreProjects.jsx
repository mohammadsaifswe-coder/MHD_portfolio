import React from 'react';

const projects = [
  {
    title: "Beauty Bay Lounge",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/1_e8qiq7.png",
    link: "https://beautybaylounge.com/"
  },
  {
    title: "Austin Event Centers",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/7_iwvzdh.png",
    link: "https://austineventcenters.com/"
  },
  {
    title: "Hari hara Kshethram",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774952634/4_m7fa5t.png",
    link: "https://hariharakshethram.com/"
  },
  {
    title: "Rainiersoft Global",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/3_pow629.png",
    link: "https://rainiersoftglobal.com/"
  },
  {
    title: "Urs Choice Gifts",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/4_ohfgle.png",
    link: "https://urschoicegifts.com/"
  },
  {
    title: "Bhavy's Kitchen",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/5_hon4vr.png",
    link: "https://bhavyskitchen.com/"
  },
  {
    title: "Lakhotia Education",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951427/6_wsfdsg.png",
    link: "https://www.lakhotiaedu.com"
  },
  {
    title: "Sri Balaji Tax Services",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/v1774951426/2_dlpfrg.png",
    link: "https://sribalajitaxservices.com/"
  }
];

export default function ExploreProjects() {
  return (
    <section className="bg-black py-20 px-6 sm:px-12 lg:px-24 min-h-screen">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-widest uppercase">
          EXPLORE
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-sm bg-zinc-900 aspect-16/10"
          >
            {/* Project Image */}
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 object-top group-hover:scale-110"
            />

            {/* Bottom Static Overlay (Title always visible slightly) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
               <h3 className="text-white text-lg font-medium tracking-wide">
                {project.title}
              </h3>
            </div>

            {/* Hover Blur Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm uppercase tracking-widest border-b border-white/40 pb-1">
                View Project
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Placeholder (Matching UI) */}
      <div className="flex justify-center items-center mt-12 space-x-4 text-zinc-500 text-xs">
        <span className="cursor-pointer hover:text-white">PREV</span>
        <span className="text-white font-bold underline">1</span>
        <span>2</span>
        <span className="cursor-pointer hover:text-white">NEXT</span>
      </div>
    </section>
  );
}