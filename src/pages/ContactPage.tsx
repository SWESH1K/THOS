import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import {
  ContactHeroSection,
  ContactInfoSection,
  GetInTouchSection,
  GoogleMapSection,
  SocialMediaSection
} from "../components/contact";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <ContactHeroSection />

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Contact Information
                  </h2>
                  <ContactInfoSection />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Follow Us
                  </h2>
                  <SocialMediaSection />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <GoogleMapSection />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Get in Touch
                  </h2>
                  <GetInTouchSection />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat 
        phoneNumber="+1234567890"
        message="Hello! I'd like to get in touch with THOS orphanage."
      />
    </div>
  );
}
