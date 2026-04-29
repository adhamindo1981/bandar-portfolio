'use client';

import { useTranslations } from 'next-intl';

export default function ProfileSection() {
  const tProfile = useTranslations('Profile');
  const tSkills = useTranslations('Skills');

  const skills = [
    tSkills('timeManagement'),
    tSkills('computerSkills'),
    tSkills('customerService'),
    tSkills('conflictManagement')
  ];

  return (
    <section className="section-card">
      <h2 className="heading-2">
        <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </span>
        {tProfile('sectionTitle')}
      </h2>
      
      <p className="text-lg leading-relaxed text-secondary/80 mb-8 italic">
        {tProfile('summary')}
      </p>
      
      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-accent rounded-full" />
        {tSkills('sectionTitle')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-bg-light p-4 border-e-4 border-primary rounded-lg font-bold text-secondary/70 hover:bg-white hover:shadow-md transition-all cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
