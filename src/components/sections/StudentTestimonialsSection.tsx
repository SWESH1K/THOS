import { aboutUsData } from "../../data/constants";
import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

export function StudentTestimonialsSection() {
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
            Student Voices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our current students and alumni about their transformative journey at THOS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {aboutUsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Age: {testimonial.age}
                    </p>
                    <Badge variant={testimonial.status === "Current Student" ? "default" : "secondary"}>
                      {testimonial.status}
                    </Badge>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
