import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import VisualJourney from '@/components/VisualJourney';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Visual Journey (Lines and Images) */}
      <VisualJourney />
      
      <div className="relative z-10">
        <Header />
        
        <div className="container-custom">
          <ProfileSection />
          <ExperienceSection />
          <CertificatesSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
