'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  const n = useTranslations('Navigation');
  return (
    <header className="relative overflow-hidden bg-primary-deep text-white">
      <div className="absolute inset-0 opacity-20 decor-grid" aria-hidden="true" />
      <div className="container-custom relative z-10 flex min-h-[620px] flex-col justify-between py-6 md:min-h-[700px] md:py-8">
        <nav className="flex items-center justify-between border-b border-white/15 pb-5" aria-label="التنقل الرئيسي">
          <a href="#about" className="text-lg font-black tracking-tight">بندر حسنين<span className="text-accent">.</span></a>
          <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
            <a href="#about" className="transition-colors hover:text-accent">{n('about')}</a>
            <a href="#experience" className="transition-colors hover:text-accent">{n('experience')}</a>
            <a href="#certificates" className="transition-colors hover:text-accent">{n('certificates')}</a>
          </div>
          <LanguageSwitcher />
        </nav>
        <div className="grid items-end gap-10 pb-8 md:grid-cols-[1fr_auto] md:pb-16">
          <div className="max-w-3xl">
            <p className="floating-label mb-5">Portfolio · 2026</p>
            <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tight md:text-8xl">{t('name')}</h1>
            <div className="mb-8 h-px w-24 bg-accent" />
            <p className="max-w-2xl text-xl font-bold leading-relaxed text-white/80 md:text-3xl">{t('title')}</p>
          </div>
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-accent bg-primary md:h-56 md:w-56">
            <Image src="/images/avatar.jpg" alt={t('name')} fill className="object-cover" priority />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-sand)]/30 to-transparent" aria-hidden="true" />
    </header>
  );
}
