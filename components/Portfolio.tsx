import React, { useState } from 'react';
import { Play, X, Film, ArrowLeft, Filter, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';

interface PortfolioProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ selectedCategory, onClearFilter }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track if video is playing
  
  // Filter projects
  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  // If no category selected, we duplicate list for the infinite scroll effect
  const displayProjects = selectedCategory 
    ? filteredProjects 
    : [...projects, ...projects];

  const handleProjectClick = (project: Project) => {
      // If external link (YouTube), open in new tab
      if (project.externalLink) {
          window.open(project.externalLink, '_blank');
          return;
      }
      // Otherwise open modal
      setSelectedProject(project);
      setIsPlaying(false);
  };

  // Logic for Modal Navigation
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false); // Reset playback on change
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false); // Reset playback on change
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  // Helper to determine width style based on aspect ratio
  const getAspectRatioStyle = (ratio?: string) => {
    switch(ratio) {
        case '9:16': return { width: '250px' };
        case '16:9': return { width: '450px' };
        case '21:9': return { width: '550px' };
        case '1:1': return { width: '300px' };
        case '4:5': return { width: '280px' };
        default: return { width: '400px' }; // Default
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#020205] border-t border-white/5 relative overflow-hidden min-h-[80vh]">
      
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
                <h2 className="text-sm font-mono text-creativeBlue uppercase tracking-widest">03. Our Recent Works</h2>
                {selectedCategory && (
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded flex items-center gap-1">
                        <Filter className="w-3 h-3" /> FILTERED
                    </span>
                )}
            </div>
            
            <div className="flex items-center gap-4">
                {selectedCategory && (
                    <button 
                        onClick={onClearFilter}
                        className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-creativeBlue hover:bg-creativeBlue/10 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 text-white group-hover:text-creativeBlue" />
                    </button>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                {selectedCategory ? (
                    <span className="text-creativeBlue">{selectedCategory} Library</span>
                ) : (
                    <>
                        <Film className="w-8 h-8 animate-spin-slow text-creativeBlue" /> The Film Roll
                    </>
                )}
                </h3>
            </div>
          </div>

          <div className="text-right hidden md:block">
            <div className="text-xs font-mono text-creativeBlue animate-pulse mb-1">● REC</div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
              {selectedCategory ? `${filteredProjects.length} CLIPS FOUND` : "Hover to Pause / Click to View"}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT DISPLAY */}
      {selectedCategory ? (
        /* CATEGORY HORIZONTAL TIMELINE VIEW */
        <div className="container mx-auto animate-fade-in-up">
            
            {/* Timeline UI Container */}
            <div className="relative bg-[#1a1a20] border-y border-white/10 pt-8 pb-4">
                
                {/* Time Ruler (Decorative) */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#15151a] border-b border-white/5 flex items-end overflow-hidden select-none z-20">
                    <div className="flex w-full min-w-max px-8">
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="flex flex-col items-start justify-end gap-1 w-20 md:w-32 shrink-0 border-l border-white/5 h-full pl-1 pb-1">
                                <span className="text-[9px] font-mono text-gray-600">00:0{i}:00</span>
                                <div className="h-1.5 w-[1px] bg-gray-700/50"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Track Background Lines */}
                <div className="absolute inset-0 top-8 pointer-events-none z-0">
                     <div className="h-full w-full opacity-[0.03] bg-[repeating-linear-gradient(90deg,transparent,transparent_79px,#fff_80px)]" />
                     <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
                </div>

                {/* Horizontal Scroll Container (The Track) */}
                <div className="relative z-10 overflow-x-auto py-6 px-8 flex items-center gap-1.5 scrollbar-thin scrollbar-track-[#0f0f13] scrollbar-thumb-white/20 hover:scrollbar-thumb-creativeBlue/50">
                    
                    {/* Track Header Label (Sticky-ish simulation) */}
                    <div className="absolute left-2 top-2 text-[9px] font-mono text-gray-500 pointer-events-none z-20">Video Track 1</div>

                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            style={getAspectRatioStyle(project.aspectRatio)}
                            className="flex-none group relative h-64 md:h-80 bg-[#111] border-2 border-[#222] rounded-[2px] overflow-hidden cursor-pointer hover:border-creativeBlue transition-all duration-200 shadow-lg hover:z-20 hover:scale-[1.01]"
                        >
                            {/* Clip Top Bar (Label Color) */}
                            <div 
                              className={`absolute top-0 left-0 right-0 h-1 z-20 transition-opacity opacity-70 group-hover:opacity-100 ${
                                index % 3 === 0 ? 'bg-creativeBlue' : index % 3 === 1 ? 'bg-neonTeal' : 'bg-neonPurple'
                              }`} 
                            />

                            {/* Image */}
                            <img 
                                src={project.thumbnail} 
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                            
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            
                            {/* Center Icon (Play or External Link) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                    {project.externalLink ? (
                                        <ExternalLink className="w-5 h-5 text-white ml-0.5" />
                                    ) : (
                                        <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                                    )}
                                </div>
                            </div>
                            
                            {/* Clip Metadata Overlay (Timeline Style) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/90 backdrop-blur-sm border-t border-white/10 px-3 py-1.5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-[10px] font-mono text-gray-300 truncate max-w-[70%] tracking-tight">{project.title}</span>
                                <span className="text-[9px] font-mono text-gray-500 bg-black/50 px-1 rounded">.mp4</span>
                            </div>
                        </div>
                    ))}
                    
                    {/* Empty Space at end of timeline */}
                    <div className="flex-none w-24 h-64 md:h-80 border-l border-dashed border-white/10 relative">
                        <span className="absolute top-1/2 left-4 text-[9px] font-mono text-gray-600 -rotate-90 whitespace-nowrap">End of Sequence</span>
                    </div>

                </div>
            </div>
            
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500 font-mono">
                    No footage found in this reel.
                </div>
            )}
        </div>
      ) : (
        /* INFINITE SCROLL VIEW (Default) */
        <div className="relative w-full bg-black border-y-8 border-[#1a1a1a] py-8 group/strip">
            
            {/* Top Sprocket Holes */}
            <div className="absolute top-[-8px] left-0 w-full h-2 z-20 flex justify-between overflow-hidden">
            <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,#020205_12px,#020205_24px)] opacity-50" />
            </div>

            {/* The Rolling Animation Track */}
            <div className="flex w-max animate-scroll group-hover/strip:pause">
            {displayProjects.map((project, index) => (
                <div 
                key={`${project.id}-${index}`}
                className="relative w-[300px] md:w-[450px] aspect-video flex-shrink-0 mx-4 bg-[#111] border-y-[12px] border-black cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-10 hover:border-creativeBlue/50"
                onClick={() => handleProjectClick(project)}
                >
                
                {/* Image */}
                <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia-[50%] group-hover:sepia-0"
                />

                {/* Film Sprockets (Per Frame Decoration) */}
                <div className="absolute -top-3 left-0 w-full h-2 flex justify-between px-2">
                    {[...Array(8)].map((_, i) => <div key={i} className="w-4 h-1.5 bg-white/10 rounded-sm" />)}
                </div>
                <div className="absolute -bottom-3 left-0 w-full h-2 flex justify-between px-2">
                    {[...Array(8)].map((_, i) => <div key={i} className="w-4 h-1.5 bg-white/10 rounded-sm" />)}
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-creativeBlue/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {project.externalLink ? (
                            <ExternalLink className="w-5 h-5 text-white" />
                        ) : (
                            <Play className="w-5 h-5 fill-white text-white ml-1" />
                        )}
                    </div>
                </div>

                {/* Vertical Divider (Film Frame Gap) */}
                <div className="absolute -right-[17px] top-[-12px] bottom-[-12px] w-[2px] bg-[#222]" />
                </div>
            ))}
            </div>

            {/* Bottom Sprocket Holes */}
            <div className="absolute bottom-[-8px] left-0 w-full h-2 z-20 flex justify-between overflow-hidden">
            <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,#020205_12px,#020205_24px)] opacity-50" />
            </div>
            
            {/* Vignette Overlay for Depth */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020205] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020205] to-transparent z-10 pointer-events-none" />

        </div>
      )}

      {/* Modal / Lightbox (Media Viewer) - Only for Internal Projects */}
      {selectedProject && !selectedProject.externalLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Navigation Arrows (Floating on edges) */}
          {filteredProjects.length > 1 && (
              <>
                  <button 
                      onClick={handlePrev}
                      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/5 hover:bg-creativeBlue rounded-full text-white transition-all border border-white/10 backdrop-blur hover:scale-110"
                  >
                      <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                      onClick={handleNext}
                      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/5 hover:bg-creativeBlue rounded-full text-white transition-all border border-white/10 backdrop-blur hover:scale-110"
                  >
                      <ChevronRight className="w-8 h-8" />
                  </button>
              </>
          )}

          {/* Close Button (Top Right) */}
          <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-red-500 rounded-full text-white transition-all border border-white/10 hover:scale-110"
          >
              <X className="w-6 h-6" />
          </button>


          {/* Media Content */}
          <div className="relative z-10 max-w-7xl w-full flex justify-center items-center">
            <div className="relative shadow-2xl shadow-creativeBlue/10 w-full flex justify-center">
              
              {isPlaying && selectedProject.videoUrl ? (
                // VIDEO PLAYER
                <video 
                   src={selectedProject.videoUrl} 
                   controls 
                   autoPlay 
                   className="max-h-[85vh] max-w-[90vw] rounded-sm"
                />
              ) : (
                // THUMBNAIL + PLAY BUTTON
                <div 
                   className="relative cursor-pointer group"
                   onClick={() => setIsPlaying(true)}
                >
                    <img 
                        src={selectedProject.thumbnail} 
                        alt={selectedProject.title} 
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                             <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </div>
                    </div>
                </div>
              )}
              
            </div>
          </div>

        </div>
      )}
    </section>
  );
};

export default Portfolio;