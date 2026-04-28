import React from 'react';
import { MousePointer2, Code2, Palette, TrendingUp, PlayCircle } from 'lucide-react';

const videoURL = "https://res.cloudinary.com/dt9lwlxfb/video/upload/aboutbgcloud_otffa5.webm"
const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive digital experiences focused on usability, interaction, and conversion.",
    icon: <MousePointer2 className="text-green-400" size={20} />,
  },
  {
    title: "Development",
    description: "Building fast, scalable websites and web applications with modern technologies.",
    icon: <Code2 className="text-green-400" size={20} />,
  },
  {
    title: "Branding & Creative Design",
    description: "Creating memorable brand identities through visuals, strategy, and creative storytelling.",
    icon: <Palette className="text-green-400" size={20} />,
  },
  {
    title: "Digital Marketing",
    description: "Driving visibility, engagement, and growth through performance focused digital marketing.",
    icon: <TrendingUp className="text-green-400" size={20} />,
  },
  {
    title: "Media Production & Content Creation",
    description: "Producing impactful visual content, motion assets, and media that elevate brands.",
    icon: <PlayCircle className="text-green-400" size={20} />,
  },
];

export default function Expertise() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-8">
          <div>
            <span className="text-green-400 uppercase tracking-widest text-[10px] font-bold">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-4xl font-bold mt-4 leading-tight">
              We craft digital solutions <br /> 
              <span className="text-gray-100">that drive real growth.</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-md text-sm leading-relaxed">
              Transforming ideas into powerful digital experiences through 
              cutting-edge technology and innovative design.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default"
              >
                <div className="mt-1 p-2 bg-black rounded-lg border border-white/10 group-hover:border-green-400/50 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{service.title}</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Video/Orb */}
        <div className="relative flex justify-center items-center h-full min-h-100">
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 bg-teal-500/20 blur-[120px] rounded-full" />
          
          {/* The Video Element */}
          <div className="relative z-10 w-full max-w-md aspect-square rounded-full overflow-hidden border border-gray-700/50 ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-110"
              src={videoURL}
            />
          </div>
          
          {/* Decorative Grid Lines (Optional) */}
          <div className="absolute inset-0 pointer-events-none border-x border-white/5 mx-[-10%]" />
        </div>

      </div>
    </section>
  );
}