import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import harshVoraImage from "@assets/1753155656683_1758350497433.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const badges = [
    "Digital Marketing Expert",
    "Web Developer", 
    "Growth Consultant"
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="relative inline-block">
                <motion.div 
                  className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={harshVoraImage}
                    alt="Harsh Vora - Digital Marketing & Web Development Consultant" 
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
                About Harsh Vora
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p data-testid="text-about-description-1">
                  I'm Harsh Vora, a passionate digital marketing and web development consultant with extensive experience helping businesses grow their online presence. Based in India, I provide comprehensive digital solutions to clients both locally and internationally.
                </p>
                <p data-testid="text-about-description-2">
                  With expertise in Meta Ads, Google Ads, SEO, performance marketing, and custom web development, I've helped numerous businesses achieve their growth objectives through strategic digital initiatives and data-driven approaches.
                </p>
                <p className="text-foreground font-semibold" data-testid="text-about-tagline">
                  Providing Digital Marketing & Web Development solutions for businesses in India and Internationally.
                </p>
              </div>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {badges.map((badge, index) => (
                  <motion.span
                    key={badge}
                    variants={itemVariants}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      index === 0 
                        ? "bg-primary text-primary-foreground"
                        : index === 1
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                    data-testid={`badge-${badge.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
