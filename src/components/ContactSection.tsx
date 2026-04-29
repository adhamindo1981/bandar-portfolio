'use client';

import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="section-card text-center">
      <h2 className="heading-2 justify-center">
        <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        {t('sectionTitle')}
      </h2>

      <p className="text-secondary/70 mb-8 max-w-md mx-auto">
        {t('location')}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${t('phone').replace(/\s+/g, '')}`}
          className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary hover:scale-105 transition-all shadow-lg"
        >
          <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1H7a1 1 0 011 1c0 1.25.24 2.46.69 3.57a1 1 0 01-.28 1.12l-2.21 2.2z" />
            </svg>
          </span>
          <span dir="ltr">{t('phone')}</span>
        </a>

        <a
          href={`mailto:${t('email')}`}
          className="group flex items-center gap-3 bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white hover:scale-105 transition-all shadow-sm"
        >
          <span className="bg-primary/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </span>
          {t('email')}
        </a>
      </div>
    </section>
  );
}
