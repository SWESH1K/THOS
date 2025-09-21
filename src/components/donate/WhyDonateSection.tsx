import { Card, CardContent } from "../ui/card";
import { GraduationCap, Users, Heart, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Education for All",
    description: "Your donations directly fund educational programs, providing books, supplies, and learning resources to children who otherwise wouldn't have access to quality education. Every rupee spent on education creates a ripple effect of positive change that lasts generations."
  },
  {
    icon: Users,
    title: "Building Community",
    description: "We don't just provide shelter and food - we create a nurturing environment where children develop life skills, emotional intelligence, and strong values. Your support helps us maintain small group settings where every child receives individual attention and care."
  },
  {
    icon: Heart,
    title: "Transforming Lives",
    description: "Many of our children come from difficult backgrounds, but with proper support, they flourish. Your contributions help us provide counseling, healthcare, and emotional support that enables these young minds to heal, grow, and dream of a better future."
  }
];

export function WhyDonateSection() {
  return (
    <section id="why-donate" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Your Donation Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every contribution makes a real difference in the lives of children who need it most. 
            Here's how your support creates lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <IconComponent className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Your Impact by the Numbers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹250</div>
                <div className="text-muted-foreground">Provides textbooks and stationery for one child for a month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹500</div>
                <div className="text-muted-foreground">Covers nutritious meals for one child for a week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹1000</div>
                <div className="text-muted-foreground">Funds complete educational support including tutoring</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
