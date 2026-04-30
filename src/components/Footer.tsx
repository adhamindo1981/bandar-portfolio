'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * Footer Component - Authentic Islamic Lattice Version
 * Using a complex geometric SVG pattern to match the user's provided screenshot.
 */
export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#154234] text-white py-12 relative overflow-hidden border-t-4 border-accent">
      
      {/* Authentic Islamic Lattice (Geometric Interlocking Pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z'/%3E%3Cpath d='M0 0L50 50L100 0'/%3E%3Cpath d='M0 100L50 50L100 100'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Ccircle cx='0' cy='0' r='15'/%3E%3Ccircle cx='100' cy='0' r='15'/%3E%3Ccircle cx='0' cy='100' r='15'/%3E%3Ccircle cx='100' cy='100' r='15'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right items-center md:items-start">
          
          {/* Column 1: Contact & Social Media */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="text-accent text-lg font-black border-b border-accent/30 pb-1 w-fit mx-auto md:ml-auto md:mr-0">
                {t('Contact.sectionTitle')}
              </h4>
              
              <a 
                href="https://wa.me/966505684505" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/5 group hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <span className="text-md font-bold ltr">0505684505</span>
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52l.341.202c1.46.863 3.153 1.318 4.886 1.319 5.343 0 9.692-4.348 9.695-9.693.003-2.593-1.004-5.031-2.834-6.861-1.831-1.83-4.269-2.838-6.863-2.839-5.345 0-9.693 4.348-9.695 9.693-.001 1.71.448 3.376 1.3 4.848l.22.381-.893 3.266 3.344-.877zm11.232-6.586c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
              </a>

              <a 
                href="mailto:feoozee@hotmail.com" 
                className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/5 group hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <span className="text-md font-bold ltr">feoozee@hotmail.com</span>
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-[#D44638] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-accent text-lg font-black border-b border-accent/30 pb-1 w-fit mx-auto md:ml-auto md:mr-0">
                {t('Footer.followUs')}
              </h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="https://www.tiktok.com/@b.hasanin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-black transition-all shadow-md border border-white/5 group">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-[#1877F2] transition-all shadow-md border border-white/5 group">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </a>
                <a href="https://www.snapchat.com/add/feoozee" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-black hover:bg-[#FFFC00] transition-all shadow-md border border-white/5 group">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M256,48C154.33,48,72,117.84,72,204.42c0,11.51,1.43,22.65,4.1,33.22c1,4.13-0.34,8.5-3.32,11.66c-8.11,8.62-16.71,17.97-16.71,29.35c0,15.77,13,28.56,29,28.56c3.64,0,7.12-0.69,10.3-1.92c3.67-1.42,7.79-0.78,10.87,1.67c24.08,19.23,65.8,42.53,150.11,42.53s126.03-23.3,150.11-42.53c3.08-2.45,7.2-3.09,10.87-1.67c3.18,1.23,6.66,1.92,10.3,1.92c16,0,29-12.79,29-28.56c0-11.38-8.6-20.73-16.71-29.35c-2.98-3.16-4.32-7.53-3.32-11.66c2.67-10.57,4.1-21.71,4.1-33.22C440,117.84,357.67,48,256,48z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-[#39E09B] transition-all shadow-md border border-white/5 group">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.511 5.833l3.222-3.222 3.111 3.111-3.222 3.222h5.378v4.444h-5.378l3.222 3.222-3.111 3.111-3.222-3.222v5.378h-4.444v-5.378l-3.222 3.222-3.111-3.111 3.222-3.222h-5.378v-4.444h5.378l-3.222-3.222 3.111-3.111 3.222 3.222v-5.378h4.444v5.378z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-accent text-lg font-black border-b border-accent/30 pb-1 w-fit mx-auto md:ml-auto md:mr-0">
              {t('Footer.quickLinks')}
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="hover:text-accent transition-colors font-bold text-md">{t('Navigation.about')}</a>
              <a href="#experience" className="hover:text-accent transition-colors font-bold text-md">{t('Navigation.experience')}</a>
              <a href="#certificates" className="hover:text-accent transition-colors font-bold text-md">{t('Navigation.certificates')}</a>
              <p className="opacity-70 font-bold text-sm">{t('Footer.locationLabel')}: {t('Contact.location')}</p>
            </nav>
          </div>

          {/* Column 3: Photo & Slogan */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="relative w-24 h-24 rounded-full border-2 border-accent p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  src="/images/avatar.jpg" 
                  alt={t('Header.name')} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-black mb-1">{t('Header.name')}</h3>
              <p className="text-md opacity-80 font-bold leading-snug">
                خبير متمرس في إدارة خدمات الحج والعمرة <br />
                بناء مستقبل مهني بخبرات رصينة
              </p>
            </div>
          </div>

        </div>

        {/* Copyright & Design Credits */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="opacity-40 text-xs mb-2">{t('Footer.rights')}</p>
          <a 
            href="https://wa.me/6282125277889" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors text-xs font-black drop-shadow-md"
          >
            تصميم وتنفيذ @ أدهم بوقس
          </a>
        </div>
      </div>
    </footer>
  );
}
