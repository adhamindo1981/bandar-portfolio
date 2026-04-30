'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const colors = {
  gold: '#C5A059',
  darkGreen: '#0D2B22',
  black: '#000000',
  lightGreen: '#4ADE80',
};

/**
 * MilestoneImage Sub-component - Optimized for Responsiveness
 */
function MilestoneImage({ m, scrollYProgress }: { m: any, scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [m.revealStart, m.revealEnd], [0, 1]);
  const scale = useTransform(scrollYProgress, [m.revealStart, m.revealEnd], [0.6, 1]);

  return (
    <motion.div
      style={{ 
        top: m.top, 
        [m.side === 'L' ? 'left' : 'right']: '1%',
        opacity,
        scale
      }}
      className="absolute flex flex-col items-center group pointer-events-auto z-[200]"
    >
      <div className="relative w-20 h-20 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent shadow-2xl transition-all duration-500 hover:scale-110">
         <Image 
           src={m.src} 
           alt="Journey Milestone" 
           fill 
           className="object-cover"
           onError={(e) => {
             (e.target as any).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23154234"/%3E%3Cpath d="M30 50 L70 50 M50 30 L50 70" stroke="%23C5A059" stroke-width="2"/%3E%3C/svg%3E';
           }}
         />
      </div>
    </motion.div>
  );
}

export default function VisualJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const milestones = [
    { id: 1, top: '20%', revealStart: 0.15, revealEnd: 0.22, side: 'L', src: '/images/journey-1.jpg' },
    { id: 2, top: '40%', revealStart: 0.35, revealEnd: 0.42, side: 'R', src: '/images/journey-2.jpg' },
    { id: 3, top: '58%', revealStart: 0.55, revealEnd: 0.62, side: 'L', src: '/images/journey-3.jpeg' },
    { id: 4, top: '75%', revealStart: 0.72, revealEnd: 0.80, side: 'R', src: '/images/journey-4.jpg' },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none select-none">
      
      {/* 1. The Path Layer - Backstage */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 8500"
          preserveAspectRatio="none"
        >
          {[0, 1].map((sideIdx) => {
            const x = sideIdx === 0 ? 100 : 1100; 
            const off = sideIdx === 0 ? 50 : -50;
            const startY = 1000; 
            const endY = 7500;  

            return (
              <g key={sideIdx}>
                <motion.path
                  d={`M ${x} ${startY} C ${x+off} ${startY+1500}, ${x-off} ${startY+3000}, ${x} ${endY}`}
                  fill="none" stroke={colors.gold} strokeWidth="4" style={{ pathLength }} className="opacity-40"
                />
                <motion.path
                  d={`M ${x+off/2} ${startY} C ${x-off} ${startY+1500}, ${x+off} ${startY+3000}, ${x-off/2} ${endY}`}
                  fill="none" stroke={colors.black} strokeWidth="3" style={{ pathLength }} className="opacity-30"
                />
                <motion.path
                  d={`M ${x-off/2} ${startY} C ${x+off} ${startY+1500}, ${x-off} ${startY+3000}, ${x+off/2} ${endY}`}
                  fill="none" stroke={colors.darkGreen} strokeWidth="5" style={{ pathLength }} className="opacity-20"
                />
                <motion.path
                  d={`M ${x} ${startY} C ${x-off} ${startY+1500}, ${x+off} ${startY+3000}, ${x} ${endY}`}
                  fill="none" stroke={colors.lightGreen} strokeWidth="2" style={{ pathLength }} className="opacity-50"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* 2. The Images Layer */}
      <div className="absolute inset-0">
        {milestones.map((m) => (
          <MilestoneImage key={m.id} m={m} scrollYProgress={scrollYProgress} />
        ))}
      </div>

    </div>
  );
}
