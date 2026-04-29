'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="bg-primary text-white text-center py-12 px-6 border-b-8 border-secondary relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto flex flex-col items-center gap-6 relative z-10">
        <div className="absolute top-0 right-0">
          <LanguageSwitcher />
        </div>

        {/* Personal Image Placeholder using next/image */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-white/10 flex items-center justify-center backdrop-blur-sm relative group">
          <img 
            src="/images/avatar.png" 
            alt={t('name')} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-10 relative"
            onError={(e) => {
              (e.target as any).style.opacity = '0';
            }}
          />
          {/* Fallback Icon if image is missing */}
          <svg className="w-16 h-16 text-white/20 absolute" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight drop-shadow-md">
            {t('name')}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            {t('title')}
          </p>
        </div>
      </div>
    </header>
  );
}
