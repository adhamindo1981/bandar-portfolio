'use client';

import { useTranslations } from 'next-intl';

export default function ProfileSection() {
  const t = useTranslations('Profile');

  return (
    <section id="about" className="section-card">
      <h2 className="text-3xl font-black mb-6 border-r-4 border-primary pr-4">{t('sectionTitle')}</h2>
      <p className="text-xl leading-relaxed text-gray-700 font-medium">
        {t('summary')}
      </p>
    </section>
  );
}
