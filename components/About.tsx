import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Award, Video, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08080c] relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-creativeBlue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neonTeal/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-creativeBlue mb-2 uppercase tracking-widest">05. The Editor</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Meet The Director</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 bg-[#111116] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Decorative Film Strip Background */}
            <div className="absolute right-0 top-0 bottom-0 w-24 opacity-[0.03] pointer-events-none border-l border-white/10 flex flex-col">
                 {[...Array(10)].map((_, i) => (
                     <div key={i} className="flex-1 border-b border-white/10 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-8 bg-white/20 rounded-sm" />
                     </div>
                 ))}
            </div>

            {/* Profile Image Area */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-creativeBlue to-neonTeal rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://ui-avatars.com/api/?name=Jothi+Basu&background=0D8ABC&color=fff&size=256" 
                   alt="Jothibasu" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur border border-white/20 px-4 py-1 rounded-full text-xs font-mono text-white whitespace-nowrap">
                Jothibasu
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Mastering the Edit</h4>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                With over <span className="text-white font-bold">6 years</span> of industry experience, Jothibasu has shaped narratives for major platforms, including a tenure at <span className="text-creativeBlue font-bold">Behindwoods</span>. Having successfully delivered over <span className="text-white font-bold">1000+ projects</span>, he specializes in transforming raw footage into compelling visual stories that captivate audiences.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6 mb-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-creativeBlue mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-black text-xl">6+</span>
                  </div>
                  <div className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Years Exp</div>
                </div>
                
                <div className="text-center md:text-left border-l border-white/10 pl-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-neonTeal mb-1">
                    <Video className="w-4 h-4" />
                    <span className="font-black text-xl">1000+</span>
                  </div>
                  <div className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Projects</div>
                </div>

                <div className="text-center md:text-left border-l border-white/10 pl-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-neonPurple mb-1">
                    <Award className="w-4 h-4" />
                    <span className="font-black text-xl">Pro</span>
                  </div>
                  <div className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Ex-Behindwoods</div>
                </div>
              </div>

              {/* Social Action */}
              <div>
                <a 
                  href="https://www.instagram.com/joetheamateur?igsh=MXh5cnUyNGc2cWtjaA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  Connect on Instagram
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;