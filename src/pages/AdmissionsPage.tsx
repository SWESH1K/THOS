import { Header } from "../components/sections/Header";
import {
  HeroSection,
  EligibilitySection,
  TimelineSection,
  RulesRegulationsSection,
  CTASection,
  FAQSection,
  ContactSection,
} from "../components/admissions";
import { admissionsData, rulesRegulations, faqData } from "../data/admissionsData";

export function AdmissionsPage() {
  const handleApplyNow = () => {
    window.open("https://forms.gle/example", "_blank");
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(admissionsData.contact.whatsappMessage);
    const phoneNumber = admissionsData.contact.phone.replace(/\s+/g, "").replace("+", "");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection 
        title={admissionsData.hero.title}
        subtitle={admissionsData.hero.subtitle}
        description={admissionsData.hero.description}
        onApplyClick={handleApplyNow}
      />
      
      <EligibilitySection criteria={admissionsData.eligibility} />
      
      <TimelineSection />
      
      <RulesRegulationsSection rules={rulesRegulations} />
      
      <CTASection onApplyClick={handleApplyNow} />
      
      <FAQSection faqs={faqData} />
      
      <ContactSection 
        contact={admissionsData.contact}
        onWhatsAppClick={handleWhatsAppContact}
      />
    </div>
  );
}
