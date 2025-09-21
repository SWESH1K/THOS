import { Users, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { statisticsData } from "@/data/constants";

const iconMap = {
  Users,
  GraduationCap,
  Trophy,
  BookOpen,
};

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-card-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
