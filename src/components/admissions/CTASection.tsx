import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

interface CTASectionProps {
  onApplyClick: () => void;
}

export function CTASection({ onApplyClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Begin the Journey?
          </h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards providing a loving home and bright future for a child in need
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 h-auto"
            onClick={onApplyClick}
          >
            Apply Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
