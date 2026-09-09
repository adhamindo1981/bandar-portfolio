'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CertificateModal from './ui/CertificateModal';

export default function CertificatesSection() {
  const t = useTranslations('Certificates');
  const [activeTab, setActiveTab] = useState('internal');
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null);
  const categories = ['internal', 'external', 'appreciation'];
  const certificateUrls: Record<string, string> = { "دورة الخطة التشغيلية وتطويرها - وزارة الحج والعمرة 1440/08/23هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B_1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg", "دورة التخطيط والمتابعة الإدارية وتطوير الخطط التشغيلية 1437هـ": "https://dso7.raed.net:451/files/%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7-%D9%88%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg", "دورة فن التعامل مع المرؤوسين من وزارة الحج والعمرة 1435هـ": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D9%85%D8%B1%D8%A4%D9%88%D8%B3%D9%8A%D9%86-.jpg" };
  return <section id="certificates" className="section-card"><div className="mb-8"><p className="floating-label mb-3">Credentials</p><h2 className="heading-2 mb-0">{t('sectionTitle')}</h2></div><div className="mb-8 flex flex-wrap gap-2 border-b border-primary/10 pb-4">{categories.map((cat) => <button key={cat} onClick={() => setActiveTab(cat)} className={`rounded-full px-5 py-3 text-sm font-black transition-all ${activeTab === cat ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-accent hover:text-primary'}`}>{t(`tabs.${cat}`)}</button>)}</div><div className="grid gap-3">{(t.raw(activeTab) as string[]).map((item, index) => <button type="button" key={index} onClick={() => certificateUrls[item] && setSelectedCert({ url: certificateUrls[item], title: item })} className={`flex w-full items-center justify-between gap-4 rounded-xl border p-5 text-right transition-all ${certificateUrls[item] ? 'border-accent/30 bg-accent/10 hover:border-accent' : 'border-primary/10 bg-sand'}`}><span className="font-bold leading-relaxed text-secondary">{item}</span>{certificateUrls[item] && <span className="text-accent">↗</span>}</button>)}</div>{selectedCert && <CertificateModal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} imageUrl={selectedCert.url} title={selectedCert.title} />}</section>;
}
