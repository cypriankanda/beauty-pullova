import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-pink-500/60 to-purple-500/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-0 h-0 rounded-lg flex items-center justify-center ${
              isScrolled ? "bg-gradient-to-br from-pink-500 to-purple-600" : "bg-white/20"
            }`}>
            </div>
            <span
              className={`text-2xl font-extrabold tracking-wide ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Pullova Home Beauty
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-pink-500 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`px-6 shadow-sm transition-all rounded-full ${
                isScrolled
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "bg-white text-pink-600 hover:bg-gray-100"
              }`}
            >
              Book Now
            </Button>
            <a href="#waitlist">
              <Button
                className="px-6 bg-purple-500 text-white hover:bg-purple-600 shadow-md hover:shadow-lg transition-all rounded-full"
              >
                Join Waitlist
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-800 font-medium hover:text-pink-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-pink-500 text-white rounded-full hover:bg-pink-600">
                Book Now
              </Button>
              <a href="#waitlist" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-purple-500 text-white rounded-full hover:bg-purple-600">
                  Join Waitlist
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;