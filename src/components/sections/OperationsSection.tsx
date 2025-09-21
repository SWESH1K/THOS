import { aboutUsData } from "../../data/constants";
import { Card } from "../ui/card";
import { motion } from "motion/react";

export function OperationsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {aboutUsData.operations.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutUsData.operations.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutUsData.operations.facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
