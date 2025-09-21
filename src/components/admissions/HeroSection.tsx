import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Heart, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  onApplyClick: () => void;
}

export function HeroSection({ title, subtitle, description, onApplyClick }: HeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Heart className="h-4 w-4 mr-2" />
            Admissions Open
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="pt-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={onApplyClick}
            >
              Apply Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
