'use client';

import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="section-card text-center overflow-hidden relative">
      {/* Decorative Gradient Blob */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <h2 className="heading-2 justify-center border-none mb-10">
        <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-2">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">{t('sectionTitle')}</span>
          <div className="w-16 h-1 bg-accent rounded-full mt-2" />
        </div>
      </h2>

      <p className="text-xl text-secondary/60 mb-12 max-w-2xl mx-auto font-medium">
        {t('location')}
      </p>

      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {/* Phone Button */}
        <a
          href={`tel:${t('phone').replace(/\s+/g, '')}`}
          className="group relative flex items-center gap-5 bg-primary text-white px-10 py-6 rounded-3xl font-black text-xl hover:bg-secondary hover:scale-105 transition-all shadow-[0_20px_50px_rgba(26,83,64,0.3)]"
        >
          <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-primary transition-all duration-500">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1H7a1 1 0 011 1c0 1.25.24 2.46.69 3.57a1 1 0 01-.28 1.12l-2.21 2.2z" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest opacity-70 mb-1">اتصل بي</span>
            <span dir="ltr">{t('phone')}</span>
          </div>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${t('email')}`}
          className="group relative flex items-center gap-5 bg-white border-4 border-primary/10 text-primary px-10 py-6 rounded-3xl font-black text-xl hover:border-primary hover:scale-105 transition-all shadow-xl"
        >
          <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest opacity-70 mb-1">راسلني</span>
            <span>{t('email')}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
