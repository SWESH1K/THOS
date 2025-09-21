import { Button } from "@/components/ui/button";
import { Users, Heart } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-primary-foreground/90">
          Whether you're looking to provide a child with education and care, or want to support 
          our cause, there are many ways to get involved and make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-4 w-full sm:w-auto"
            onClick={() => window.location.href = '/admissions'}
          >
            <Users className="mr-2 h-6 w-6" />
            Apply for Admissions
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 w-full sm:w-auto"
            onClick={() => window.location.href = '/donate'}
          >
            <Heart className="mr-2 h-6 w-6" />
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
}
