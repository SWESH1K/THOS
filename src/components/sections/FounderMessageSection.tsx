import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function FounderMessageSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <BackgroundGradient className="rounded-3xl p-8 bg-card">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" />
                  <AvatarFallback>FM</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">Founder's Message</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "Twenty-five years ago, I had a simple dream: to create a place where every child, 
                  regardless of their circumstances, could find love, care, and opportunity. Today, 
                  THOS stands as a testament to what's possible when we come together with compassion 
                  and purpose."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "Seeing our children grow, learn, and succeed fills my heart with immense joy. 
                  Each graduation is a celebration not just of academic achievement, but of resilience, 
                  hope, and the human spirit."
                </p>
                <div className="text-left">
                  <p className="font-semibold text-card-foreground">Dr. Maria Rodriguez</p>
                  <p className="text-muted-foreground">Founder & Director</p>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
