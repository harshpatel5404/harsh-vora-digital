import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 73595 25514",
      href: "tel:+917359525514"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "harshvora9898@gmail.com",
      href: "mailto:harshvora9898@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      subtitle: "Serving India + International"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/iamharshvora",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      href: "https://instagram.com/iamharshvora",
      color: "text-pink-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/iamharshvora", 
      color: "text-blue-700"
    },
    {
      icon: Phone,
      name: "Call Now",
      href: "tel:+917359525514",
      color: "text-white",
      special: true
    }
  ];

  const serviceOptions = [
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "web-development", label: "Web Development" },
    { value: "meta-ads", label: "Meta Ads" },
    { value: "seo", label: "SEO & Lead Generation" },
    { value: "social-media", label: "Social Media Growth" },
    { value: "consultation", label: "Business Consultation" }
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-title">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
              Ready to grow your business? Get in touch and let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-contact-form-title">
                    Send a Message
                  </h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="+91 XXXXX XXXXX" 
                                {...field}
                                value={field.value || ""}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4}
                                placeholder="Tell me about your project and goals..."
                                className="resize-vertical"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <Card className="border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-contact-info-title">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.title} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-primary-foreground h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1" data-testid={`text-contact-info-title-${index}`}>
                            {info.title}
                          </h4>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              data-testid={`link-contact-info-${index}`}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <div>
                              <p className="text-muted-foreground" data-testid={`text-contact-info-content-${index}`}>
                                {info.content}
                              </p>
                              {info.subtitle && (
                                <span className="text-sm text-muted-foreground" data-testid={`text-contact-info-subtitle-${index}`}>
                                  {info.subtitle}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-social-media-title">
                    Connect on Social Media
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : undefined}
                        rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors group ${
                          social.special ? "bg-primary text-primary-foreground" : ""
                        }`}
                        data-testid={`link-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <social.icon className={`text-2xl ${social.special ? "text-white" : social.color}`} />
                        <span className={`font-medium ${social.special ? "text-white" : "text-foreground group-hover:text-primary"}`}>
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
