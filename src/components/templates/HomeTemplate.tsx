import { Header } from '../organisms/Header';
import { Hero } from '../organisms/Hero';
import { ServicesSection } from '../organisms/ServicesSection';
import { DoctorsSection } from '../organisms/DoctorsSection';
import { ContactSection } from '../organisms/ContactSection';
import { Footer } from '../organisms/Footer';

export function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <DoctorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
