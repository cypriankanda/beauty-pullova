import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate("/");

        // Wait for the home page to render
        setTimeout(() => {
          document
            .querySelector(href)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document
          .querySelector(href)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }

    setIsMobileMenuOpen(false);
  };

  // const handleLogoClick = () => {
  //   window.location.href = "/";
  // };

  /* 🔁 SWAPPED LINKS (this is the key fix) */
  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "/about-us" },
  ];

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

            {/* LOGO */}
            <Link to="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/pullova_logo.svg"
                alt="Pullova Beauty Services"
                className="w-11 h-11 lg:w-16 lg:h-16"
              />
              <span className="hidden lg:block text-xl xl:text-2xl font-extrabold text-gray-900 whitespace-nowrap">
                Pullova Beauty Services
              </span>
              <span className="lg:hidden text-lg font-extrabold text-gray-900 whitespace-nowrap">
                Pullova
              </span>
            </motion.div>
            </Link>

            <div className="flex-1" />

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-medium text-gray-700 hover:text-pink-500 transition"
                >
                  {link.name}
                </a>
              ))}

              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-pink-500"
              >
                Log In
              </Link>

              <Link to="/register">
                <Button
                  variant="outline"
                  className="px-5 border-pink-400 text-pink-500 hover:bg-pink-50 rounded-full font-semibold"
                >
                  Sign Up
                </Button>
              </Link>

              {/* <Button className="px-5 bg-pink-500 text-white hover:bg-pink-600 rounded-full">
                Book Now
              </Button> */}

              <Button
                onClick={(e) =>
                  handleNavClick(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "#waitlist"
                  )
                }
              >
                Join Waitlist
              </Button>
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden items-center gap-3">
              <a href="#waitlist" onClick={(e) => handleNavClick(e, "#waitlist")}>
                <Button
                  size="sm"
                  className="bg-pink-600 text-white rounded-full px-4 text-xs font-bold h-8"
                >
                  Join
                </Button>
              </a>

              <button
                className="p-2 text-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
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
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-gray-800"
                >
                  {link.name}
                </a>
              ))}

              <div className="border-t pt-4 space-y-4">
                <div className="flex gap-4">
                  <Link to="/login" className="flex-1">
                    <Button variant="outline" className="w-full rounded-full">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <Button className="w-full rounded-full border-pink-400 text-pink-500">
                      Sign Up
                    </Button>
                  </Link>
                </div>

                <Button className="w-full bg-pink-500 text-white rounded-full">
                  Book Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;