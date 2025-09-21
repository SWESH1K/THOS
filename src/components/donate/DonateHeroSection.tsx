import { Button } from "../ui/button";
import { Heart, ArrowRight } from "lucide-react";

export function DonateHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="mb-8">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every donation helps us provide education, care, and hope to underprivileged children. 
            Your generosity transforms lives and builds a brighter future for those who need it most.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            onClick={() => {
              const donationSection = document.getElementById('donation-options');
              donationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Donating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg"
            onClick={() => {
              const whySection = document.getElementById('why-donate');
              whySection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
