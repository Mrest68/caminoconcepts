import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutSection from '@/components/AboutSection';
import FinalContactSection from '@/components/FinalContactSection';
import LogoSection from '@/components/LogoSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <ContactSection />
      <ServicesCarousel />
      <TestimonialSection />
      <PortfolioSection />
      <ReviewsSection />
      <AboutSection />
      <FinalContactSection />
    </main>
  );
}
