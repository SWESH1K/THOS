import { AboutHeroSection } from "../components/sections/AboutHeroSection";
import { OriginStorySection } from "../components/sections/OriginStorySection";
import { OperationsSection } from "../components/sections/OperationsSection";
import { FounderTeamSection } from "../components/sections/FounderTeamSection";
import { StudentTestimonialsSection } from "../components/sections/StudentTestimonialsSection";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHeroSection />
        <OriginStorySection />
        <OperationsSection />
        <FounderTeamSection />
        <StudentTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
