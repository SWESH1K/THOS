import { Header } from "../components/sections/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { StatisticsSection } from "../components/sections/StatisticsSection";
import { FounderMessageSection } from "../components/sections/FounderMessageSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { GallerySection } from "../components/sections/GallerySection";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Footer } from "../components/sections/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <FounderMessageSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
