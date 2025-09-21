import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { 
  DonateHeroSection,
  DonationOptionsSection,
  WhyDonateSection,
  DonateTestimonialsSection,
  BankDetailsSection
} from "../components/donate";

export function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DonateHeroSection />
        <DonationOptionsSection />
        <WhyDonateSection />
        <DonateTestimonialsSection />
        <BankDetailsSection />
      </main>
      <Footer />
    </div>
  );
}
