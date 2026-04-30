'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ExperienceSection() {
  const t = useTranslations('Experience');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const jobsCount = 5;
  const jobs = Array.from({ length: jobsCount }).map((_, i) => ({
    title: t(`jobs.${i}.title`),
    description: t(`jobs.${i}.description`),
    date: t(`jobs.${i}.date`),
  }));

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % jobs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, jobs.length]);

  const handleNext = () => { setActiveIndex((prev) => (prev + 1) % jobs.length); setIsPlaying(false); };
  const handlePrev = () => { setActiveIndex((prev) => (prev - 1 + jobs.length) % jobs.length); setIsPlaying(false); };

  return (
    <section id="experience" className="relative py-20 bg-primary overflow-hidden border-8 border-accent">
      {/* Authentic Islamic Lattice Pattern - Matches Footer */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z'/%3E%3Cpath d='M0 0L50 50L100 0'/%3E%3Cpath d='M0 100L50 50L100 100'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Ccircle cx='0' cy='0' r='15'/%3E%3Ccircle cx='100' cy='0' r='15'/%3E%3Ccircle cx='0' cy='100' r='15'/%3E%3Ccircle cx='100' cy='100' r='15'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}
      ></div>
      
      <div className="container-custom relative z-10 text-white">
        <h2 className="text-4xl font-black text-center mb-16">{t('sectionTitle')}</h2>
        
        <div className="relative max-w-4xl mx-auto group">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-10 md:p-16 shadow-2xl min-h-[350px] flex flex-col justify-center relative">
            <div className="absolute top-8 right-8">
              <span className="bg-accent text-primary px-5 py-1 rounded-full text-sm font-black shadow-lg">
                {jobs[activeIndex].date}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              {jobs[activeIndex].title}
            </h3>
            <p className="text-xl opacity-90 leading-relaxed font-bold border-r-4 border-accent pr-6">
              {jobs[activeIndex].description}
            </p>
          </div>

          {/* Controls */}
          <button onClick={handlePrev} className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-20">
            <svg className="w-8 h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={handleNext} className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-white/20 transition-all z-20 backdrop-blur-md border border-white/10">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {jobs.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'w-10 h-3 bg-accent shadow-lg' : 'w-3 h-3 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
