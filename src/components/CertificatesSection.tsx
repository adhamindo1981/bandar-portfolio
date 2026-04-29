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

  // Certificate URLs Mapping (Supports both Arabic and English keys)
  const certificateUrls: Record<string, string> = {
    // --- Internal Courses ---
    "دورة الخطة التشغيلية - وزارة الحج والعمرة 1440هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
    "Operational Plan Course - Ministry of Hajj & Umrah (1440 AH)": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
    
    "التخطيط والمتابعة الادارية من مركز تدريب العاملين بوزارة الحج والعمرة 1437/07/16هـ": "https://dso7.raed.net:451/files/%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7-%D9%88%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg",
    "Admin Planning, Follow-up & Plan Development (1437 AH)": "https://dso7.raed.net:451/files/%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7-%D9%88%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg",
    
    "دورة فن التعامل مع المرؤسين من مركز تدريب العاملين بوزارة الحج والعمرة 1435/10/24هـ": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D9%85%D8%B1%D8%A4%D8%B3%D9%8A%D9%86-.jpg",
    "The Art of Dealing with Subordinates (1435 AH)": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D9%85%D8%B1%D8%A4%D8%B3%D9%8A%D9%86-.jpg",
    
    "دورة المعايير الرقابية للجان المراقبة من مركز تدريب العاملين بوزارة الحج والعمرة 1434/11/12هـ": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%8A%D9%8A%D8%B1-%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D9%8A%D8%A9-.jpg",
    "Control Standards for Monitoring Committees (1434 AH)": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%8A%D9%8A%D8%B1-%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D9%8A%D8%A9-.jpg",
    
    "دورة في الخدمات المميزة من مركز تدريب العاملين في الحج والعمرة بوزارة الحج 1425/11/02هـ": "https://dso6.raed.net:447/files/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A9-.jpg",
    "Distinctive Services & Excellence in Pilgrim Service (1425 AH)": "https://dso6.raed.net:447/files/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A9-.jpg",
    
    "دورة في التميز في خدمة الحاج من شركة اختيار وتدريب القوى البشرية 1425/11/02هـ": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D9%85%D9%8A%D8%B2%D8%A9.jpg",
    "Excellence in Pilgrim Service - Human Resources Co. (1425 AH)": "https://dso2.raed.net:454/files/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D9%85%D9%8A%D8%B2%D8%A9.jpg",
    
    "دورة تطوير خدمات الحج من مركز تدريب العاملين بوزارة الحج والعمرة 1421/10/24هـ": "https://dso6.raed.net:447/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D8%AC-.jpg",
    "Hajj Services Development (1421 AH)": "https://dso6.raed.net:447/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D8%AC-.jpg",

    "دورة ترحاب وصحة وفوج لعام 1446هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg", // Placeholder link
    "Welcome, Health & Crowd Control Course (1446 AH)": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",

    // --- External Courses (Group 1) ---
    "دورة في زيادة الإنتاجية الشخصية اتقان إدارة الوقت (برنامج رواد السياحة 2024/01/28 م)": "https://dso6.raed.net:447/files/%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg",
    "Personal Productivity & Time Management (Tourism Pioneers 2024)": "https://dso6.raed.net:447/files/%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg",
    
    "دورة في الالهام في التغيير الإيجابي (برنامج رواد السياحة 2024/01/09 م)": "https://dso2.raed.net:454/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%84%D9%87%D8%A7%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D9%8I%D8%B1-%D8%A7%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%A8%D9%8A.jpg",
    "Inspiration in Positive Change (Tourism Pioneers 2024)": "https://dso2.raed.net:454/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%84%D9%87%D8%A7%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D9%8I%D8%B1-%D8%A7%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%A8%D9%8A.jpg",
    
    "دورة في اتقان فن تجربة الضيوف والعملاء (برنامج رواد السياحة 2024/01/01 م)": "https://dso6.raed.net:447/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%AA%D9%82%D8%A7%D9%86-%D9%81%D9%86-%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9-%D8%A7%D9%84%D8%B6%D9%8A%D9%88%D9%81-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.jpg",
    "Mastering Guest & Customer Experience (Tourism Pioneers 2024)": "https://dso6.raed.net:447/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%AA%D9%82%D8%A7%D9%86-%D9%81%D9%86-%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9-%D8%A7%D9%84%D8%B6%D9%8A%D9%88%D9%81-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.jpg",
    
    "دورة في التحكم في إدارة المواجهات (برنامج رواد السياحة 2023/12/31 م)": "https://dso2.raed.net:454/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85-%D9%81%D9%8A-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%AAC%D9%87%D8%A7%D8%AA.jpg",
    "Conflict & Encounter Management (Tourism Pioneers 2023)": "https://dso2.raed.net:454/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85-%D9%81%D9%8A-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%AAC%D9%87%D8%A7%D8%AA.jpg",
    
    "دورة في تحويل التحديات الى رضا العملاء (برنامج رواد السياحة 2023/12/14 م)": "https://dso6.raed.net:447/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%AA%D8%AD%D9%88%D9%8A%D9%84-%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%89-%D8%B1%D8%B6%D8%A7-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.jpg",
    "Turning Challenges into Customer Satisfaction (Tourism Pioneers 2023)": "https://dso6.raed.net:447/files/%D8%AF%D9%88%D8%B1%D8%A9-%D9%81%D9%8A-%D8%AA%D8%AD%D9%88%D9%8A%D9%84-%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%89-%D8%B1%D8%B6%D8%A7-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.jpg",

    // --- Appreciations ---
    "شهادة شكر من بعثة الحج التشادية لعام 1446هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
    "Certificate of Appreciation from the Chad Hajj Mission (1446 AH)": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",

    "شهادة شكر من الرئيس التنفيذي لشركة رحلات ومنافع لعام 1445هـ": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg",
    "Certificate of Appreciation from the CEO of Rihlat & Manafi (1445 AH)": "https://dso2.raed.net:454/files/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9-.jpg"
  };

  const getItems = (type: TabType) => {
    let key = '';
    if (type === 'internal') key = 'internalCourses';
    else if (type === 'external') key = 'externalCourses';
    else key = 'appreciations';

    const items = t.raw(key) as string[];
    return items;
  };

  const handleCertClick = (title: string) => {
    const url = certificateUrls[title] || "";
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
        {getItems(activeTab).map((item, index) => {
          const hasUrl = !!certificateUrls[item];
          return (
            <div
              key={`${activeTab}-${index}`}
              onClick={() => hasUrl && handleCertClick(item)}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all group ${
                hasUrl 
                  ? 'border-primary/10 bg-white hover:border-primary/30 hover:shadow-md cursor-pointer' 
                  : 'border-gray-100 bg-gray-50/50 cursor-default opacity-80'
              }`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                hasUrl 
                  ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white' 
                  : 'bg-gray-200 text-gray-400'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className={`text-sm md:text-base leading-relaxed transition-colors flex-1 ${
                hasUrl ? 'text-secondary/80 group-hover:text-primary' : 'text-gray-400'
              }`}>
                {item}
              </p>
              
              {/* View Indicator */}
              {hasUrl && (
                <div className="flex items-center gap-1.5 text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-xs font-bold">{t('view')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
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
