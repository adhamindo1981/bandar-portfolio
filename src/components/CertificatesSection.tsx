'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CertificateModal from './ui/CertificateModal';

type TabType = 'internal' | 'external' | 'appreciation';

export default function CertificatesSection() {
  const t = useTranslations('Certificates');
  const [activeTab, setActiveTab] = useState<TabType>('internal');
  
  // Modal State
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);

  const tabs: TabType[] = ['internal', 'external', 'appreciation'];

  // This is a placeholder map for certificate URLs. 
  // You can populate this with your actual links.
  const certificateUrls: Record<string, string> = {
    "دورة الخطة التشغيلية - وزارة الحج والعمرة 1440هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
  };

  const getItems = (type: TabType) => {
    let count = 0;
    let key = '';
    if (type === 'internal') { count = 8; key = 'internalCourses'; }
    else if (type === 'external') { count = 10; key = 'externalCourses'; }
    else { count = 8; key = 'appreciations'; }

    return Array.from({ length: count }).map((_, i) => t(`${key}.${i}`));
  };

  const handleCertClick = (title: string) => {
    const url = certificateUrls[title] || ""; // Get URL from map or empty
    setSelectedCert({ title, url });
  };

  return (
    <section id="certificates" className="section-card">
      <h2 className="heading-2">
        <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        {t('sectionTitle')}
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-bg-light p-1.5 rounded-xl border border-primary/5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[140px] px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === tab
                ? 'bg-primary text-white shadow-lg'
                : 'text-primary hover:bg-white'
            }`}
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {getItems(activeTab).map((item, index) => (
          <div
            key={`${activeTab}-${index}`}
            onClick={() => handleCertClick(item)}
            className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-secondary/80 text-sm md:text-base leading-relaxed group-hover:text-primary transition-colors flex-1">
              {item}
            </p>
            
            {/* View Indicator */}
            <div className="flex items-center gap-1.5 text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
              <span className="text-xs font-bold">عرض</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Lightbox Modal */}
      <CertificateModal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageUrl={selectedCert?.url || ""}
        title={selectedCert?.title || ""}
      />
    </section>
  );
}
