import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBooking = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Website Development (5 pages)",
        "Basic SEO Setup",
        "Social Media Setup (2 platforms)",
        "Meta Ads Management",
        "Monthly Progress Report",
        "Email Support",
        "Google My Business Setup"
      ],
      popular: false,
      buttonText: "Get Started",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "/month",
      description: "Most popular choice for growing businesses",
      features: [
        "Advanced Website Development",
        "Complete SEO & Content Strategy",
        "Social Media Management (4 platforms)",
        "Meta Ads + Google Ads Management",
        "Lead Generation System",
        "Weekly Progress Reports",
        "Phone & Email Support",
        "Free Strategy Consultation",
        "Landing Page Optimization"
      ],
      popular: true,
      buttonText: "Most Popular",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      period: "/month",
      description: "Complete digital transformation for established businesses",
      features: [
        "Custom Web Applications",
        "Advanced E-commerce Solutions",
        "Multi-Platform Campaign Management",
        "Data Analytics & Insights",
        "Marketing Automation",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Quarterly Strategy Review",
        "Custom Integrations",
        "Performance Guarantees"
      ],
      popular: false,
      buttonText: "Scale Enterprise",
      gradient: "from-pink-600 to-red-600"
    }
  ];

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

  return (
    <section id="pricing" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-pricing-title">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-description">
              Transparent pricing with the best rates in the industry. All packages include dedicated support and proven strategies.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`h-full border-2 ${plan.popular ? 'border-primary shadow-xl' : 'border-border'} overflow-hidden`} data-testid={`card-pricing-${index}`}>
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white text-center`}>
                      <h3 className="text-2xl font-bold mb-2" data-testid={`text-plan-name-${index}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold" data-testid={`text-plan-price-${index}`}>
                          {plan.price}
                        </span>
                        <span className="text-lg opacity-80 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-white opacity-90 text-sm" data-testid={`text-plan-description-${index}`}>
                        {plan.description}
                      </p>
                    </div>
                    
                    <div className="p-8">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={feature} className="flex items-start text-sm" data-testid={`text-plan-feature-${index}-${featureIndex}`}>
                            <CheckCircle className="mr-3 text-green-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                            : 'bg-gradient-to-r ' + plan.gradient + ' text-white hover:opacity-90'
                        }`}
                        onClick={handleBooking}
                        data-testid={`button-plan-${index}`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-card p-8 rounded-xl border border-border max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-additional-info-title">
                🎯 Need Something Custom?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-additional-info-description">
                Every business is unique. Get a custom quote tailored to your specific needs or schedule a free 30-minute consultation to discuss your growth strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="px-6 py-3"
                  onClick={handleBooking}
                  data-testid="button-custom-quote"
                >
                  Get Custom Quote
                </Button>
                <Button
                  className="px-6 py-3"
                  onClick={handleBooking}
                  data-testid="button-free-consultation"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}