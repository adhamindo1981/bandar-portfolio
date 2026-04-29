'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  return (
    <header className="relative h-[500px] flex items-center justify-center text-white text-center overflow-hidden border-b-8 border-accent/30 shadow-2xl islamic-pattern-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kaaba-hero.png"
          alt="Kaaba Panoramic Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
      </div>

      {/* Language Switcher Overlay */}
      <div className="absolute top-6 right-6 md:top-8 md:right-12 z-50 ltr:right-auto ltr:left-6 ltr:md:left-12">
        <Link 
          href={`/${otherLocale}`}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all group"
        >
          <span className="text-sm font-bold uppercase tracking-wider">
            {otherLocale === 'ar' ? 'العربية' : 'English'}
          </span>
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.19 15.378 3 17.5" />
          </svg>
        </Link>
      </div>

      {/* Header Content */}
      <div className="relative z-10 container-custom px-6 py-12 flex flex-col items-center gap-6">
        {/* Avatar with Animation */}
        <div className="relative avatar-animate">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse" />
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent shadow-2xl overflow-hidden relative z-10 bg-primary">
            <img 
              src="/avatar.jpg?v=2" 
              alt="Bandar Hasanin" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title with Correct Animation Classes */}
        <div className="space-y-3 md:space-y-4 max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg name-animate">
            {t('name')}
          </h1>
          <div className="h-1 w-16 md:h-1.5 md:w-24 bg-accent mx-auto rounded-full name-animate" style={{ animationDelay: '0.6s' }} />
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 leading-relaxed drop-shadow-md title-animate px-2">
            {t('title')}
          </p>
        </div>
      </div>

      {/* Bottom Decorative Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-light to-transparent" />
    </header>
  );
}
