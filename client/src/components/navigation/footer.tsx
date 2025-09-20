import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" }
  ];

  const services = [
    "Digital Marketing",
    "Web Development", 
    "Meta Ads",
    "SEO & Lead Generation",
    "Social Media Growth",
    "Business Consulting"
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/iamharshvora",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/iamharshvora", 
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/iamharshvora",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                data-testid="text-footer-brand"
              >
                Harsh Vora
              </motion.h3>
              <motion.p 
                className="text-muted mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-footer-description"
              >
                Digital Marketing & Web Development consultant helping businesses grow in India and internationally.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-4" data-testid="text-footer-quick-links-title">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-muted hover:text-background transition-colors"
                      data-testid={`link-footer-quick-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold mb-4" data-testid="text-footer-services-title">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="text-muted" data-testid={`text-footer-service-${index}`}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="pt-8 border-t border-muted text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-muted" data-testid="text-footer-copyright">
              © {currentYear} Harsh Vora. All rights reserved. | 
              <a 
                href="mailto:harshvora9898@gmail.com" 
                className="hover:text-background transition-colors ml-1"
                data-testid="link-footer-email"
              >
                harshvora9898@gmail.com
              </a> | 
              <a 
                href="tel:+917359525514" 
                className="hover:text-background transition-colors ml-1"
                data-testid="link-footer-phone"
              >
                +91 73595 25514
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
