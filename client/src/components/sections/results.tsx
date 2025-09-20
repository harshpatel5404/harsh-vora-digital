import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const results = [
    {
      title: "E-commerce Growth",
      description: "300% increase in online orders through strategic optimization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "E-commerce analytics dashboard showing order growth"
    },
    {
      title: "Meta Ads Performance", 
      description: "4.2x ROAS achieved through optimized campaign strategies",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Meta ads performance dashboard showing campaign metrics"
    },
    {
      title: "SEO Success",
      description: "250% organic traffic increase within 6 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "SEO analytics showing organic traffic growth curves"
    },
    {
      title: "Social Media Growth",
      description: "500% follower growth with 8x engagement rate increase",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Social media analytics showing engagement metrics and growth"
    },
    {
      title: "Lead Generation",
      description: "180 qualified leads generated per month with 35% conversion rate",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Lead generation funnel showing conversion rates and pipeline metrics"
    },
    {
      title: "Revenue Growth",
      description: "400% revenue increase through integrated digital strategies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Revenue growth chart showing upward trending business metrics"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients", bgClass: "bg-primary text-primary-foreground" },
    { number: "100+", label: "Projects Completed", bgClass: "bg-secondary text-secondary-foreground" },
    { number: "5+", label: "Years Experience", bgClass: "bg-accent text-accent-foreground" },
    { number: "15+", label: "Countries Served", bgClass: "bg-card text-card-foreground border border-border" }
  ];

  return (
    <section id="results" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-results-title">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-results-description">
              Proven Results in India and International Campaigns
            </p>
          </motion.div>

          {/* Results Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {results.map((result, index) => (
              <motion.div key={result.title} variants={itemVariants}>
                <Card className="shadow-lg border border-border overflow-hidden" data-testid={`card-result-${index}`}>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={result.image}
                        alt={result.alt}
                        className="w-full h-full object-cover"
                        data-testid={`img-result-${index}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-result-title-${index}`}>
                      {result.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`text-result-description-${index}`}>
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`text-center p-6 rounded-xl ${stat.bgClass}`}
                data-testid={`stat-${index}`}
              >
                <div className="text-3xl font-bold mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-sm opacity-90" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
