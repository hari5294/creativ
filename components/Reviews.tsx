import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

// Fix for TypeScript errors with framer-motion types
const MotionDiv = motion.div as any;

const reviews: Review[] = [
  {
    id: 1,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+1&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1ccr4HRVREAyhC9XiiRwllxAF5_mJnWdu=w1000?authuser=0", 
    driveId: "1ccr4HRVREAyhC9XiiRwllxAF5_mJnWdu",
    rating: 5.0,
    quote: "Exceptional editing that captured the exact mood we were looking for.",
    tag: "Client Work"
  },
  {
    id: 2,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+2&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1B-sjl93owcduWBe89dj_crSwrjXJiBnW=w1000?authuser=0",
    driveId: "1B-sjl93owcduWBe89dj_crSwrjXJiBnW",
    rating: 5.0,
    quote: "Professional workflow and stunning visual results.",
    tag: "Client Work"
  },
  {
    id: 3,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+3&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1IHXn9baWWmq_ARVYi7XiMHcNLe33R19Z=w1000?authuser=0",
    driveId: "1IHXn9baWWmq_ARVYi7XiMHcNLe33R19Z",
    rating: 5.0,
    quote: "The final delivery exceeded our expectations.",
    tag: "Client Work"
  },
  {
    id: 4,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+4&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1W82LdgyD1oJdcZW9O199CMxdiat6HVnL=w1000?authuser=0",
    driveId: "1W82LdgyD1oJdcZW9O199CMxdiat6HVnL",
    rating: 5.0,
    quote: "Incredible attention to detail.",
    tag: "Client Work"
  },
  {
    id: 5,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+5&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1SgFBOtv0fhOhKurqtWJh8xyyofFfVAWu=w1000?authuser=0",
    driveId: "1SgFBOtv0fhOhKurqtWJh8xyyofFfVAWu",
    rating: 5.0,
    quote: "Transformed our raw footage into gold.",
    tag: "Client Work"
  },
  {
    id: 6,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+6&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1gIw_b1RSWRcjkie3iyRbvMFjuDtxh6H7=w1000?authuser=0",
    driveId: "1gIw_b1RSWRcjkie3iyRbvMFjuDtxh6H7",
    rating: 5.0,
    quote: "A true cinematic experience.",
    tag: "Client Work"
  },
  {
    id: 7,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+7&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1MO0Ui-wyUyM6UgpYFWxqI16QyXrCxiWS=w1000?authuser=0",
    driveId: "1MO0Ui-wyUyM6UgpYFWxqI16QyXrCxiWS",
    rating: 5.0,
    quote: "Fast turnaround and amazing quality.",
    tag: "Client Work"
  },
  {
    id: 8,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+8&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1GZdNk7zLemJi8B0V7rJZJndu4GbnejaO=w1000?authuser=0",
    driveId: "1GZdNk7zLemJi8B0V7rJZJndu4GbnejaO",
    rating: 5.0,
    quote: "Creative and reliable service.",
    tag: "Client Work"
  },
  {
    id: 9,
    name: "Client Review",
    role: "Video Project",
    image: "https://ui-avatars.com/api/?name=Client+9&background=random",
    videoThumb: "https://lh3.googleusercontent.com/d/1UIzwTB1wcsyGt5KXLlZ__JgflWCcF3qj=w1000?authuser=0",
    driveId: "1UIzwTB1wcsyGt5KXLlZ__JgflWCcF3qj",
    rating: 5.0,
    quote: "Great communication and excellent results.",
    tag: "Client Work"
  }
];

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setIsPlaying(false); // Reset play state on slide change
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsPlaying(false); // Reset play state on slide change
  };

  // Calculate properties for each card based on its distance from activeIndex
  const getCardStyle = (index: number) => {
    const total = reviews.length;
    let distance = (index - activeIndex);
    
    // Adjust distance to be within -total/2 to total/2 for shortest path
    if (distance > total / 2) distance -= total;
    if (distance < -total / 2) distance += total;

    // Determine visibility and styles
    const isActive = distance === 0;
    const isVisible = Math.abs(distance) <= 2; 

    // 3D Transforms
    const xOffset = distance * 280; // Horizontal spacing
    const scale = isActive ? 1.1 : Math.max(0.8 - (Math.abs(distance) * 0.1), 0.5);
    const opacity = isActive ? 1 : Math.max(0.6 - (Math.abs(distance) * 0.2), 0);
    const zIndex = isActive ? 50 : 10 - Math.abs(distance);
    
    // CRITICAL FIX: If playing, remove rotation so iframe works correctly
    const rotateY = (isActive && isPlaying) ? 0 : distance * -15; 

    return {
      isActive,
      isVisible,
      style: {
        x: xOffset,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        rotateY: rotateY,
        filter: isActive ? 'blur(0px)' : 'blur(2px) grayscale(80%) brightness(0.5)',
      }
    };
  };

  return (
    <section id="client-reels" className="py-32 bg-[#08080c] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-transparent to-darkBg z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-creativeBlue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 text-center relative z-20">
        <h2 className="text-sm font-mono text-creativeBlue mb-2 uppercase tracking-widest">04. Client Reels</h2>
      </div>

      {/* 3D Wheel Container */}
      <div className="relative h-[600px] w-full flex justify-center items-center perspective-1000 overflow-hidden">
        
        {/* Navigation Buttons (Left/Right of container) */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-20 z-30 p-4 rounded-full bg-white/5 hover:bg-creativeBlue/20 border border-white/10 hover:border-creativeBlue/50 transition-all text-white backdrop-blur-sm group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-20 z-30 p-4 rounded-full bg-white/5 hover:bg-creativeBlue/20 border border-white/10 hover:border-creativeBlue/50 transition-all text-white backdrop-blur-sm group"
        >
          <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Cards */}
        <div className="relative flex items-center justify-center w-full h-full preserve-3d">
          {reviews.map((review, index) => {
            const { isActive, isVisible, style } = getCardStyle(index);
            
            return (
              <MotionDiv
                key={review.id}
                className="absolute w-[300px] md:w-[340px] aspect-[9/16] rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden cursor-pointer origin-center"
                initial={false}
                animate={style}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ display: isVisible ? 'block' : 'none' }} 
                onClick={() => {
                  if (isActive) {
                    setIsPlaying(!isPlaying);
                  } else {
                    setActiveIndex(index);
                    setIsPlaying(false);
                  }
                }}
              >
                {/* Video / Image Container */}
                <div className="relative w-full h-full bg-black group">
                  
                  {isActive && isPlaying && review.driveId ? (
                    // SWITCHED TO IFRAME FOR RELIABLE PLAYBACK
                    // Added z-50 to ensure it's clickable and interactive
                    <iframe
                      src={`https://drive.google.com/file/d/${review.driveId}/preview`}
                      className="absolute inset-0 w-full h-full z-50 bg-black"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      title={review.name}
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <>
                      <img 
                        src={review.videoThumb} 
                        alt="Review Thumbnail" 
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/360/640?random=${review.id + 100}`;
                        }}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive && isPlaying ? 'scale-110' : 'scale-100'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
                    </>
                  )}

                  {/* Play Button Overlay (Only when NOT playing) */}
                  {isActive && !isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 animate-pulse-fast hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Info Content (Hidden when playing/active to allow viewing video) */}
                  {(!isActive) && (
                    <div className={`absolute bottom-0 left-0 w-full p-6 z-20 transition-all duration-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      {/* Tag */}
                      <div className="flex justify-between items-end mb-4">
                        <span className="inline-block px-3 py-1 bg-creativeBlue text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-[0_0_10px_rgba(50,138,202,0.4)]">
                          {review.tag}
                        </span>
                        
                        <div className="flex items-center text-neonTeal font-bold text-sm">
                          <Star className="w-4 h-4 fill-current mr-1" /> {review.rating}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-white font-medium text-lg mb-6 leading-snug drop-shadow-md border-l-2 border-neonTeal pl-3">
                        "{review.quote}"
                      </p>

                      {/* User */}
                      <div className="flex items-center gap-3">
                        <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full border border-white/20" />
                        <div>
                          <p className="text-sm font-bold text-white">{review.name}</p>
                          <p className="text-xs text-gray-400">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                </div>

                {/* Reflection effect */}
                <div className="absolute -bottom-4 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent opacity-20 transform scale-y-[-1] blur-sm pointer-events-none" />
              </MotionDiv>
            );
          })}
        </div>

        {/* Floor Reflection / Shadow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/50 blur-3xl z-0 pointer-events-none" />
      </div>

    </section>
  );
};

export default Reviews;