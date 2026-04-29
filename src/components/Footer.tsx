'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Contact');
  const nav = useTranslations('Navigation');
  const foot = useTranslations('Footer');
  const head = useTranslations('Header');

  return (
    <footer className="bg-primary text-white mt-12 rounded-t-[3rem] shadow-[0_-15px_50px_rgba(26,77,46,0.3)] relative overflow-hidden islamic-pattern-dark">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-right ltr:text-left">
          
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-accent text-xl font-black mb-4">{foot('contactUs')}</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/966505684505" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group max-w-[280px]"
                >
                  <span className="font-bold text-lg tracking-wider ltr:font-sans">{t('phone')}</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .016 5.398.013 12.037c0 2.123.554 4.197 1.606 6.054L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.637 0 12.035-5.399 12.038-12.038a11.83 11.83 0 00-3.535-8.493" />
                  </svg>
                </a>
                <a 
                  href={`mailto:${t('email')}`}
                  className="flex items-center justify-between px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group max-w-[280px]"
                >
                  <span className="font-bold text-lg truncate ml-2 ltr:font-sans">{t('email')}</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
              <h4 className="text-accent text-xl font-black">{foot('followUs')}</h4>
              <div className="flex gap-3">
                {/* TikTok */}
                <a href="https://www.tiktok.com/@b.hasanin?_r=1&_t=ZS-95wTh1pswdQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/18MDg9dK2h/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Snapchat */}
                <a href="https://www.snapchat.com/@abofaiz1980?sender_web_id=c2c81074-d907-4ced-8169-0aa3fe60ba81&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFFC00] hover:text-black transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.41c-2.48 0-4.5 2.02-4.5 4.5 0 1.25.51 2.38 1.34 3.2 1.42 1.42 1.42 4.54 1.42 4.54l1.74 1.75 1.74-1.75s0-3.12 1.42-4.54c.83-.82 1.34-1.95 1.34-3.2 0-2.48-2.02-4.5-4.5-4.5z"/></svg>
                </a>
                {/* Linktree (using a tree icon) */}
                <a href="https://linktr.ee/center.rehlat.209" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#43E660] hover:text-black transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L4 12h3v8h10v-8h3L12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="hidden md:block space-y-6">
            <h4 className="text-accent text-xl font-black mb-6">{foot('quickLinks')}</h4>
            <ul className="space-y-4 text-lg font-medium text-white/70">
              <li><a href="#about" className="hover:text-accent transition-colors">{nav('about')}</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">{nav('experience')}</a></li>
              <li><a href="#certificates" className="hover:text-accent transition-colors">{nav('certificates')}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{nav('contact')}</a></li>
            </ul>
          </div>

          {/* Column 3: Identity/Logo */}
          <div className="flex flex-col items-center md:items-start md:text-right ltr:md:text-left gap-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white leading-tight">{head('name')}</h3>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                {head('title')}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-accent ltr:flex-row-reverse ltr:justify-end">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-bold text-sm">{foot('locationLabel')}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
          <p className="text-sm font-bold text-white/60">{foot('rights')}</p>
          <p className="text-sm font-medium text-white/40">
            {foot('designBy')} <span className="text-accent/80 font-black">@ ADHAM BUGIS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
