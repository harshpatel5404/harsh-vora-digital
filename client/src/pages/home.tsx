import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about.tsx";
import Services from "@/components/sections/services.tsx";
import Results from "@/components/sections/results.tsx";
import Pricing from "@/components/sections/pricing.tsx";
import Contact from "@/components/sections/contact.tsx";
import Footer from "@/components/navigation/footer.tsx";

export default function Home() {
  // Shared utility for consistent smooth scrolling
  const smoothScrollToId = (id: string, options: { updateHistory?: boolean } = {}) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;
    
    // Get dynamic navbar height (fallback to 80px if not found)
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height + 16 : 80;
    
    const top = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    
    // Update URL hash for shareability and history
    if (options.updateHistory !== false) {
      history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    // Handle initial page load with hash
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => smoothScrollToId(id, { updateHistory: false }), 100);
    }

    // Smooth scroll for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as Element;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      
      // Only handle same-page hash links
      if (!anchor) return;
      
      // Skip if opening in new tab or with modifier keys
      if (anchor.target === '_blank' || (e as MouseEvent).metaKey || (e as MouseEvent).ctrlKey || (e as MouseEvent).shiftKey || (e as MouseEvent).altKey) return;
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      const id = decodeURIComponent(href.slice(1));
      
      e.preventDefault();
      smoothScrollToId(id);
    };

    // Handle browser back/forward navigation
    const handlePopState = () => {
      if (location.hash) {
        const id = location.hash.slice(1);
        smoothScrollToId(id, { updateHistory: false });
      } else {
        // Navigate back to top when returning to base URL
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleNavClick);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
