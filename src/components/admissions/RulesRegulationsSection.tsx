import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { BookOpen } from "lucide-react";
import type { RuleRegulation } from "../../data/admissionsData";

interface RulesRegulationsSectionProps {
  rules: RuleRegulation[];
}

export function RulesRegulationsSection({ rules }: RulesRegulationsSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rules & Regulations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guidelines that ensure a safe, nurturing environment for all children
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule) => (
              <AccordionItem 
                key={rule.id} 
                value={rule.id}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-lg">{rule.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {rule.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
