import { Timeline } from "../ui/timeline";
import { getProcessTimelineData } from "./TimelineContent";

export function TimelineSection() {
  const timelineData = getProcessTimelineData();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Admission Process & Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our step-by-step process designed with care and compassion
          </p>
        </div>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
