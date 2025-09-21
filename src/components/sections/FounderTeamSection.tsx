import { aboutUsData } from "../../data/constants";
import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { motion } from "motion/react";

export function FounderTeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Founder Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries who started THOS and continue to lead our mission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutUsData.founderTeam.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {founder.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
