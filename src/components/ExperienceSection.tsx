'use client';

import { useTranslations } from 'next-intl';

export default function ExperienceSection() {
  const t = useTranslations('Experience');

  // We can't directly map an array of objects in next-intl easily without complex config,
  // but we can iterate if we know the length, or use the raw data.
  // For simplicity and following the user's JSON structure:
  const jobsCount = 6;
  const jobs = Array.from({ length: jobsCount }).map((_, i) => ({
    title: t(`jobs.${i}.title`),
    description: t(`jobs.${i}.description`),
    date: t(`jobs.${i}.date`),
  }));

  return (
    <section id="experience" className="section-card">
      <h2 className="heading-2">
        <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        {t('sectionTitle')}
      </h2>
      
      <div className="relative border-s-2 border-primary/10 space-y-8 py-2">
        {jobs.map((job, index) => (
          <div key={index} className="relative ps-8">
            {/* Timeline Dot */}
            <div className="absolute -start-[9px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm" />
            
            <div className="bg-bg-light/50 p-6 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white transition-all group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {job.title}
                </h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {job.date}
                </span>
              </div>
              <p className="text-secondary/70 leading-relaxed">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
