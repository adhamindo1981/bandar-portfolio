'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const colors = {
  gold: '#C5A059',
  green: '#154234',
  navy: '#002B49',
};

/**
 * AnimatedPhotoNetwork - A component that connects 4 photos with intertwined moving lines.
 * Colors: Gold, Green, Navy.
 */
export default function AnimatedPhotoNetwork() {
  // Placeholder images - user will provide real ones later
  const photos = [
    { id: 1, src: '/images/side1.jpg', label: 'الجانب الأول' },
    { id: 2, src: '/images/side2.jpg', label: 'الجانب الثاني' },
    { id: 3, src: '/images/side3.jpg', label: 'الجانب الثالث' },
    { id: 4, src: '/images/side4.jpg', label: 'الجانب الرابع' },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden" dir="rtl">
      <div className="container-custom relative">
        
        {/* SVG Animation Layer - The Intertwined Lines */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full preserve-3d"
          >
            {/* Navy Line - The base flow */}
            <motion.path
              d="M150 150 C 400 50, 600 550, 850 450 C 950 400, 850 100, 500 300 C 150 500, 50 400, 150 150"
              stroke={colors.navy}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="20 15"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1000 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Green Line - Intertwined with Navy */}
            <motion.path
              d="M150 150 C 400 100, 600 500, 850 450 C 800 300, 600 100, 500 300 C 400 500, 100 450, 150 150"
              stroke={colors.green}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="15 20"
              initial={{ strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: -500 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="opacity-80"
            />

            {/* Gold Line - The Highlight over both */}
            <motion.path
              d="M150 150 C 350 80, 650 520, 850 450 C 900 350, 700 150, 500 300 C 300 450, 100 400, 150 150"
              stroke={colors.gold}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="30 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 1000 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glow effects for line intersections */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative z-20">
          
          {/* Top Right (1) */}
          <div className="flex justify-start">
            <PhotoFrame src={photos[0].src} label={photos[0].label} color={colors.navy} />
          </div>

          {/* Top Left (2) */}
          <div className="flex justify-end md:mt-20">
            <PhotoFrame src={photos[1].src} label={photos[1].label} color={colors.green} />
          </div>

          {/* Bottom Right (3) */}
          <div className="flex justify-start md:-mt-12">
            <PhotoFrame src={photos[2].src} label={photos[2].label} color={colors.gold} />
          </div>

          {/* Bottom Left (4) */}
          <div className="flex justify-end">
            <PhotoFrame src={photos[3].src} label={photos[3].label} color={colors.navy} />
          </div>

        </div>

      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}

function PhotoFrame({ src, label, color }: { src: string; label: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group"
    >
      {/* Decorative Border with user color */}
      <div 
        className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"
        style={{ backgroundColor: color }}
      ></div>
      
      <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 bg-slate-100">
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p className="text-white font-black text-lg">{label}</p>
        </div>
      </div>
      
      {/* Small floating mandala icon next to frame */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-30 border-2 border-slate-100 p-2">
         <svg viewBox="0 0 80 80" className="w-full h-full animate-spin-slow" style={{ color }}>
           <path d="M40 0l4 28 28 4-28 4-4 28-4-28-28-4 28-4z" fill="currentColor" opacity="0.3" />
           <circle cx="40" cy="40" r="2" fill="currentColor" />
         </svg>
      </div>
    </motion.div>
  );
}
