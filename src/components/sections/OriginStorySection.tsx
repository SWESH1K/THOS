import { aboutUsData } from "../../data/constants";
import { Card } from "../ui/card";
import { motion } from "motion/react";

export function OriginStorySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {aboutUsData.origin.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutUsData.origin.content}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <img
                src={aboutUsData.origin.image}
                alt="THOS Origin Story"
                className="w-full h-80 object-cover"
              />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
