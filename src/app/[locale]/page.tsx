import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container-custom">
        <ProfileSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
