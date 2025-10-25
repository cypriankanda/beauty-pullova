import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const services = [
    "Makeup & Styling",
    "Hair Services",
    "Nail Care",
    "Skincare & Spa",
    "Bridal Packages",
    "Special Events"
  ];

  const company = [
    "About Us",
    "How It Works",
    "For Beauticians",
    "For Agents",
    "Careers",
    "Press"
  ];

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ];

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Beauty Tips</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for exclusive offers, beauty tips, and updates
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 px-8 py-4 h-auto rounded-xl font-semibold group">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
               
                <span className="text-2xl font-bold">Pullova Beauty</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Premium beauty services delivered to your home by certified professionals across the USA.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3" />
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3" />
                Contact
              </h3>
              <ul className="space-y-5">
                <li className="group">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Email</div>
                      <a
                        href="mailto:hello@beautyhome.com"
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        hello@beautyhome.com
                      </a>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Phone</div>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Location</div>
                      <span className="text-white font-medium">Seattle, USA</span>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Pullova Technologies Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-sm justify-center">
                {legal.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-gray-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;