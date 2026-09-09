'use client';

import { useTranslations } from 'next-intl';

export default function ProfileSection() {
  const t = useTranslations('Profile');
  return (
    <section id="about" className="section-card mt-8 md:mt-12">
      <div className="grid gap-8 md:grid-cols-[.65fr_1fr] md:gap-16">
        <div><p className="floating-label mb-3">Profile</p><h2 className="heading-2">{t('sectionTitle')}</h2></div>
        <p className="whitespace-pre-line text-lg font-bold leading-[2] text-muted md:text-xl">{t('summary')}</p>
      </div>
    </section>
  );
}
