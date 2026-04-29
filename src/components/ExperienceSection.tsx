'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';

export default function ExperienceSection() {
  const t = useTranslations('Experience');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const jobs = t.raw('jobs') as { title: string; description: string; date: string }[];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % jobs.length);
  }, [jobs.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
  };

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      id="experience" 
      className="section-card overflow-hidden !bg-primary text-white border-none shadow-2xl shadow-primary/20 islamic-pattern-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          {t('sectionTitle')}
        </h2>
        
        {/* Play/Pause Indicator */}
        <div className="text-white/30 hidden md:block">
          {isPaused ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>
      </div>

      <div className="relative group px-0 md:px-16">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-lg border border-white/10 rounded-full shadow-xl text-white hover:bg-accent hover:text-primary transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-lg border border-white/10 rounded-full shadow-xl text-white hover:bg-accent hover:text-primary transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm min-h-[350px] md:min-h-[260px] flex items-center shadow-inner">
          <div 
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full"
            style={{ transform: `translateX(${currentIndex * 100}%)` }}
          >
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 p-5 sm:p-8 md:p-12 flex flex-col justify-center"
              >
                {/* Date Badge - Now at the top for maximum visibility */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-accent text-primary font-black rounded-lg text-sm shadow-md">
                    {job.date}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-tight break-words">
                    {job.title}
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute -right-6 top-0 w-1.5 h-full bg-accent/50 rounded-full" />
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed md:pe-4 font-medium">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 transition-all duration-500 rounded-full shadow-sm ${
                currentIndex === index ? 'w-12 bg-accent' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        [dir="rtl"] .flex {
          transform: translateX(${currentIndex * 100}%);
        }
        [dir="ltr"] .flex {
          transform: translateX(${-currentIndex * 100}%);
        }
      `}</style>
    </section>
  );
}
