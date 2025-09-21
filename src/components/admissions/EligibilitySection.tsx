import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { EligibilityCriteria } from "../../data/admissionsData";

interface EligibilitySectionProps {
  criteria: EligibilityCriteria[];
}

export function EligibilitySection({ criteria }: EligibilitySectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We welcome children who need a safe, loving environment to grow and thrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
