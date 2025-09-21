import { Badge } from "@/components/ui/badge";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Home, BookOpen, GraduationCap } from "lucide-react";
import { servicesData } from "@/data/constants";

const iconMap = {
  Home,
  BookOpen,
  GraduationCap,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to ensure every child has the foundation they need to succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <CardContainer key={index} className="inter-var w-full max-w-sm mx-auto">
                <CardBody className="bg-card rounded-xl p-6 h-full group/card hover:shadow-2xl border border-border transition-shadow w-full">
                  <CardItem translateZ="50" className="text-xl font-bold text-muted-foreground">
                    <IconComponent className="h-12 w-12 text-primary mb-6" />
                  </CardItem>
                  <CardItem as="h3" translateZ="60" className="text-xl font-bold text-card-foreground mb-4">
                    {service.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </CardItem>
                  <CardItem translateZ="60" className="mt-6">
                    {service.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className={`text-xs ${badgeIndex > 0 ? 'ml-2' : ''}`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
