'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-secondary text-white py-12 mt-12 border-t-4 border-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 opacity-30 flex justify-center gap-4">
          <div className="w-12 h-1 bg-white rounded-full" />
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-12 h-1 bg-white rounded-full" />
        </div>
        <p className="text-sm md:text-base font-medium opacity-80 max-w-xl mx-auto leading-relaxed">
          {t('rights')}
        </p>
      </div>
    </footer>
  );
}
