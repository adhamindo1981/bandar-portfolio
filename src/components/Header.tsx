'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './ui/LanguageSwitcher';

/**
 * Header component - Final Gold Version
 * 1. Gold circular border (#C5A059)
 * 2. Gold decorative lines
 * 3. Gold text with strong WHITE shadow
 */
export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background panoramic image */}
      <Image
        src="/images/kaaba-hero.png" 
        alt="Panoramic Kaaba Background"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Dark Royal Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary/95 backdrop-blur-[1px]"></div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center px-4">

        {/* 1. Profile Image with REAL GOLD Border */}
        <div className="relative group mb-8">
          {/* Gold Glow Aura */}
          <div className="absolute -inset-2 bg-accent/30 rounded-full blur-xl group-hover:bg-accent/50 transition duration-1000"></div>
          
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[5px] border-accent shadow-[0_0_30px_rgba(197,160,89,0.4)] overflow-hidden bg-white/10 flex items-center justify-center relative z-10 ring-4 ring-white/5">
            <Image 
              src="/images/avatar.jpg" 
              alt={t('name')} 
              fill
              className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Name in Pure White for contrast */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tight">
          {t('name')}
        </h1>
        
        {/* 2. REAL GOLD Decorative Divider */}
        <div className="flex items-center gap-5 mb-8">
          <div className="h-0.5 w-20 bg-accent shadow-[0_0_8px_rgba(197,160,89,0.6)] rounded-full"></div>
          <div className="w-4 h-4 rotate-45 bg-accent border-2 border-white shadow-[0_0_10px_rgba(197,160,89,0.8)]"></div>
          <div className="h-0.5 w-20 bg-accent shadow-[0_0_8px_rgba(197,160,89,0.6)] rounded-full"></div>
        </div>

        {/* 3. GOLD Professional Title with Strong WHITE Shadow */}
        <p 
          className="text-2xl md:text-4xl font-black max-w-4xl leading-relaxed text-accent mb-8"
          style={{ 
            textShadow: '2px 2px 0px #FFF, -1px -1px 0px #FFF, 1px -1px 0px #FFF, -1px 1px 0px #FFF, 0px 4px 10px rgba(0,0,0,0.3)' 
          }}
        >
          {t('title')}
        </p>

        {/* Language Switcher - Moved Under Title */}
        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light to-transparent opacity-40"></div>
    </header>
  );
}
