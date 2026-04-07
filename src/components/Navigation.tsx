import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const isNotHomePage =
      window.location.pathname !== "/" &&
      window.location.pathname !== "/index.html";

    if (isNotHomePage && href.startsWith("#")) {
      window.location.href = "/" + href;
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const navLinks = [
    { nameKey: "nav.services", href: "#services" },
    { nameKey: "nav.howItWorks", href: "#how-it-works" },
    { nameKey: "nav.aboutUs", href: "#about" },
  ] as const;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 lg:h-20 bg-white/95 backdrop-blur-md ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo Group */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              onClick={handleLogoClick}
            >
              <img
                src="/PULLOVA1.svg"
                alt={t("nav.logoAlt")}
                className="w-9 h-9 lg:w-12 lg:h-12 flex-shrink-0"
              />
              <span className="hidden lg:block text-xl xl:text-2xl font-extrabold tracking-tight text-gray-900 whitespace-nowrap">
                {t("nav.brand")}
              </span>
              <span className="lg:hidden text-lg font-extrabold tracking-wide text-gray-900 whitespace-nowrap">
                Pullova
              </span>
            </motion.div>

            {/* Spacer: This pushes the logo to the left and nav to the right */}
            <div className="flex-1" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.nameKey}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-medium text-gray-700 transition-colors hover:text-pink-500 whitespace-nowrap"
                >
                  {t(link.nameKey)}
                </a>
              ))}

              <Link
                to="/faq"
                className="font-medium text-gray-700 transition-colors hover:text-pink-500 whitespace-nowrap"
              >
                {t("nav.faq")}
              </Link>

              <div className="h-6 w-px bg-gray-200 mx-1" /> {/* Visual Separator */}

              <LanguageSwitcher />

              <Link
                to="/login"
                className="font-medium text-gray-700 transition-colors hover:text-pink-500 whitespace-nowrap"
              >
                Log In
              </Link>

              <Link to="/register">
                <Button
                  variant="outline"
                  className="px-5 border-pink-400 text-pink-500 hover:bg-pink-50 rounded-full font-semibold whitespace-nowrap"
                >
                  Sign Up
                </Button>
              </Link>

              <Button className="px-5 bg-pink-500 text-white hover:bg-pink-600 rounded-full whitespace-nowrap">
                {t("nav.bookNow")}
              </Button>

              <a href="#waitlist" onClick={(e) => handleNavClick(e, "#waitlist")}>
                <Button className="px-5 bg-purple-500 text-white hover:bg-purple-600 rounded-full shadow-md whitespace-nowrap">
                  {t("nav.joinWaitlist")}
                </Button>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a href="#waitlist" onClick={(e) => handleNavClick(e, "#waitlist")}>
                <Button
                  size="sm"
                  className="bg-pink-500 text-white rounded-full px-4 text-xs font-bold h-8"
                >
                  Join
                </Button>
              </a>

              <button
                aria-label={t("nav.toggleMenu")}
                className="p-2 text-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-16 left-0 right-0 z-50 bg-white shadow-xl lg:hidden p-6 space-y-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.nameKey}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-gray-800"
                >
                  {t(link.nameKey)}
                </a>
              ))}
              <Link to="/faq" className="block text-lg font-medium text-gray-800">
                {t("nav.faq")}
              </Link>
              <div className="border-t pt-4 space-y-4">
                <LanguageSwitcher triggerClassName="w-full justify-start" />
                <div className="flex gap-4">
                  <Link to="/login" className="flex-1">
                    <Button variant="outline" className="w-full rounded-full">Log In</Button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <Button variant="outline" className="w-full rounded-full border-pink-400 text-pink-500">Sign Up</Button>
                  </Link>
                </div>
                <Button className="w-full bg-pink-500 text-white rounded-full">Book Now</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;