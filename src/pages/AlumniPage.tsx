import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { AlumniHeroSection, AlumniGridSection } from "../components/alumni";

export function AlumniPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AlumniHeroSection />
        <AlumniGridSection />
      </main>
      <Footer />
    </div>
  );
}
