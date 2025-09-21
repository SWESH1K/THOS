import { aboutUsData } from "../../data/constants";
import { BackgroundGradient } from "../ui/background-gradient";
import { Meteors } from "../ui/meteors";
import { motion } from "motion/react";
import { Heart, Users, BookOpen, Award } from "lucide-react";
import { Button } from "../ui/button";

export function AboutHeroSection() {
  const stats = [
    { icon: Users, label: "Students Served", value: "500+" },
    { icon: BookOpen, label: "Programs", value: "15+" },
    { icon: Award, label: "Years of Impact", value: "9+" },
    { icon: Heart, label: "Volunteers", value: "200+" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
      <BackgroundGradient className="absolute inset-0 opacity-30" />
      <Meteors number={15} />
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400/25 to-teal-400/25 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
              Our Story & Mission
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {aboutUsData.heroTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            {aboutUsData.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Learn Our Story
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
              Meet Our Team
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:bg-card/70 transition-all duration-300 group-hover:scale-105 shadow-lg">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
