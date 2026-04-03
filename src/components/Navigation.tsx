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

  // Lock body scroll when mobile menu is open
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
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-0"
              whileHover={{ scale: 1.05 }}
              onClick={handleLogoClick}
            >
              <img
                src="/PULLOVA1.svg"
                alt={t("nav.logoAlt")}
                className="w-9 h-9 lg:w-14 lg:h-14 flex-shrink-0"
              />
              {/* Full brand name only on desktop */}
              <span className="hidden lg:block text-2xl font-extrabold tracking-wide text-gray-900 whitespace-nowrap">
                {t("nav.brand")}
              </span>
              {/* Short name on mobile */}
              <span className="lg:hidden text-lg font-extrabold tracking-wide text-gray-900 whitespace-nowrap">
                Pullova
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
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

              <Link
                to="/login"
                className="font-medium text-gray-800 transition-colors hover:text-pink-500 whitespace-nowrap"
              >
                Log In
              </Link>

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

            {/* Mobile Right Side: Hamburger only — CTAs live inside the menu */}
            <div className="flex lg:hidden items-center gap-1">
              {/* Compact Book CTA — short label only */}
              <a href="#waitlist" onClick={(e) => handleNavClick(e, "#waitlist")}>
                <Button
                  size="sm"
                  className="bg-pink-500 text-white hover:bg-pink-600 rounded-full px-3 py-1.5 text-xs font-bold h-8"
                >
                  Join
                </Button>
              </a>

              {/* Hamburger */}
              <button
                aria-label={t("nav.toggleMenu")}
                aria-expanded={isMobileMenuOpen}
                className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="block"
                    >
                      <X className="w-6 h-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="block"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — full-screen overlay, sits below the navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-16 lg:top-20 left-0 right-0 z-50 bg-white shadow-xl lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-6 space-y-1">
                {/* Nav links */}
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.nameKey}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center py-3 px-2 text-gray-800 font-medium hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors text-base"
                  >
                    {t(link.nameKey)}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    to="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-3 px-2 text-gray-800 font-medium hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors text-base"
                  >
                    {t("nav.faq")}
                  </Link>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2 pt-2" />

                {/* Language switcher */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  className="py-1"
                >
                  <LanguageSwitcher
                    className="pt-0"
                    triggerClassName="w-full max-w-none"
                  />
                </motion.div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2 pt-2" />

                {/* Auth + CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.05 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex gap-3">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Log In
                      </Button>
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-pink-400 text-pink-500 hover:bg-pink-50 rounded-full font-semibold"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>

                  <Button className="w-full bg-pink-500 text-white rounded-full hover:bg-pink-600 font-semibold">
                    {t("nav.bookNow")}
                  </Button>

                  <a
                    href="#waitlist"
                    className="block"
                    onClick={(e) => handleNavClick(e, "#waitlist")}
                  >
                    <Button className="w-full bg-purple-500 text-white rounded-full hover:bg-purple-600 font-semibold shadow-md">
                      {t("nav.joinWaitlist")}
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;