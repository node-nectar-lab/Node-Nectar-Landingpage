import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ZielbildSection from '@/components/sections/ZielbildSection';
import EditorialBand from '@/components/sections/EditorialBand';
import RechnerSection from '@/components/sections/RechnerSection';
import ModuleSection from '@/components/sections/ModuleSection';
import VergleichSection from '@/components/sections/VergleichSection';
import PaketeSection from '@/components/sections/PaketeSection';
import ProzessSection from '@/components/sections/ProzessSection';
import ReferenzenSection from '@/components/sections/ReferenzenSection';
import ErgebnisSection from '@/components/sections/ErgebnisSection';
import EinwaendeSection from '@/components/sections/EinwaendeSection';
import BlogSection from '@/components/sections/BlogSection';
import KontaktSection from '@/components/sections/KontaktSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <ZielbildSection />
        <EditorialBand />
        <RechnerSection />
        <ModuleSection />
        <VergleichSection />
        <PaketeSection />
        <ProzessSection />
        <ReferenzenSection />
        <ErgebnisSection />
        <EinwaendeSection />
        <BlogSection />
        <KontaktSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
