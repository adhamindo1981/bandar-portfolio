'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ExperienceSection() {
  const t = useTranslations('Experience');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const jobs = Array.from({ length: 5 }).map((_, i) => ({ title: t(`jobs.${i}.title`), description: t(`jobs.${i}.description`), date: t(`jobs.${i}.date`) }));
  useEffect(() => { if (!isPlaying) return; const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % jobs.length), 5000); return () => clearInterval(interval); }, [isPlaying, jobs.length]);
  const select = (index: number) => { setActiveIndex(index); setIsPlaying(false); };
  return (
    <section id="experience" className="relative mb-6 overflow-hidden rounded-[1.5rem] bg-primary-deep px-6 py-12 text-white md:px-14 md:py-16">
      <div className="absolute inset-0 decor-grid opacity-20" aria-hidden="true" />
      <div className="relative z-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="floating-label mb-3">Career path</p><h2 className="text-3xl font-black md:text-5xl">{t('sectionTitle')}</h2></div><p className="text-sm font-bold text-white/50">{String(activeIndex + 1).padStart(2, '0')} / 05</p></div>
        <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
          <div className="min-h-[270px] border-y border-white/15 py-8 md:py-12"><p className="mb-5 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-black text-primary-deep">{jobs[activeIndex].date}</p><h3 className="mb-5 max-w-3xl text-3xl font-black leading-tight md:text-5xl">{jobs[activeIndex].title}</h3><p className="max-w-2xl text-lg font-bold leading-relaxed text-white/70 md:text-xl">{jobs[activeIndex].description}</p></div>
          <div className="flex flex-row gap-2 md:flex-col md:gap-3">{jobs.map((job, i) => <button key={i} onClick={() => select(i)} aria-label={job.title} aria-current={activeIndex === i} className={`flex items-center gap-3 rounded-lg p-2 text-right text-sm font-bold transition-all ${activeIndex === i ? 'bg-white/15 text-accent' : 'text-white/45 hover:bg-white/10 hover:text-white'}`}><span className={`h-2 w-2 rounded-full ${activeIndex === i ? 'bg-accent' : 'bg-white/30'}`} /><span className="hidden md:block">{job.date}</span></button>)}</div>
        </div>
      </div>
    </section>
  );
}
