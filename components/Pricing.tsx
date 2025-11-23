import React from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, Tv } from 'lucide-react';
import { PricingTier } from '../types';

// Fix for TypeScript errors with framer-motion types
const MotionDiv = motion.div as any;

const pricingTiers: PricingTier[] = [
  {
    name: "Short Form",
    price: "₹500 - ₹1,500",
    bestFor: "Reels & TikTok",
    features: [
      "Personal Branding",
      "Talking Heads",
      "Retention Reels",
      "Event Highlights",
      "Motion Graphics"
    ],
    isPopular: true,
    sampleUrls: [
      { label: "Silk Reel", url: "https://www.instagram.com/maharajasilksin/reel/DEmAqDHyOhi/" },
      { label: "Numismatist", url: "https://www.instagram.com/numismatist_sanjay/reel/DEckK4qzRMo/" },
      { label: "Influencer", url: "https://www.instagram.com/swethasrinivasan._/reel/DFfTAmqyPV8/" }
    ]
  },
  {
    name: "Mini Podcast",
    price: "₹400 - ₹750",
    bestFor: "Under 5 Mins",
    features: [
      "Quick Cuts",
      "Dynamic Captions",
      "Sound Mixing",
      "Color Correction"
    ],
    sampleUrls: [
      { label: "Drive Sample", url: "https://drive.google.com/file/d/1x4ylO82t2kMNF6IAaruKNGixXRrmvMPI/view?usp=drive_link" }
    ]
  },
  {
    name: "Pro Podcast",
    price: "₹3,000 / hr",
    bestFor: "Interviews",
    features: [
      "Multi-cam Sync",
      "Audio Mastering",
      "+₹200 for every 10 mins extra",
      "Full Episode Edit"
    ],
    sampleUrls: [
      { label: "YouTube Sample", url: "https://www.youtube.com/watch?v=q5CxeI20I7A&list=PLxrRreEgA9zzhoGJxPYzusY62OCjlKGom&index=3&pp=iAQB" }
    ]
  },
  {
    name: "Docu / Ads",
    price: "₹200 - ₹400",
    bestFor: "Per Minute Output",
    features: [
      "Vlogs & Commercials",
      "Based on 30 mins raw footage",
      "Narrative Flow",
      "B-Roll Selection"
    ],
    sampleUrls: [
      { label: "Documentary", url: "https://www.youtube.com/watch?v=HRaB4tE0c2g" }
    ]
  },
  {
    name: "Troll Videos",
    price: "₹1,500",
    bestFor: "Per Video",
    features: [
      "Meme Integration",
      "Fast Paced",
      "Sound FX Heavy",
      "High Engagement"
    ],
    sampleUrls: [
      { label: "Troll Video", url: "https://www.youtube.com/watch?v=7zTWYDgy0lA&t=119s" }
    ]
  },
  {
    name: "Graphic Design",
    price: "Custom",
    bestFor: "Branding",
    features: [
      "Posters (Print/Social)",
      "YouTube Thumbnails",
      "Brochures & Pamphlets",
      "Marketing Assets"
    ],
    sampleUrls: []
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#050509] relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-creativeBlue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-creativeBlue mb-2 uppercase tracking-widest">08. Rate Card</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Production Budget</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <MotionDiv
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative bg-[#111116] border ${tier.isPopular ? 'border-creativeBlue shadow-[0_0_20px_rgba(50,138,202,0.15)]' : 'border-white/10'} rounded-lg overflow-hidden group hover:border-creativeBlue/50 transition-colors duration-300`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-creativeBlue text-white text-[10px] font-bold px-3 py-1 font-mono uppercase rounded-bl-lg z-20">
                  Top Seller
                </div>
              )}

              {/* Card Header (Ticket Stub Style) */}
              <div className="p-6 border-b border-white/5 bg-white/5 relative">
                 <div className="absolute top-full left-0 w-full h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#111116_8px,#111116_12px)] opacity-50 -mt-0.5"></div>
                 <h4 className="text-xl font-bold text-white mb-1 group-hover:text-creativeBlue transition-colors">{tier.name}</h4>
                 <div className="text-xs font-mono text-gray-400 mb-4">{tier.bestFor}</div>
                 <div className="text-2xl md:text-3xl font-black text-white">{tier.price}</div>
              </div>

              {/* Features Body */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-creativeBlue shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Samples Section */}
                {tier.sampleUrls && tier.sampleUrls.length > 0 && (
                    <div className="border-t border-white/5 pt-4">
                        <span className="text-[10px] font-mono uppercase text-gray-500 mb-2 block">Reference Samples:</span>
                        <div className="flex flex-wrap gap-2">
                            {tier.sampleUrls.map((sample, i) => (
                                <a 
                                    key={i} 
                                    href={sample.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs bg-black/40 border border-white/10 px-2 py-1 rounded hover:bg-white/10 hover:text-white transition-colors text-creativeBlue"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    {sample.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
              </div>

            </MotionDiv>
          ))}
        </div>

        {/* Other Services Footer Note */}
        <div className="mt-12 p-6 bg-[#15151a] border border-white/10 rounded-lg text-center animate-fade-in-up">
            <h5 className="text-white font-bold mb-2 flex items-center justify-center gap-2">
                <Tv className="w-4 h-4 text-creativeBlue" /> Additional Creative Services
            </h5>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                We also offer <span className="text-white">Digital Marketing</span>, <span className="text-white">Photography</span>, <span className="text-white">Videography</span>, <span className="text-white">Content Writing</span> & <span className="text-white">Content Creation</span>. 
                Contact us for a custom quote.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;