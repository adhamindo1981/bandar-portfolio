'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CertificateModal from './ui/CertificateModal';

export default function CertificatesSection() {
  const t = useTranslations('Certificates');
  const [activeTab, setActiveTab] = useState('internal');
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null);

  const categories = ['internal', 'external', 'appreciation'];

  // Map of some certificate links we previously added
  const certificateUrls: Record<string, string> = {
    "دورة الخطة التشغيلية وتطويرها - وزارة الحج والعمرة 1440/08/23هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B_1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
    "دورة التخطيط والمتابعة الإدارية وتطوير الخطط التشغيلية 1437هـ": "https://dso7.raed.net:451/files/%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7-%D9%88%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg",
    "دورة فن التعامل مع المرؤوسين من وزارة الحج والعمرة 1435هـ": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D9%85%D8%B1%D8%A4%D8%B3%D9%8A%D9%86-.jpg"
  };

  return (
    <section id="certificates" className="section-card">
      <h2 className="text-3xl font-black mb-8 border-r-4 border-primary pr-4 flex items-center gap-3">
        {t('sectionTitle')}
      </h2>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3 rounded-full font-black transition-all ${
              activeTab === cat ? 'bg-primary text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {t(`tabs.${cat}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {(t.raw(activeTab) as string[]).map((item, index) => (
          <div 
            key={index} 
            onClick={() => certificateUrls[item] && setSelectedCert({ url: certificateUrls[item], title: item })}
            className={`group p-6 bg-gray-50 rounded-2xl border-2 transition-all flex justify-between items-center ${
              certificateUrls[item] ? 'cursor-pointer border-accent/20 hover:border-accent hover:bg-accent/5' : 'border-transparent'
            }`}
          >
            <p className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">{item}</p>
            {certificateUrls[item] && (
              <div className="flex items-center gap-2 text-accent font-black opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <span>عرض</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          imageUrl={selectedCert.url}
          title={selectedCert.title}
        />
      )}
    </section>
  );
}
