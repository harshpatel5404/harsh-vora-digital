import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShoppingCart, 
  TrendingUp, 
  Search, 
  Share2, 
  BarChart3, 
  Rocket,
  Check
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Custom e-commerce solutions using WordPress, WooCommerce, and Shopify. Optimized for conversions and scalability.",
      features: [
        "Custom Website Development",
        "Website Optimization & Scaling",
        "WooCommerce/Shopify Setup"
      ]
    },
    {
      icon: TrendingUp,
      title: "Meta Ads",
      description: "Strategic Meta advertising campaigns for branding and order generation. Proven ROI across various industries.",
      features: [
        "Branding Campaigns",
        "Order Generation",
        "Performance Marketing"
      ]
    },
    {
      icon: Search,
      title: "SEO & Lead Generation",
      description: "Comprehensive SEO strategies and lead generation systems to increase your organic visibility and conversions.",
      features: [
        "Technical SEO Optimization",
        "Content Strategy",
        "Lead Generation Systems"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Growth",
      description: "Strategic social media handling and guidance across Instagram, Facebook, and Pinterest for maximum engagement.",
      features: [
        "Instagram Management",
        "Facebook Strategy",
        "Pinterest Optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Growth Consulting",
      description: "Strategic consulting to identify growth opportunities and implement scalable business development strategies.",
      features: [
        "Growth Strategy Development",
        "Market Analysis",
        "Performance Optimization"
      ]
    },
    {
      icon: Rocket,
      title: "Performance Marketing",
      description: "Data-driven performance marketing campaigns designed to maximize ROI and drive measurable business results.",
      features: [
        "Campaign Optimization",
        "Analytics & Reporting",
        "ROI Maximization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-services-title">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              Comprehensive digital solutions to accelerate your business growth
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card h-full shadow-lg border border-border" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="text-2xl text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                          <Check className="text-primary mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
