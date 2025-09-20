import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

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

  const features = [
    ["Strategic Growth Planning", "Meta Ads Management", "SEO & Content Strategy", "Social Media Guidance"],
    ["Website Development", "Performance Optimization", "Monthly Progress Reports", "24/7 Support & Guidance"]
  ];

  const additionalOptions = [
    {
      title: "Project-Based Pricing",
      description: "Custom pricing for specific projects",
      action: "Get Custom Quote →"
    },
    {
      title: "Free Consultation", 
      description: "30-minute discovery call to discuss your needs",
      action: "Schedule Now →"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-pricing-title">
              Consultation & Pricing
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-pricing-description">
              Professional consulting services tailored to your business needs
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl" data-testid="card-main-pricing">
              <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-4" data-testid="text-pricing-plan-title">
                  Monthly Consultation
                </h3>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-2xl text-white opacity-80">₹</span>
                  <span className="text-6xl font-bold text-white" data-testid="text-pricing-amount">50,000</span>
                  <span className="text-xl text-white opacity-80 ml-2">/month</span>
                </div>
                <p className="text-white opacity-90 mb-8 text-lg leading-relaxed" data-testid="text-pricing-plan-description">
                  Comprehensive digital marketing and web development consultation to accelerate your business growth.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                  {features.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-3">
                      {column.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center text-white" data-testid={`text-pricing-feature-${columnIndex}-${featureIndex}`}>
                          <CheckCircle className="mr-3 text-yellow-300 h-5 w-5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <Button
                  size="lg"
                  className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={handleBooking}
                  data-testid="button-book-now"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Additional Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {additionalOptions.map((option, index) => (
              <Card key={option.title} className="border border-border" data-testid={`card-additional-option-${index}`}>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-3" data-testid={`text-option-title-${index}`}>
                    {option.title}
                  </h4>
                  <p className="text-muted-foreground mb-4" data-testid={`text-option-description-${index}`}>
                    {option.description}
                  </p>
                  <button 
                    className="text-primary font-semibold hover:underline transition-colors"
                    onClick={handleBooking}
                    data-testid={`button-option-${index}`}
                  >
                    {option.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
