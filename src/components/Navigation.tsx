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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}
          >
            <img
              src="/PULLOVA1.svg"
              alt={t("nav.logoAlt")}
              className="w-14 h-14"
            />
            <span className="text-2xl font-extrabold tracking-wide text-gray-900 whitespace-nowrap">
              {t("nav.brand")}
            </span>
          </motion.div>

          {/* Desktop Navigation — gap-5 keeps everything on one line */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.nameKey}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-medium text-gray-800 transition-colors hover:text-pink-500 whitespace-nowrap"
              >
                {t(link.nameKey)}
              </a>
            ))}

            <Link
              to="/faq"
              className="font-medium text-gray-800 transition-colors hover:text-pink-500 whitespace-nowrap"
            >
              {t("nav.faq")}
            </Link>

            <LanguageSwitcher />

            {/* Log In — whitespace-nowrap prevents two-line wrap */}
            <Link
              to="/login"
              className="font-medium text-gray-800 transition-colors hover:text-pink-500 whitespace-nowrap"
            >
              Log In
            </Link>

            {/* Sign Up — outlined */}
            <Link to="/register">
              <Button
                variant="outline"
                className="px-5 border-pink-400 text-pink-500 hover:bg-pink-50 hover:border-pink-500 transition-all rounded-full font-semibold whitespace-nowrap"
              >
                Sign Up
              </Button>
            </Link>

            <Button className="px-5 bg-pink-500 text-white hover:bg-pink-600 shadow-sm transition-all rounded-full whitespace-nowrap">
              {t("nav.bookNow")}
            </Button>

            <a
              href="#waitlist"
              onClick={(e) => handleNavClick(e, "#waitlist")}
            >
              <Button className="px-5 bg-purple-500 text-white hover:bg-purple-600 shadow-md hover:shadow-lg transition-all rounded-full whitespace-nowrap">
                {t("nav.joinWaitlist")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={t("nav.toggleMenu")}
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
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
                  key={link.nameKey}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-gray-800 font-medium hover:text-pink-500 transition-colors"
                >
                  {t(link.nameKey)}
                </a>
              ))}

              <Link
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-800 font-medium hover:text-pink-500 transition-colors"
              >
                {t("nav.faq")}
              </Link>

              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-800 font-medium hover:text-pink-500 transition-colors"
              >
                Log In
              </Link>

              <LanguageSwitcher
                className="pt-2"
                triggerClassName="w-full max-w-none"
              />

              <Link
                to="/register"
                className="block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full border-pink-400 text-pink-500 hover:bg-pink-50 rounded-full font-semibold"
                >
                  Sign Up
                </Button>
              </Link>

              <Button className="w-full bg-pink-500 text-white rounded-full hover:bg-pink-600">
                {t("nav.bookNow")}
              </Button>

              <a
                href="#waitlist"
                className="block"
                onClick={(e) => handleNavClick(e, "#waitlist")}
              >
                <Button className="w-full bg-purple-500 text-white rounded-full hover:bg-purple-600">
                  {t("nav.joinWaitlist")}
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