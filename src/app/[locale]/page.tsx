import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container-custom">
        <ProfileSection />
        <ExperienceSection />
        <CertificatesSection />
      </div>

      <Footer />
    </main>
  );
}
