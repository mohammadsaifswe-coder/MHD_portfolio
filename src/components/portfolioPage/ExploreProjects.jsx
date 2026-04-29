import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [

  {
    title: "Hari Hara kshetram",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/hhktemple_f3mpim.webp",
    link: "https://hariharakshethram.com/"
  },
  {
    title: "Beautybaylounge",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/Buautybaylounge_frumcs.webp",
    link: "https://beautybaylounge.com/"
  },
  {
    title: "Austin Event centers",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/austinevent_m4bci5.webp",
    link: "https://austineventcenters.com/"
  },
  {
    title: "KBK Multi Speciality Hospitals",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/kbkhospital_aowjom.webp",
    link: "https://kbkhospitals.com/"
  },
  {
    title: "Bhavy’s Kitchen",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/bhavyskitchen_zrzbbe.webp",
    link: "https://bhavyskitchen.com/"
  },
  {
    title: "Global pulse farms",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/globalspice_yvjzck.webp",
    link: "https://globalpulse.farm/"
  },
  {
    title: "Global Teq Training academy",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/globalteq_xvz6nq.webp",
    link: "https://www.global-teq.com/"
  },
  {
    title: "Global teq Overseas education",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/globaledu_shffqe.webp",
    link: "https://globalteqedu.com/"
  },
  {
    title: "Unipro",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/unipro_aojnnj.webp",
    link: "https://www.uniprolimited.com/"
  },
  {
    title: "Cibil dekho",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/cibil_v4m1kp.webp",
    link: "https://cibildekho.com/"
  },
  {
    title: "Vedha kidney & super speciality hospital",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/vedas_digp1i.webp",
    link: "https://www.vedhahospitals.com/"
  },
  {
    title: "Texas capital Parteners",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/texascapital_hicyjf.webp",
    link: "https://txcapitalpartners.com/"
  },
  {
    title: "Lakhotia college of design",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/lakhotia_fm4evv.webp",
    link: "https://www.lakhotiaedu.com/"
  },
  {
    title: "Neuro vascular",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/DRSURESH_juxmjb.webp",
    link: "https://neuroandvascular.com/"
  },
  {
    title: "Md.Asif cardiologist",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/drasif_sw2yuj.webp",
    link: "https://drasifcardio.com/"
  },
  {
    title: "Dento max",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/dentomax_ji4gu5.webp",
    link: "https://dentomaxhyd.in/"
  },
  {
    title: "Clear vision lasik & laser treatment",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/laservision_dtfgf0.webp",
    link: "https://clearvisionlasik.co.in/"
  },
  {
    title: "Dr.Khaleelullah (advanced orthopedic center)",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/drkh_dkylwq.webp",
    link: "https://drkhaleelullaortho.com/"
  },
  {
    title: "Feder path",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/feder_l21y32.webp",
    link: "https://federpath.com/"
  },
  {
    title: "Avani care solutions",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/avni_ofm7vg.webp",
    link: "https://www.avanicaresolutions.com/"
  },
  {
    title: "Central RX",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/central_vzdhoj.webp",
    link: "https://centralrx.org/"
  },
  {
    title: "Sridhaa (heart&endocrine)",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/Image_y5ztyz.webp",
    link: "https://sridhaaheartandendocrinecentre.in/"
  },
  {
    title: "Matic group",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/maticgrp_asitxz.webp",
    link: "https://maticgroup.in/"
  },
  {
    title: "Denso",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/denso_gt4tqz.webp",
    link: "https://www.denso.com/global/en/"
  },
  {
    title: "CISCO",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/cisco_jnfq4r.webp",
    link: "https://www.cisco.com/"
  },
  {
    title: "Thomson Reuters",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/cocounsel_g3unmd.webp",
    link: "https://www.thomsonreuters.com/en"
  },
  {
    title: "Sri Balaji Tax services",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/sbts_zu9niv.webp",
    link: "https://sribalajitaxservices.com/"
  },
  {
    title: "TeaWorld",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/teaworld_vmopth.webp",
    link: "https://teaworldindia.co.in/"
  },
  {
    title: "AAdhya’s life line",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/life_mvufu5.webp",
    link: "https://aadhyaslifeline.com/"
  },
  {
    title: "SBA tax consultants",
    imgUrl: "https://res.cloudinary.com/dt9lwlxfb/image/upload/SBA_c8144v.webp",
    link: "https://sbataxconsultants.com/"
  },
 
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
      <div className="relative max-w-6xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 invisible pointer-events-none" aria-hidden="true">
          {currentProjects.map((_, i) => (
            <div key={`ghost-${i}`} className="aspect-16/10"></div>
          ))}
        </div>

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
                className="group relative block overflow-hidden rounded-sm bg-zinc-900 aspect-16/10"
              >
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 object-top group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 via-black/40 to-transparent">
                  <h3 className="text-white text-lg font-medium tracking-wide">
                    {project.title}
                  </h3>
                </div>

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